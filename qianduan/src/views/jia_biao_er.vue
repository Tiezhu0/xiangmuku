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
        name: "jia_biao_er",
        data:function () {
            return{
                ri_qi:'',
                di_zhi:'',
                ba_zi:''
            }
        },
        methods:{
            tian_jia:function () {
                let _this = this;
                axios.get(`http://localhost:2444/jia_biao_er/${this.ri_qi}/${this.di_zhi}/${this.ba_zi}`)
                    .then(response=>{
                        alert('添加成功')
                        _this.$router.push('/zhu_ye/biao_er')
                    })
                    .catch(error=>{
                        console.log(`出现错误！！！错误是：${error}`)
                    })
            }
        }
    }
</script>

<style scoped>
    tbody{
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .left-k1{
        background-color: #fbfbfb;
        width: 100px;
        border: solid 1px #d2d2d2;
        text-align: center;
        height: 40px;
        line-height: 40px;
        color: black;
    }
    .btn-1{
        width: 75%;
    }
</style>