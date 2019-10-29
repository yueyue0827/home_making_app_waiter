<template>
    <div class="user">
        <!-- 背景图 -->
        <van-row type="flex" justify="center">
            <van-col>
                <img src="../../assets/1.jpg" alt="">
            </van-col>
        </van-row>
                {{token}}
        <!-- /背景图 -->
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return {}
    },
    computed:{
        //获得状态机中的属性
        ...mapState("login",["token"])
        
    },
    methods:{
        //获得状态机中的方法
    },
    created(){
        console.log(this.token)
    }
}
</script>