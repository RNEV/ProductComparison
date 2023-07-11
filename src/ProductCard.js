export function ProductCard({ product }) {
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
