import React,{useEffect,useState} from 'react';
import axios from 'axios';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}`);
        setProducts(res.data);
    } catch (err) {
        console.error(err);
    }
};

useEffect(() => {
  fetchProducts();
}, []);

  return (
    <div className='App'>
      <h1>Gestión de Productos</h1>
            <ProductForm fetchProducts={fetchProducts} />
            <ProductTable products={products} fetchProducts={fetchProducts} />
    </div>
  )
}

export default App
