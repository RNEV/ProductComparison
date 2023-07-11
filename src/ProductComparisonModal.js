import { ProductCard } from './ProductCard';

export function ProductComparisonModal({
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
