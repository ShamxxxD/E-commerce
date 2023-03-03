import User from '../models/user.model';

class UserController {
    async getUsers(req: any, res: any) {
        const users = await User.find({});
        res.json({ users: users });
    }

    async createUser(req: any, res: any) {
        const users = await User.create({
            name: 'Hồ Quốc Thông',
            age: 25
        });

        res.json(users);
    }
}
export default new UserController();
