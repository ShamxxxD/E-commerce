import mongoose from 'mongoose';
const { Schema } = mongoose;

const schema = new Schema({
      name: String,
      price: String,
      image: Array,
      category: String,
      netWeight: String,
      discount: String,
      description: String,
      sku: String,
});

var Products = mongoose.model('Products', schema, 'products');

export default Products;
