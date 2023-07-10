import { useState } from 'react';
import './index.css';
import { Header } from './Header';
import { ProductList } from './ProductList';

const initialProducts = [
  {
    brand: 'Creality',
    model: 'Ender-3 S1 Pro',
    volume: '8.66 x 8.66 x 10.63',
    heatedBed: true,
    autoLeveling: true,
    printSpeed: 150,
    price: 459.99,
    image: 'ender3.jpg',
  },
  {
    brand: 'ANYCUBIC',
    model: 'Vyper',
    volume: '9.64 x 9.64 x 10.23',
    heatedBed: true,
    autoLeveling: true,
    printSpeed: 180,
    price: 429.99,
    image: 'vyper.jpg',
  },
  {
    brand: 'Elegoo',
    model: 'Neptune 3 Pro',
    volume: '8.86 x 8.86 x 11.02',
    heatedBed: true,
    autoLeveling: true,
    printSpeed: 0,
    price: 269.99,
    image: 'neptune3pro.jpg',
  },
];

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProducts, setSelectedProducts] = useState(
    []
  );
  const [isAddProductModalOpen, setIsAddProductModalOpen] =
    useState(false);
  const [isComparisonModalOpen, setIsComparisonModalOpen] =
    useState(false);

  const handleProductSelection = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(
        selectedProducts.filter((id) => id !== productId)
      );
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }

    if (selectedProducts.length === 1) {
      setIsComparisonModalOpen(true);
    } else {
      setIsComparisonModalOpen(false);
    }
  };

  const openAddProductModal = () => {
    setIsAddProductModalOpen(true);
  };

  const closeAddProductModal = () => {
    setIsAddProductModalOpen(false);
  };

  const closeComparisonModal = () => {
    setSelectedProducts([]);
    setIsComparisonModalOpen(false);
  };

  function handleAddProduct(product) {
    setProducts((products) => [...products, product]);
  }

  return (
    <div className='app'>
      <Header openAddProductModal={openAddProductModal} />
      <ProductList
        products={products}
        selectedProducts={selectedProducts}
        handleProductSelection={handleProductSelection}
      />
      {isComparisonModalOpen && (
        <ProductComparisonModal
          products={products}
          selectedProducts={selectedProducts}
          closeComparisonModal={closeComparisonModal}
        />
      )}
      {isAddProductModalOpen && (
        <ModalAddProduct
          closeAddProductModal={closeAddProductModal}
          handleAddProduct={handleAddProduct}
        />
      )}
    </div>
  );
}

function ProductComparisonModal({
  products,
  selectedProducts,
  closeComparisonModal,
}) {
  const selectedProductCards = selectedProducts.map(
    (selectedProduct) => {
      const product = products.find(
        (product) => product.model === selectedProduct
      );
      return (
        <ProductCard
          key={product.model}
          product={product}
        />
      );
    }
  );

  return (
    <div className='modal'>
      <div className='modal-content'>
        <span
          className='close'
          onClick={closeComparisonModal}
        >
          &times;
        </span>
        <h2 className='compare-title'>
          Product Comparison
        </h2>
        <div className='product-card-container'>
          {selectedProductCards}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className='product-card'>
      <h3>
        {product.brand} {product.model}
      </h3>
      <img
        className='product-img'
        src={product.image}
        alt={`${product.brand} ${product.model}`}
      />
      <p>Volume: {product.volume}</p>
      <p>Heated Bed: {product.heatedBed ? 'Yes' : 'No'}</p>
      <p>
        Auto Leveling: {product.autoLeveling ? 'Yes' : 'No'}
      </p>
      <p>Print Speed: {product.printSpeed}mm/s</p>
      <p className='price'>Price: ${product.price}</p>
    </div>
  );
}

function ModalAddProduct({
  closeAddProductModal,
  handleAddProduct,
}) {
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [volume, setVolume] = useState('');
  const [heatedBed, setHeatedBed] = useState(false);
  const [autoLeveling, setAutoLeveling] = useState(false);
  const [printSpeed, setPrintSpeed] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!model || !brand || !volume || !image) return;

    const newProduct = {
      brand,
      model,
      volume,
      heatedBed,
      autoLeveling,
      printSpeed,
      price,
      image,
    };

    handleAddProduct(newProduct);

    closeAddProductModal();

    setModel('');
    setBrand('');
    setVolume('');
    setHeatedBed(false);
    setAutoLeveling(false);
    setPrintSpeed(0);
    setPrice(0);
    setImage('');
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        <span
          className='close'
          onClick={closeAddProductModal}
        >
          &times;
        </span>
        <h2>Add Product</h2>
        <form
          className='add-product-form'
          onSubmit={handleSubmit}
        >
          <label>Brand:</label>
          <input
            type='text'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <label>Model:</label>
          <input
            type='text'
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <label>Volume:</label>
          <input
            type='text'
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
          <label>Heated Bed:</label>
          <input
            type='checkbox'
            checked={heatedBed}
            onChange={(e) => setHeatedBed(e.target.checked)}
          />
          <label>Auto Leveling:</label>
          <input
            type='checkbox'
            checked={autoLeveling}
            onChange={(e) =>
              setAutoLeveling(e.target.checked)
            }
          />
          <label>Print Speed:</label>
          <input
            type='number'
            value={printSpeed}
            onChange={(e) =>
              setPrintSpeed(Number(e.target.value))
            }
          />
          <label>Price:</label>
          <input
            type='number'
            value={price}
            onChange={(e) =>
              setPrice(Number(e.target.value))
            }
          />
          <label>Image URL:</label>
          <input
            type='text'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button type='submit'>Add</button>
        </form>
      </div>
    </div>
  );
}
