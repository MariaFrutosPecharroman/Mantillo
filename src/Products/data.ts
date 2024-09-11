// Producto 1
import product1_image1 from '../assets/products/product_1/1.jpg'
import product1_image2 from '../assets/products/product_1/2.jpg'
import product1_image3 from '../assets/products/product_1/3.jpg'
import product1_image4 from '../assets/products/product_1/4.jpg'

// Producto 2
import product2_image1 from '../assets/products/product_2/1.jpg'
import product2_image2 from '../assets/products/product_2/2.jpg'
import product2_image3 from '../assets/products/product_2/3.jpg'
import product2_image4 from '../assets/products/product_2/4.jpg'

// Producto 3
import product3_image1 from '../assets/products/product_3/1.jpg'
import product3_image2 from '../assets/products/product_3/2.jpg'
import product3_image3 from '../assets/products/product_3/3.jpg'
import product3_image4 from '../assets/products/product_3/4.jpg'

// Producto 4
import product4_image1 from '../assets/products/product_4/1.jpg'
import product4_image2 from '../assets/products/product_4/2.jpg'
import product4_image3 from '../assets/products/product_4/3.jpg'
import product4_image4 from '../assets/products/product_4/4.jpg'

// Producto 5
import product5_image1 from '../assets/products/product_5/1.jpg'
import product5_image2 from '../assets/products/product_5/2.jpg'
import product5_image3 from '../assets/products/product_5/3.jpg'
import product5_image4 from '../assets/products/product_5/4.jpg'

// Producto 6
import product6_image1 from '../assets/products/product_6/1.jpg'
import product6_image2 from '../assets/products/product_6/2.jpg'
import product6_image3 from '../assets/products/product_6/3.jpg'
import product6_image4 from '../assets/products/product_6/4.jpg'

export default [
  {
    id: 1,
    name: 'Brisa de Lino',
    description: 'Elegante pañuelo de lino teñido a mano con tintes naturales. Sus suaves tonos blancos con motas moradas evocan la frescura del viento primaveral, ideal para llevar como chal en cualquier ocasión.',
    price: '€50',
    images: [product1_image1, product1_image2, product1_image3, product1_image4],
    currentImage: 0,
    height: 300,
    tejido: 'Lino',
    flores: 'Rosas',
    color: 'Blanco con motas moradas',
    size: 'Largo para chal',
  },

  {
    id: 2,
    name: 'Pétalos del Campo',
    description: 'Pañuelo de algodón teñido artesanalmente, inspirado en los colores del campo en flor. Motas moradas y verdosas se entremezclan en un diseño único, perfecto para lucir como chal o pañuelo de cuello.',
    price: '€60',
    images: [product2_image1, product2_image2, product2_image3, product2_image4],
    currentImage: 0,
    height: 300,
    tejido: 'Algodón',
    flores: 'Rosas, caléndulas, pensamientos',
    color: 'Blanco con motas moradas y verdosas',
    size: 'Largo para pañuelo de cuello o chal',
  },

  {
    id: 3,
    name: 'Rocío Floral',
    description: 'Exquisito pañuelo de seda teñido a mano con tonos naturales que evocan la frescura del rocío sobre las flores. Sus delicadas motas amarillas verdosas lo hacen perfecto para llevar como pulsera o en el cuello.',
    price: '€190',
    images: [product3_image1, product3_image2, product3_image3, product3_image4],
    currentImage: 0,
    height: 300,
    tejido: 'Seda',
    flores: 'Caléndulas y crisantemos',
    color: 'Blanco con motas amarillas verdosas',
    size: 'Corto para pulsera o cuello.',
  },

  {
    id: 4,
    name: 'Flor de Lino',
    description: 'Este pañuelo de seda teñido a mano refleja la belleza de un prado en flor, con una combinación de motas amarillas, moradas y azules. Ideal para quienes buscan un toque elegante y natural en su vestuario.',
    price: '€40',
    images: [product4_image1, product4_image2, product4_image3, product4_image4],
    currentImage: 0,
    height: 300,
    tejido: 'Seda',
    flores: 'Caléndulas, pensamientos, rosas y flores silvestres',
    color: 'Blanco con motas amarillas verdosas, moradas y azules',
    size: 'Largo para pañuelo de cuello o chal',
  },

  {
    id: 5,
    name: 'Niebla de Flores',
    description: 'Pañuelo de seda pequeño teñido a mano, perfecto para usar en el pelo o como pulsera. Sus motas rosas, moradas y verdes crean un delicado contraste que refleja la suavidad de la niebla sobre las flores.',
    price: '€560',
    images: [product5_image1, product5_image2, product5_image3, product5_image4],
    currentImage: 0,
    height: 300,
    tejido: 'Seda',
    flores: 'Caléndulas y pensamientos',
    color: 'Blanco con motas rosas, moradas y verdes',
    size: 'Pequeño para pelo o pulsera',
  },

  {
    id: 6,
    name: 'Campo en Flor',
    description: 'Este pañuelo de seda mediano, teñido a mano, captura la esencia de un campo florecido. Las motas moradas, rojizas y rosadas ofrecen un toque sutil y romántico, perfecto para llevar al cuello.',
    price: '€160',
    images: [product6_image1, product6_image2, product6_image3, product6_image4],
    currentImage: 0,
    height: 300,
    tejido: 'Seda',
    flores: 'Rosas, pensamientos',
    color: 'Blanco con motas moradas, tonos rojizos y rosados',
    size: 'Medio para pañuelo de cuello',
  },
];
