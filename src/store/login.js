import {post,get,post_array,post_json} from '../../http/axios'


export default{
    namespaced:true,
    state:{
        token:"",
    },
    getters:{},
    mutations:{
        getToken(state,data){
            state.token = data.token;
            console.log(state.token)
        }
    },
    actions:{
        //登陆事件
        async login(context,data){
            let response = await post_json("/user/login",data);
            context.commit("getToken",response.data)
        },
    }
}