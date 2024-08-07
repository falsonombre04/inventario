import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ fetchProducts }) => {
    const [product, setProduct] = useState({
        nombreProducto: '',
        CategoriaProducto: '',
        PrecioUnitarioVenta: '',
        CostoUnitario: '',
        stock: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/products', product);
            fetchProducts();
            setProduct({
                nombreProducto: '',
                CategoriaProducto: '',
                PrecioUnitarioVenta: '',
                CostoUnitario: '',
                stock: '',
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombreProducto"
                placeholder="Nombre del Producto"
                value={product.nombreProducto}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="CategoriaProducto"
                placeholder="Categoría del Producto"
                value={product.CategoriaProducto}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="PrecioUnitarioVenta"
                placeholder="Precio Unitario de Venta"
                value={product.PrecioUnitarioVenta}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="CostoUnitario"
                placeholder="Costo Unitario"
                value={product.CostoUnitario}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={product.stock}
                onChange={handleChange}
                required
            />
            <button type="submit">Agregar Producto</button>
        </form>
    );
};

export default ProductForm;
