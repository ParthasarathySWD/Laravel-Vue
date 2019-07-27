<template>
    <div class="login row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body">
                    <form @submit.prevent="authenticate">
                        <div class="form-group row">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" class="form-control" v-model="form.email">
                        </div>
                        <div class="form-group row">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" class="form-control" v-model="form.password">
                        </div>
                        <div class="form-group row">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {login} from "../../helpers/auth";
export default {
    name:"login",
    data(){
        return {
            form: {
                email: "",
                password: "",
            }
        }
    },
    methods: {
        authenticate(){
            this.$store.dispatch('login');

            login(this.$data.form)
                .then((res)=>{
                    this.$store.commit("loginSuccess", res);
                    this.$router.push({path:'/'});
                })
                .catch((err) => {
                    this.$store.commit("loginFailed", err);

                })
        }
    }
}
</script>

<style>

</style>
