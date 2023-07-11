import { useState } from 'react';
import './index.css';
import { Header } from './Header';
import { ProductList } from './ProductList';
import { ProductComparisonModal } from './ProductComparisonModal';
import { ModalAddProduct } from './ModalAddProduct';

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
