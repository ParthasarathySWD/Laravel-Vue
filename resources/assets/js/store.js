import {getLocalUser,  setLocalUser} from "./helpers/auth";
import Axios from "axios";
const user = getLocalUser();

export default{
    state: {
        welcomemessage: "Welcome to vue app",
        aboutmessage: "This is about message",
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        customers: [],
        customer: {},
    },
    mutations: {
        login(state){
            state.loading = true;
            state.auth_error = null;
        },
        loginSuccess(state, payload){
            state.auth_error = null,
            state.loading = false,
            state.isLoggedIn = true,
            state.currentUser= Object.assign({}, payload.user, {token: payload.access_token});
            setLocalUser(JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload){
            state.loading = false;
            state.auth_error = payload.error;
        },
        logout(state){
            localStorage.removeItem('user');
            state.isLoggedIn = false;
            state.currentUser = null;
        },
        updateCustomers(state, customers){
            state.customers = customers;
        },
        updateCustomer(state, id){
            state.customer = state.customers.filter(customer => customer.id == Number(id));
        }


    },
    getters: {
        welcome(state){
            return state.welcomemessage;
        },
        aboutwelcome(state){
            return state.aboutmessage;
        },
        currentUser(state){
            return state.currentUser;
        },
        isLoggedIn(state){
            return state.isLoggedIn;
        },
        isLoading(state){
            return state.loading;
        },
        authError(state){
            return state.auth_error;
        },
        customers(state){
            return state.customers;
        },
        customer(state){
            return state.customer;
        }
    },
    actions: {
        login(context){
            context.commit("login");
        },
        getCustomers(context){
            axios.get('/api/customers')
            .then(response => {
                context.commit('updateCustomers', response.data.customers);
            })
        },
        getCustomer(context, id){
            debugger;
            context.commit('updateCustomer', id);
        }
    }
}