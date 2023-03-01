import productRouter from './product.route';

export default function route(app: any) {
  app.get('/', productRouter);
}
