<template>
    <div class="customer-new">
        <form @submit.prevent="add">
            <table class="table">
                <tr>
                    <th>Name</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.name" placeholder="Customer Name">
                    </td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>
                        <input type="email" class="form-control" v-model="customer.email" placeholder="Customer Email">
                    </td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>
                        <input type="phonenumber" class="form-control" v-model="customer.phone" placeholder="Customer Phone">
                    </td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.website" placeholder="Customer Website">
                    </td>
                </tr>
                <tr>
                    <td class="text-right">
                        <input type="submit" value="Create Customer" class="btn btn-primary">
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>

<script>

import validate from 'validate.js';
export default {
    name: 'new',
    data() {
        return {
            customer : {
                name: '',
                email: '',
                phone: '',
                website: '',
            },
            errors: null,
        }
    },
    methods: {
        add(){
            this.errors = null;
            const constraints = this.getConstraints();
        },
        getConstraints(){
            return {
                name: {
                    presense: true,
                    length: {
                        minimum: 3,
                        message: "Must be atleast 3 characters long",
                    }
                },
                email: {
                    presense: true,
                    email: true
                },
                phone: {
                    presense: true,
                    numericality: true,
                    length: {
                        minimum : 10,
                        message: "Must be atleast 10 digits long"
                    }
                },
                website:{
                    presense: true,
                    url: true
                }
            }
        }
    }
}
</script>

<style>

</style>
