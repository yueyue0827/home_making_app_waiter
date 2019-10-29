<template>
    <div class="layout">
        <router-view></router-view>
        <div>
            <van-tabbar v-model="active" @change="tabChangeHandler">
                <van-tabbar-item name="/home" icon="home-o">首页</van-tabbar-item>
                <van-tabbar-item name="/order" icon="orders-o">订单</van-tabbar-item>
                <van-tabbar-item name="/user" icon="manager-o">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0,
        }
    },
    methods:{
        //标签改变时的事件
        tabChangeHandler(path){
            this.$router.push({path});
        },
    }
}
</script>