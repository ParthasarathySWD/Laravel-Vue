<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Vue SPA example</div>
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
    name: 'home',
    computed: {
        welcome(){
            return this.$store.getters.welcome;
        }
    }
}
</script>

<style>

</style>
