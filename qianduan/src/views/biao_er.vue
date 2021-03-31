<template>
    <div>
        <div class="tian_jia mt-5">
            <button class="btn btn-outline-dark btn-2 w-auto h-auto" v-on:click="zeng_jia">
                添加八字
            </button>
        </div>
        <div class="tab-1">
            <table class="table table-hover table-bordered mt-5 mr-5">
                <thead>
                <tr class="table-active">
                    <th>序号</th>
                    <th>出生日期</th>
                    <th>出生地址</th>
                    <th>出生八字</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr class="" v-for="(item, index) in person" v-bind:key="index">
                    <td>{{item.xu_hao}}</td>
                    <td>{{item.ri_qi}}</td>
                    <td>{{item.di_zhi}}</td>
                    <td>{{item.ba_zi}}</td>
                    <td>
                        <button class="btn-1 btn btn-outline-primary ml-5" v-on:click="xiu_gai">
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
</template>

<script>
    import axios from "axios";

    export default {
        name: "biao_er",
        data:function () {
            return{
                person:[]
            }
        },
        methods:{
            zeng_jia:function(){
                this.$router.push('/zhu_ye/jia_biao_er');
            },
            xiu_gai:function(xu_hao){
                this.$router.push(`/zhu_ye/gai_biao_er?xu_hao=${xu_hao}`);
            },
            shan_chu:function (xu_hao) {
                axios.get(`http://localhost:2444/shan_chu_biao_er/${xu_hao}`)
                    .then(response=>{
                        if(response.statusText === 'OK'){
                            this.$router.go('/zhu_ye/biao_er');
                        }
                    })
                    .catch(error=>{
                        console.log(`出现错误！！！错误是：${error}`)
                    })
            }
        },
        mounted:function() {
            axios.get('http://localhost:2444/biao_er')
                .then(response=>{
                    for(let  i = 0; i < response.data.length; i++){
                        let shu_ju = {
                            xu_hao:'',
                            ri_qi:'',
                            di_zhi:'',
                            ba_zi:''
                        };
                        shu_ju.xu_hao = response.data[i].xu_hao;
                        shu_ju.ri_qi = response.data[i].ri_qi;
                        shu_ju.di_zhi = response.data[i].di_zhi;
                        shu_ju.ba_zi = response.data[i].ba_zi;
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