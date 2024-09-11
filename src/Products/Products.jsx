import { useState, useMemo, useLayoutEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';
import { useTransition, a } from '@react-spring/web';

import useMedia from './useMedia';
import data from './data';
import './Products.css';
import { Link } from 'react-router-dom';

export default function Products() {
  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [3, 2, 1], 1);
  const [ref, { width }] = useMeasure();
  const [items, setItems] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  //Variables para el zoom de las imagenes
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  
  const containerRefs = useRef([]);

  useLayoutEffect(() => {
    const updatedItems = items.map((item, index) => {
      if (containerRefs.current[index]) {
        const cardHeight = containerRefs.current[index].getBoundingClientRect().height;
        return { ...item, height: cardHeight };
      }
      return item;
    });

    const heightsChanged = updatedItems.some((item, index) => item.height !== items[index].height);
    if (heightsChanged) {
      setItems(updatedItems);
    }
  }, [items]);

  const [heights, gridItems] = useMemo(() => {
    const margin = 50; // Espaciado entre las tarjetas
    let heights = new Array(columns).fill(0);
    let gridItems = items.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += child.height + margin) - child.height;
      return { ...child, x, y, width: (width / columns) - margin, height: child.height }; // Reducir el ancho para compensar el margen
    });
    return [heights, gridItems];
  }, [columns, items, width]);

  const transitions = useTransition(gridItems, {
    key: (item) => item.id,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  const handleNextImage = (index) => {
    setItems(prevItems => 
      prevItems.map((item, i) => 
        i === index 
          ? { ...item, currentImage: (item.currentImage + 1) % item.images.length }
          : item
      )
    );
  };

  const handlePrevImage = (index) => {
    setItems(prevItems => 
      prevItems.map((item, i) => 
        i === index 
          ? { ...item, currentImage: (item.currentImage - 1 + item.images.length) % item.images.length }
          : item
      )
    );
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(item.currentImage);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsZoomed(false);
  };

  // Se mueve la imagen con zoom en base a la posicion del raton
  const handleMouseMove = (e) => {
    if (isZoomed) {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = ((e.pageX - left) / width) * 100;
      const y = ((e.pageY - top) / height) * 100;
      setZoomPosition({ x, y });
    }
  };

  // Si el raton esta dentro de la imagen se aplica zoom
  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  // Si el raton esta fuera de la imagen se quita el zoom
  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  // Funciones para manejar la navegación en la modal
  const handleNextImageModal = () => {
    if (selectedItem) {
      const nextIndex = (currentImageIndex + 1) % selectedItem.images.length;
      setCurrentImageIndex(nextIndex);
    }
  };

  const handlePrevImageModal = () => {
    if (selectedItem) {
      const prevIndex = (currentImageIndex - 1 + selectedItem.images.length) % selectedItem.images.length;
      setCurrentImageIndex(prevIndex);
    }
  };

  return (
    <div className='content'>
      <div ref={ref} className="list" style={{ height: Math.max(...heights) }}>
        {transitions((style, item, _, i) => (
          <a.div
            style={style}
            className="card"
            ref={(el) => (containerRefs.current[i] = el)}
            onClick={() => openModal(item)}
          >
            <div className="image-container">
              <img 
                src={item.images[item.currentImage]} z
                alt={`Imagen ${item.currentImage + 1}`} 
                className="image"
              />
              <button className="prev-button" onClick={(e) => { e.stopPropagation(); handlePrevImage(i); }}>‹</button>
              <button className="next-button" onClick={(e) => { e.stopPropagation(); handleNextImage(i); }}>›</button>
            </div>
            <div className="card-content">
              <h2 className="card-title">{item.name}</h2>
              <span className="card-price">{item.price}</span>
            </div>
          </a.div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-image-container">
              <img 
                src={selectedItem.images[currentImageIndex]} 
                alt={selectedItem.name} 
                className="modal-image"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ 
                  transform: isZoomed ? `scale(3)` : `scale(1)`, 
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` 
                }}
              />
              <button className="modal-prev-button" onClick={(e) => { e.stopPropagation(); handlePrevImageModal(); }}>‹</button>
              <button className="modal-next-button" onClick={(e) => { e.stopPropagation(); handleNextImageModal(); }}>›</button>
            </div>
            <a href="http://"></a>
            <h2>{selectedItem.name}</h2>
            <p style={{ textAlign: 'center' }}>{selectedItem.description}</p>
            <span><Link to={`/productdescription/${selectedItem.id}`} type="button" className="btn btn-primary">Saber Mas</Link></span>
          </div>
        </div>
      )}
    </div>
  );
}
