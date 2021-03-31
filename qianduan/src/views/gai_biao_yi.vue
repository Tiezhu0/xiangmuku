<template>
    <div>
        <div class="container-fluid">
            <div class="container ml-3">
                <div class="row mt-3">
                    <div class="left-k1">姓名</div>
                    <input class="input-1" type="text" v-model="ming_cheng" placeholder="请输入角色名称">
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
        name: "gai_biao_yi",
        data:function () {
            return{
                xu_hao:'',
                ming_cheng:'',
                xing_bie:'',
                nian_ling:''
            }
        },
        methods:{
            tian_jia:function () {
                let  _this = this;
                axios.get(`http://localhost:2444/gai_biao_yi/${this.xu_hao}/${this.ming_cheng}/${this.xing_bie}/${this.nian_ling}`)
                    .then(response=>{
                        if(response.statusText === 'OK'){
                            alert('修改成功！！！')
                            _this.$router.push('/zhu_ye/biao_yi')
                        }
                    })
            }
        },
        mounted:function () {
            this.xu_hao = this.$route.query.xu_hao;
            axios.get(`http://localhost:2444/gai_biao_yi1/${this.$route.query.xu_hao}`)
                .then(response=>{
                    this.ming_cheng = response.data[0].ming_cheng;
                    this.xing_bie = response.data[0].xing_bie;
                    this.nian_ling = response.data[0].nian_ling;
                })
                .catch(error=>{
                    console.log(`出现错误！！！错误是：${error}`)
                })
        }
    }
</script>

<style scoped>

</style>