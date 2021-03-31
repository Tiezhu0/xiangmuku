<template>
    <div>
        <div class="container-fluid">
            <div class="container ml-3">
                <div class="row mt-3">
                    <div class="left-k1">日期</div>
                    <input class="input-1" type="text" v-model="ri_qi" placeholder="请输入出生日期">
                </div>
                <div class="row mt-3">
                    <div class="left-k1">地址</div>
                    <input class="input-1" type="text" v-model="di_zhi" placeholder="请输入出生地址">
                </div>
                <div class="row mt-3">
                    <div class="left-k1">八字</div>
                    <input class="input-1" type="text" v-model="ba_zi" placeholder="请输入八字情况">
                </div>
                <div class="col-12 mt-3">
                    <button class="btn-1 btn btn-outline-primary" v-on:click="tian_jia">
                        <span class="fa fa-save"></span>
                        保存
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "gai_biao_er",

        data:function () {
            return{
                xu_hao:'',
                ri_qi:'',
                di_zhi:'',
                ba_zi:''
            }
        },
        methods:{
            tian_jia:function () {
                let _this = this;
                axios.get(`http://localhost:2444/gai_biao_er/${this.xu_hao}/${this.ri_qi}/${this.di_zhi}/${this.ba_zi}`)
                    .then(response=>{
                        if(response.statusText === 'OK'){
                            alert('修改成功！！！')
                            _this.$router.push('/zhu_ye/biao_er')
                        }
                    })
            }
        },
        mounted:function () {
            this.xu_hao = this.$route.query.xu_hao;
            axios.get(`http://localhost:2444/gai_biao_er1/${this.$route.query.xu_hao}`)
                .then(response=>{
                    this.ri_qi = response.data[0].ri_qi;
                    this.di_zhi = response.data[0].di_zhi;
                    this.ba_zi = response.data[0].ba_zi;
                })
                .catch(error=>{
                    console.log(`出现错误！！！错误是：${error}`)
                })
        }
    }
</script>

<style scoped>

</style>