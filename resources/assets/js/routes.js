import Home from './components/Home';
import Login from './components/auth/Login';
import About from './components/About';
export const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/About',
        component: About
    }
];