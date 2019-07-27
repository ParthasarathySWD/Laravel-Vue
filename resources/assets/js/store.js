import {getLocalUser,  setLocalUser} from "./helpers/auth";
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
            setLocalUser(payload.access_token);
        },
        loginFailed(state, payload){
            state.loading = false;
            state.auth_error = payload.error;
        },
        logout(state){
            localStorage.removeItem('user');
            state.isLoggedIn = false;
            state.currentUser = null;
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
        }
    },
    actions: {
        login(context){
            context.commit("login");
        }
    }
}