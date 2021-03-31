<template>
    <div class="left">
        <div class="container-fluid quan">
            <button class="btn btn-outline-primary">
                <router-link to="/zhu_ye/biao_yi" class="xaio_guo">第一张表</router-link>
            </button>
            <button class="btn btn-outline-primary">
                <router-link to="/zhu_ye/biao_er" class="xaio_guo">第二张表</router-link>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "zuo_bian"
    }
</script>

<style scoped>
.quan{
    background-color:#aaaaaa;
}
</style>