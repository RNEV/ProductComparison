import { useState } from 'react';

export function ModalAddProduct({
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
