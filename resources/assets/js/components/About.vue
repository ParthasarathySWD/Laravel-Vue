<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">This is about page</div>
                    <div class="card-body">
                        <h2>{{welcome}}</h2>
                        <img src="" alt="Main Image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about',
    computed: {
        welcome(){
            return this.$store.getters.aboutmessage;
        }
    }
}
</script>

<style>

</style>
