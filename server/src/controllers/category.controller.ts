import Category from '../models/category.model';

class CategoryController {
    async createCategory(req: any, res: any) {
        const newCategory = {
            name: 'Drinks',
            description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
        };

        await Category.create(newCategory);

        res.json({ data: newCategory });
    }
}

export default new CategoryController();
