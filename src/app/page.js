'use client'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_PRODUCT, REMOVE_PRODUCT } from './redux/actionTypes';

export default function Home() {

  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const newProduct = {
      id: Math.round(Math.random()*10),
      quantity: 1,
    };

    dispatch({ type: ADD_PRODUCT, payload: newProduct });
  };

  const handleRemoveProduct = (id) => {
    dispatch({ type: REMOVE_PRODUCT, payload: { id } });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div>
          <ul className='min-h-[220px]'>
            {products.map((product) => (
              <li key={product.id}>
                Product {product.id} - Quantity: {product.quantity}
                <button className='ml-4' onClick={() => handleRemoveProduct(product.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className='mt-4'>
            <button onClick={handleAddProduct}>
              Add Product
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
