import productRouter from './product.route';
import userRouter from './user.route';

export default function route(app: any) {
    app.use('/products', productRouter);
    app.use('/users', userRouter);
}
