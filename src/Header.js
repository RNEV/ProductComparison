export function Header({ openAddProductModal }) {
  return (
    <nav className='nav'>
      <h1 href='/' className='site-title'>
        Product Comparison Tool
      </h1>
      <ul>
        <li>
          <button onClick={openAddProductModal}>
            Add Product
          </button>
        </li>
      </ul>
    </nav>
  );
}
