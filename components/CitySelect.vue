<template>
    <el-select v-model="citySelected" @change="switchCity(citySelected)" filterable placeholder="请选择城市">
        <!-- <el-option-group
        v-for="c in cities"
        :key="c.prov"
        :label="c.prov">
        <el-option
            v-for="c_city in c.city"
            :key="c_city"
            :label="c_city"
            :value="c_city">
        </el-option>
        </el-option-group> -->

        <el-option-group
        v-for="c in newcities"
        :key="c.provId"
        :label="c.provId">
        <el-option
            v-for="c_city in c.city"
            :key="c_city"
            :label="c_city"
            :value="c_city">
        </el-option>
        </el-option-group>
    </el-select>
</template>

<script>

import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      citySelected:""
    }
  },
  computed: {
      ...mapState([
        'city',
        'gyms'
      ]),
      ...mapGetters([
        'cities',
        'newcities'
      ])
  },
  methods: {
    ...mapMutations([
      "switchCity",
      "getGyms",
      "setGyms"
      ]),
    //  将返回的对象处理成数组  
     unique(arr){
       let s = new Set(arr);
       return Array.from(s);
     },
     getGyms_jsonp(state){
          var self = this;
          var GB2312UnicodeConverter = {
              ToUnicode: function (str) {
                  return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u');
              }
              , ToGB2312: function (str) {
                  return unescape(str.replace(/\\u/gi, '%u'));
              }
          };
          //var city = '上海市', unicode;
          var url_jsonp = "http://bbk.800app.com/uploadfile/staticresource/238592/279833/dataInterface_jsonp_uni.aspx";
          var sql_getGym = "select crmzdy_81744958 prov,crmzdy_81744959 city,crm_name name,crmzdy_82040405 coordinate,crmzdy_80620116 id,crmzdy_80616967 phone,crmzdy_80620118 email,replace(REPLACE(crmzdy_81765917,CHAR(13)add;CHAR(10),'<br/>'),'	',',') tip,crmzdy_80616968 addr from crm_zdytable_238592_23594_238592_view gyms where crmzdy_82037329=1 /*and crmzdy_81744959='var_city'*/ and crmzdy_80620116 between '500005' and '600005'";
          
          //sql_getGym = sql_getGym.replace('var_city',city);
          sql_getGym = GB2312UnicodeConverter.ToUnicode(sql_getGym); 
          // 跨域请求数据
          this.$jsonp(url_jsonp,{sql1:sql_getGym
          }).then(json => {
              json =JSON.parse(json);
            //   console.log(json);
              this.setGyms(json.info[0].rec)
          　　// 返回数据 json， 返回的数据就是json格式
          }).catch(err => {
          　　console.log(err)
          })
      },
      test() {
        alert(JSON.stringify(this.city))
      }
  },
  mounted() {
      this.getGyms();
      this.getGyms_jsonp();
    //   console.log(this.newcities)
      // console.log(this.cities)
  },
}
</script>

<style>
/* The container of BaiduMap must be set width & height. */
.map {
  width: 100%;
  height: 300px;
}
</style>