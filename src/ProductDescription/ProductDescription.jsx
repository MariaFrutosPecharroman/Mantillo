import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../Products/data'; // Importa los datos del producto
import './ProductDescription.css'; // Asegúrate de importar tu CSS

// Iconos
import color from '../assets/icons/Mantillo_color_icono.png';
import flor from '../assets/icons/Mantillo_Flor_icono.png';
import handmade from '../assets/icons/Mantillo_handmade_icono.png';
import tela from '../assets/icons/Mantillo_Tela_icono.png';
import lavado from '../assets/icons/Mantillo_lavado_icono.png';
import size from '../assets/icons/Mantillo_size_icono.png';


export default function ProductDetails() {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id)); // Busca el producto por ID

  const [currentImage, setCurrentImage] = useState(product.images[0]); // Imagen actual

  const handleImageClick = (image) => {
    setCurrentImage(image); // Cambia la imagen principal al hacer clic en una imagen pequeña
  };

  return (
    <div className="product-details-container">
      {/* Agrupamos las imágenes y la información en una sección superior */}
      <h1>{product.name}</h1>
      <div className="product-top-section">
        <div className="image-list">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagen ${index + 1}`}
              className={`thumbnail ${image === currentImage ? 'active' : ''}`}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
        <div className="main-image">
          <img src={currentImage} alt={product.name} />
        </div>
      </div>

      {/* Detalles del producto, que estarán debajo del resto */}
      <div className="product-details">
        <div className="details-container">
            
            <div className="product-description">
                <h2>Detalles del producto</h2>
                <p>{product.description}</p>
            </div>
            <div className="product-info">
                <h2>Información</h2>
                <ul className="product-details-list">
                <ul className="product-details-list">
                    <li><img src={tela} alt="icono" className="list-icon" /> Tejido: {product.tejido}</li>
                    <li><img src={flor} alt="icono" className="list-icon" /> Flores Tintoreas: {product.flores}</li>
                    <li><img src={handmade} alt="icono" className="list-icon" /> Handmade</li>
                    <li><img src={lavado} alt="icono" className="list-icon" /> Lavado: Lavar con agua fría a mano</li>
                    <li><img src={color} alt="icono" className="list-icon" /> Color: {product.color}</li>
                    <li><img src={size} alt="icono" className="list-icon" /> Tamaño: {product.size}</li>
                </ul>
                </ul>
            </div>
        </div>
        </div>
    </div>
  );
}