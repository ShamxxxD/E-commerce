import mongoose from 'mongoose';
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const { Schema } = mongoose;

const schema = new Schema(
    {
        name: String,
        slug: { type: String, slug: 'name' },
        price: String,
        image: Array,
        categories: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Categories'
            }
        ],
        netWeight: String,
        discount: String,
        description: String,
        sku: String
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('Products', schema, 'Products');

export default Product;
