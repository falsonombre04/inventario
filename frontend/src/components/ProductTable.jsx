import React from 'react';
import axios from 'axios';

const ProductTable = ({ products, fetchProducts }) => {
    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            fetchProducts();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Costo</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product._id}>
                        <td>{product.nombreProducto}</td>
                        <td>{product.CategoriaProducto}</td>
                        <td>{product.PrecioUnitarioVenta}</td>
                        <td>{product.CostoUnitario}</td>
                        <td>{product.stock}</td>
                        <td>
                            <button onClick={() => deleteProduct(product._id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
