<template>
    <div class="customer-view">
        <div class="user-img">
            <img src="" alt="UserImage">
        </div>
        <div class="user-info">
            <table class="table">
                <tr>
                    <th>Id</th>
                    <td>{{customer.id}}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{{customer.name}}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{customer.email}}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>{{customer.phone}}</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>{{customer.website}}</td>
                </tr>
            </table>
            <router-link to="/customers">Back</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "view",
    created(){
        axios.get(`/api/customers/${this.$route.params.id}`)
        .then(response=>{
            this.customer = response.data.customer;
        })
    },
    data(){
        return {
            customer: null
        }
    },
    computed:{
        currentUser(){
            return this.$store.getters.currentUser;
        }
    }
}
</script>

<style>

</style>
