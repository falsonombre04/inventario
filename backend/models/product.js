const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombreProducto: { type: String, required: true },
    CategoriaProducto: { type: String, required: true },
    PrecioUnitarioVenta: { type: Number, required: true },
    CostoUnitario: { type: Number, required: true },
    stock: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchema);
