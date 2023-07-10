import { Product } from './Product';

export function ProductList({
  products,
  selectedProducts,
  handleProductSelection,
}) {
  return (
    <div className='container'>
      <ul>
        {products.map((product) => (
          <Product
            key={product.model}
            product={product}
            isSelected={selectedProducts.includes(
              product.model
            )}
            handleProductSelection={handleProductSelection}
          />
        ))}
      </ul>
    </div>
  );
}
