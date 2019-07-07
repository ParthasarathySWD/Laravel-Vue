export default{
    state: {
        welcomemessage: "Welcome to vue app",
        aboutmessage: "This is about message",
    },
    mutations: {},
    getters: {
        welcome(state){
            return state.welcomemessage;
        },
        aboutwelcome(state){
            return state.aboutmessage;
        }
    },
    actions: {
    }
}