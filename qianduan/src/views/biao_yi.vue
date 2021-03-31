<template>
    <div>
        <div class="tab-1">
            <div class="btn-2">
                <div class="tian_jia mt-5">
                    <button class="btn btn-outline-dark btn-2 w-auto h-auto" v-on:click="zeng_jia">
                        添加二胎
                    </button>
                </div>
            </div>
            <div class="tab-1">
                <table class="table table-hover table-bordered mt-5 mr-5">
                    <thead>
                    <tr class="table-active">
                        <th>序号</th>
                        <th>名称</th>
                        <th>性别</th>
                        <th>年龄</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="" v-for="(item, index) in person" v-bind:key="index">
                        <td>{{item.xu_hao}}</td>
                        <td>{{item.ming_cheng}}</td>
                        <td>{{item.xing_bie}}</td>
                        <td>{{item.nian_ling}}</td>
                        <td>
                            <button class="btn-1 btn btn-outline-primary" v-on:click="xiu_gai(item.xu_hao)">
                                <span class="fa fa-pencil"></span>
                                修改
                            </button>
                            <button class="btn-1 btn btn-outline-danger" v-on:click="shan_chu(item.xu_hao)">
                                <span class="fa fa-trash"></span>
                                删除
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import  axios from 'axios';

    export default {
        name: "biao_yi",

        data:function () {
            return{
                person:[]
            }
        },
        methods:{
            zeng_jia:function(){
                this.$router.push('/zhu_ye/jia_biao_yi');
            },
            xiu_gai:function(xu_hao){
                this.$router.push(`/zhu_ye/gai_biao_yi?xu_hao=${xu_hao}`);
            },
            shan_chu:function (xu_hao) {
                axios.get(`http://localhost:2444/shan_chu_biao_yi/${xu_hao}`)
                .then(response=>{
                    if(response.statusText === 'OK'){
                        this.$router.go('/zhu_ye/biao_yi');
                    }
                })
                    .catch(error=>{
                        console.log(`出现错误！！！错误是：${error}`)
                    })
            }
        },
        mounted:function() {
            axios.get('http://localhost:2444/biao_yi')
                .then(response=>{
                    for(let  i = 0; i < response.data.length; i++){
                        let shu_ju = {
                            xu_hao:'',
                            ming_cheng:'',
                            xing_bie:'',
                            nian_ling:''
                        };
                        shu_ju.xu_hao = response.data[i].xu_hao;
                        shu_ju.ming_cheng = response.data[i].ming_cheng;
                        shu_ju.xing_bie = response.data[i].xing_bie;
                        shu_ju.nian_ling = response.data[i].nian_ling;
                        this.person.push(shu_ju);
                    }
                })
                .catch(error=>{
                    console.log(`出现错误！！！错误是：${error}`)
                })
        }
    }
</script>

<style scoped>
    .tab-1{
        margin-right:220px;
        margin-left: auto;
    }
    .table{
        margin-left: 100px;
        width: 800px;
    }
</style>