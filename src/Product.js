export function Product({
  product,
  isSelected,
  handleProductSelection,
}) {
  return (
    <li className={`card ${isSelected ? 'selected' : ''}`}>
      <h3>
        {product.brand} {product.model}
      </h3>
      <img
        className='productImg'
        src={product.image}
        alt={`${product.brand} ${product.model}`}
      />
      <p>Volume: {product.volume}"</p>
      <p>Heated Bed: {product.heatedBed ? 'Yes' : 'No'}</p>
      <p>
        Auto Leveling: {product.autoLeveling ? 'Yes' : 'No'}
      </p>
      <p>Print speed: {product.printSpeed}mm/s</p>
      <p className='price'>Price: ${product.price}</p>
      <input
        type='checkbox'
        checked={isSelected}
        onChange={() =>
          handleProductSelection(product.model)
        }
      />
      <label>Compare</label>
    </li>
  );
}
