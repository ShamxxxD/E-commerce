import Products from '../models/product.model';

class ProductController {
  index(req: any, res: any) {
    Products.find({}, function (err: object, product: any) {
      res.json(product);
    });
  }
}

export default new ProductController();
