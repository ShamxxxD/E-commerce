import Home from '~/pages/Home/Home';
import Contact from '~/pages/Contact/Contact';

export const publicRoutes: object[] = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
];

export const privateRoutes: object[] = [];
