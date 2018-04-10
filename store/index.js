import Vuex from 'vuex'
import axios from 'axios'
import provs from '~/assets/json/provs.json'
<<<<<<< HEAD
 
=======
import letter from '~/assets/json/letter.json'
>>>>>>> abb732185b917697fe0156c200259a460e649508

const createStore = () => {
  return new Vuex.Store({
    state: {
        ...provs,
<<<<<<< HEAD
        LanguageType:1,
        bg:[{color:'#33CCCC',pic:'/img/index/bottom2.jpg'},{color:'#5160AC',pic:'/img/index/bottom.png'}],
=======
        ...letter,
        bgColor:['#33CCCC','#5160AC'],
>>>>>>> abb732185b917697fe0156c200259a460e649508
        city:"上海市",
        Gyms:[],
        News:[],
        menu: {
           content:[
              {name:"品牌故事",value:"/story"},
              {name:"我们的课程",value:"/course"},
              {name:"派对和夏冬令营",value:"/party"},
              {name:"预约体验",value:"/intro"},
              {name:"加盟中心",value:"/join"},
           ]
        },
        counter: parseInt(Math.random()*10000),
    },
    getters:{
      // 获取有中心的城市和省份
      gymcities(state){
        let c = state.gyms.map(gym=>{
          // return {prov:gym.prov,city:gym.city,name:gym.name,id:gym.id}
          return {prov:gym.prov,city:gym.city}
        })
        // c=[...new Set(c)];
       
        var prov = [];
        c.map(c=>{
          prov.push(c.prov)
        })
        // var city = [];
        // c.map(c=>{
        //   city.push(c.city)
        // })
        prov = [...new Set(prov)]
        // city = [...new Set(city)]
        // return prov;
        return prov.map(p=>{
         
          var city = [];
          c.map(c=>{
            if(c.prov.indexOf(p)!=-1){
              city.push(c.city)
            }
          })
          if (p =="天津"|| p=="上海"||p=="北京"|| p=="重庆"){
            p= p+'市'
          }
          return {prov:p,city:[...new Set(city)]}
          //   var cities = [];
          // city.map(t=>{
          //   var center = [];
          //   c.map(c=>{
          //     if(c.city.indexOf(t)!=-1){
          //       center.push({center:c.name,id:c.id})
          //     }
          //   })
          //   if(t.indexOf(p)!=-1){

          //     cities.push({city:t,center:center});

          //   }
          // })
         

         
        });
       
      },
      
      // 返回省份和有小小运动馆中心得城市
      bgColor_cur(state){
        let index = parseInt(state.counter/600)%state.bg.length;
        return state.bg[index];
      },
      cities(state){
        let c = state.Gyms.map(gym => {
            return {prov:gym.prov,city:gym.city};
        })
        c = [...new Set(c)];
        return  state.provs.map(p=>{
              var city=[];
              c.map(c=>{
                  if(c.prov.indexOf(p.name)!=-1) {
                    city.push(c.city);
                  }
              })
            return {provId:p.id,prov:p.name,city:[...new Set(city)]};
          })
      },
      newcities(state){
        let d = state.gyms.map(gym=>{
          return {city:gym.city}
        })
        // d = [...new Set(d)];
        return state.letter.map(p=>{
          var city= [];
          d.map(d=>{
            if(p.city.indexOf(d.city)!=-1){
              city.push(d.city);
            }
          })
          // console.log(city)
          return {provId:p.id,city:[...new Set(city)]}
        })
      }
    },
    mutations: {
<<<<<<< HEAD
=======
      getGyms(state){
        // if(!state.gyms||state.gyms.length==0){
        //   return axios.get('http://localhost:8888/api/getGymByCity/-1')
        //     .then((response)=>{
        //       var res = response.data;
        //       if(res.code){
        //           console.log(res.msg)
        //       }else{
        //         state.gyms = res.data;
        //       }           
        //     })         
        //     .catch(function (error) {
        //       console.log(error);
        //     })
        //   }
      },

>>>>>>> abb732185b917697fe0156c200259a460e649508
      increment (state) {
        if(state.counter++>10000){
            state.counter=0;
            //console.log(state.counter);
        }
      },
      switchCity(state,c){
        state.city = c;
        console.log(c);
      },
      setGyms(state,g){
        state.Gyms = g;
      },
      setNews(state,g){
        state.News = g;
      }
    },
    actions: {
  		incrementAsync ({ commit }) {
  		 setInterval(() => {
  		  commit('increment')
  		 }, 3000)
      }

    }
  })
}

export default createStore