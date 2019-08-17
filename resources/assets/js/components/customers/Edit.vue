<template>
    <div class="edit-customer">
        <form @submit.prevent="updateCustomer">

        <table class="table">
            <tr>
                <th>Name</th>
                <td><input type="text" class="form-control" v-model="customer.name"></td>
            </tr>
            <tr>
                <th>Email</th>
                <td><input type="text" class="form-control" v-model="customer.email"></td>
            </tr>
            <tr>
                <th>Phone</th>
                <td><input type="text" class="form-control" v-model="customer.phone"></td>
            </tr>
            <tr>
                <th>Website</th>
                <td><input type="text" class="form-control" v-model="customer.website"></td>
            </tr>
            <tr>
                <th><router-link to="/customers">Cancel</router-link></th>
                <td><button class="btn btn-success" type="submit">Update Customer</button></td>
            </tr>
        </table>
        </form>
        <div class="errors" v-if="errors">
            <ul>
                <li v-for="(error, name) in errors" :key="name">
                    <strong>{{name}}</strong> {{error.join('\n')}}
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: "editcustomer",
    created(){
        axios.get(`/api/customers/${this.$route.params.id}`)
        .then(response=>{
            this.customer = response.data.customer;
        })
    },
    data(){
        return {
            customer: null,
            errors: null,
        }
    },
    methods:{
        updateCustomer(){
            axios.put(`/api/customers/${this.$route.params.id}`, this.customer)
            .then(response => {
                console.log(response);
                this.$router.push('/customers');
            })
            .catch(err => {
                if(err.response.data.errors){
                    this.errors = err.response.data.errors;
                    return;
                }

            })
        }
    }
}
</script>

<style>
.errors{
    background: lightcoral;
    border-radius: 5px;
    padding: 21px 0px 2px 0px;
}

</style>
