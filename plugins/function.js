import Vue from 'vue';  
import axios from 'axios';
import conf_ from './Conf';

Vue.prototype.$conf=conf_;
Vue.prototype.$getData=function(url,target,data={}){
        if (data && typeof(data)!='object'){
            console.log("参数应该是对象类型")
        }
        if(this.$conf.env_cur=='prod'||this.$conf.env_cur=='local'){
            return data = axios.get(url,{
                 params:data
                }).then((response)=>{
                    var res = response.data;
                    if(res[0]){
                        res=res[0];
                    }
                    if(res.code){
                        console.log(res.msg)
                    }else{
                        this.$store.commit('set'+target, res.data);
                    }           
                })         
                .catch(function (error) {
                    console.log(error);
                })
        }else{
            if(!data||data=={}){
                this.$jsonp(url).then(json => {
                    // 返回数据 json， 返回的数据就是json格式
                    if(json[0]){
                        this.$store.commit('set'+target,  json[0].data);
                    }else{
                        this.$store.commit('set'+target,  json.data);
                    }
                    //console.log(JSON.stringify(target))
                }).catch(err => {
                　　console.log(err);
                })
            }else{
                this.$jsonp(url,data).then(json => {
                    if(json[0]){
                        this.$store.commit('set'+target,  json[0].data);
                    }else{
                        this.$store.commit('set'+target,  json.data);
                    }
                     //alert(JSON.stringify(this.$conf.data));
                　　// 返回数据 json， 返回的数据就是json格式
                }).catch(err => {
                　　console.log(err);
                })
            }
        }
}

Vue.prototype.$getDataAsync=function(url,data,func){
    if (data && typeof(data)!='object'){
        console.log("参数应该是对象类型")
        return null;
    }
    if(this.$conf.env_cur=='prod'||this.$conf.env_cur=='local'){
        return data = axios.get(url,{
            params:data
            }).then((response)=>{
                var res = response.data;
                if(res[0]){
                    res=res[0];
                }
                func(res);
            })         
            .catch(function (error) {
                console.log(error);
            })
    }else{
        if(!data||data=={}){
            this.$jsonp(url).then(json => {
                // 返回数据 json， 返回的数据就是json格式
                if(json[0]){
                     func(json[0]);
                }else{
                     func(json);
                }
            }).catch(err => {
            　　console.log(err);
            })
        }else{
            this.$jsonp(url,data).then(json => {
                if(json[0]){
                    func(json[0]);
                }else{
                    func(json);
                }
                 //alert(JSON.stringify(this.$conf.data));
            　　// 返回数据 json， 返回的数据就是json格式
            }).catch(err => {
            　　console.log(err);
            })
        }
    }

}

