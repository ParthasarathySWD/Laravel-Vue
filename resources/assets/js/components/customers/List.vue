<template>
    <div>
        <div class="row col-sm-12 pull-right">
            <router-link to="/Customers/new" class="btn btn-primary btn-sm pull-right">Add Customer</router-link>
        </div>
        <table class="table table-striped">
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <template v-if="!customers.length">
                    <tr>
                        <td colspan="4" class="text-center">No Customer available</td>
                    </tr>
                </template>
                <template>
                    <tr v-for="customer in customers" :key="customer.id">
                        <td>{{customer.name}}</td>
                        <td>{{customer.email}}</td>
                        <td>{{customer.phone}}</td>
                        <td>
                            <router-link :to="`/Customers/${customer.id}`">View</router-link>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>    
</template>

<script>
export default {
    name: "customers-list",
    data(){
        return {

        }
    },
    computed:{
        customers(){
            return this.$store.getters.customers;
        }
    },
    mounted(){
        this.$store.dispatch('getCustomers');
    }
}
</script>

<style>
    .pull-right{
        float: left;
    }
</style>

