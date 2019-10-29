<template>
    <div class="login">
        <div class="bg">
            <van-row type="flex" justify="center">
                <van-icon name="friends-o" size="2rem" color="#fff"></van-icon>
            </van-row>
            <van-row type="flex" justify="center">
                <van-col class="logoName">
                    looka平台-员工端
                </van-col>
            </van-row>
        </div>
        <div class="info">
            <van-cell-group>
                <van-field left-icon="manager-o" v-model="waiter.username" placeholder="请输入用户名" />
                <van-field left-icon="closed-eye" v-model="waiter.password" placeholder="请输入用户名" />
            </van-cell-group>
        </div>
        <van-row type="flex" justify="center" gutter="20">
            <van-col ><van-button @click="loginHandler" type="primary">立即登陆</van-button></van-col>
            <van-col><van-button type="primary">快速注册</van-button></van-col>
        </van-row>
    </div>
</template>
<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
    data(){
        return {
            waiter:{
                type:"waiter"
            }
        }
    },
    methods:{
        //获取状态机中的方法
        ...mapActions("login",["login"]),
        //登陆按钮
        loginHandler(){
            //发送请求
            this.login(this.waiter)
            //跳转到首页
            // this.$router.push({path:'/home'})
        }
    }
}
</script>
<style scoped>
.bg{
    padding:3rem 0;
    background:teal;
}
.logoName{
    font-size: 2rem;
    color:#fff;
}
.info{
    margin:1rem 2rem;
}
</style>