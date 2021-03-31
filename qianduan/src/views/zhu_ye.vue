<template>
    <div class="container-fluid m-0 p-0 no-gutters">
        <zuo_bian></zuo_bian>
        <you_bian></you_bian>
    </div>
</template>

<script>
    import zuo_bian from "../components/zuo_bian";
    import you_bian from "../components/you_bian";

    export default {
        name: "zhu_ye.vue",
        components: {
            you_bian:you_bian,
            zuo_bian:zuo_bian
        }
    }
</script>

<style scoped>

</style>