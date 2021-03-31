<template>
    <div>
        <div class="container-fluid">
            <div class="container ml-3">
                <div class="row mt-3">
                    <div class="left-k1">姓名</div>
                    <input class="input-1" type="text" v-model="xing_ming" placeholder="请输入角色名称">
                </div>
                <div class="row mt-3">
                    <div class="left-k1">性别</div>
                    <input class="input-1" type="text" v-model="xing_bie" placeholder="请输入角色性别">
                </div>
                <div class="row mt-3">
                    <div class="left-k1">年龄</div>
                    <input class="input-1" type="text" v-model="nian_ling" placeholder="请输入角色年龄">
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
       name: "jia_biao_yi",
       data:function () {
            return{
                xing_ming:'',
                xing_bie:'',
                nian_ling:''

            }
       },
        methods:{
            tian_jia:function () {
                let _this = this;
                axios.get(`http://localhost:2444/jia_biao_yi/${this.xing_ming}/${this.xing_bie}/${this.nian_ling}`)
                    .then(response=>{
                        alert('添加成功')
                        _this.$router.push('/zhu_ye/biao_yi')
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
        width: 20%;
    }
</style>