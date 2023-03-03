import mongoose from 'mongoose';
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const { Schema } = mongoose;

const categorySchema = new Schema({
    name: { type: String, unique: true },
    description: String
});

const Category = mongoose.model('Categories', categorySchema, 'Categories');

export default Category;
