import Home from './components/Home';
import Login from './components/auth/Login';
import About from './components/About';
import CustomersMain from './components/customers/Main.vue';
import CustomersList from './components/customers/List.vue';
import NewCustomer from './components/customers/New.vue';
import Customer from './components/customers/View.vue';
import EditCustomer from './components/customers/Edit.vue';


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
        path: '/Customers',
        component: CustomersMain,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/',
                component: CustomersList
            },
            {
                path: 'new',
                component: NewCustomer
            },
            {
                path: 'view/:id',
                component: Customer
            },
            {
                path: 'edit/:id',
                component: EditCustomer
            }
        ],
    },
    {
        path: '/About',
        component: About
    }
];