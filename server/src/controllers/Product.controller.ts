import Product from '../models/product.model';
import mongoose from 'mongoose';

class ProductController {
    async getProducts(req: any, res: any) {
        try {
            const categoryId = req.query.category;
            let filter = {};
            if (categoryId) {
                filter = { categories: { $in: [req.query.category] } };
            }

            const products = await Product.find(filter).populate('categories');

            res.json({ data: products });
        } catch (error) {
            console.log(error);
            res.json({ data: [], message: 'Error' }).status(400);
        }
    }

    async createProduct(req: any, res: any) {
        const objectId = new mongoose.Types.ObjectId(
            '6401afe272c2de1b4a8708fd'
        );
        const newProduct: object = {
            name: 'Mì Gà Sợi Phở',
            categories: [objectId],
            description:
                'Giới Nấm bao gồm những sinh vật nhân chuẩn dị dưỡng có thành tế bào bằng kitin. Phần lớn nấm phát triển dưới dạng các sợi đa bào được gọi là sợi nấm tạo nên thể sợi, một số nấm khác lại phát triển dưới dạng đơn bào. Quá trình sinh sản của nấm thường là qua bào tử, được tạo ra trên những cấu trúc đặc biệt hay quả thể.',
            discount: '0',
            price: '4000',
            netWeight: '200g',
            sku: 'ND001',
            image: [
                'https://product.hstatic.net/200000376677/product/am-4_650991568c5746c999992015cafe10b7_6f4f3457236b4ba18386987497192cd0_f0e8fa23cd66447da07fd8ced9f357a2_master.jpg',
                'https://product.hstatic.net/200000376677/product/am-1_74ee4b71c4ea4749a72737117aa68a40_d5014765409f46cabb7479b368ca65d8_599418cff28f4ddb8151f2ca9f9059b8_master.jpg',
                'https://product.hstatic.net/200000376677/product/am-2_962312210e7542509a0469d5e6640c39_d4e840292ed34cce9f3e6ba21de7b927_da4e73fbb668459fa19e74cb62b583f1_master.jpg',
                'https://product.hstatic.net/200000376677/product/am-1_74ee4b71c4ea4749a72737117aa68a40_d5014765409f46cabb7479b368ca65d8_599418cff28f4ddb8151f2ca9f9059b8_master.jpg'
            ]
        };

        const products = await Product.create(newProduct);
        res.json({ data: products });
    }

    async getProductDetail(req: any, res: any) {
        const slug: string = req.params.slug;

        const products = await Product.findOne({ slug: slug });
        res.send('Hello Detail Page');
        // res.json({ data: products });
    }
}

export default new ProductController();
