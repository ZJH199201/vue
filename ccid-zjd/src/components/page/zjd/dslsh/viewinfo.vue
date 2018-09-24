<template>
    <div>
         <ul class="viewinfo_navtabs">
           <li
            v-for="(item,index) in tabs" 
            :class="{active:index == num}"
            @click="tab(index)" :key='index'>{{item}}</li>
         </ul> 
         <!-- 基本情况 -->
        <div class="ccid_tab_content" v-if="num==0">
<<<<<<< HEAD
          <general :type="type" :funType="funType" :state="state"/>
=======
          <general :type="type" :funType="funType" :state="state" :itemList ="itemList" :numState="numState" />
>>>>>>> 专家端对接接口
        </div>
        <!-- 主要技术参数 -->
        <div class="ccid_tab_content" v-if="num==1">
          <parameter :type="type" :funType="funType" :state="state"/>
        </div>
        <!-- 发动机底盘参数 -->
        <div class="ccid_tab_content" v-if="num==2">
          <dp-parameter :type="type" :funType="funType" :state="state"/>
        </div>
        <!-- 选装及佐证材料 -->
        <div class="ccid_tab_content" v-if="num==3">
          <pnrt-s :type="type" :funType="funType" :state="state"/>
        </div>
        <!-- 新能源佐证材料 -->
        <div class="ccid_tab_content" v-if="num==4">
          <material :type="type" :funType="funType" :state="state"/>
        </div>
        <!-- 备案参数 -->
        <div class="ccid_tab_content" v-if="num==5">
          <file :type="type" :funType="funType" :state="state"/>
        </div>
        <!-- 结构图纸 -->
        <div class="ccid_tab_content" v-if="num==6">
          <flat :type="type" :funType="funType" :state="state"/>
        </div>
        <!-- 检验项目统计表 -->
        <div class="ccid_tab_content" v-if="num==7">
          <detail :type="type" :funType="funType" :state="state"/>
        </div>
    </div>
</template>
<script>
import general from "./viewinfo/general.vue" //基本情况
import parameter from "./viewinfo/parameter.vue" //主要技术参数
import dpParameter from "./viewinfo/dp_parameter.vue" //发动机底盘参数
import PnrtS from "./viewinfo/PnrtS.vue" //选装及佐证材料
import material from "./viewinfo/material.vue" //新能源佐证材料
import file from "./viewinfo/file.vue" //备案参数
import flat from "./viewinfo/flat.vue" //结构图纸
import detail from "./viewinfo/detail.vue" //检验项目统计表
export default {
    components:{
      general,parameter,dpParameter,PnrtS,material,file,flat,detail
    },
    data() {
      return {
        tabs:["基本情况","主要技术参数","发动机底盘参数","选装及佐证材料","新能源佐证材料","备案参数","结构图纸","检验项目统计表"],
        num:0,
        type:'',
        state:'',
<<<<<<< HEAD
        funType:''
=======
        funType:'',
        // 产品列表数据
        itemList: '',
        numState: '',
>>>>>>> 专家端对接接口
      }
    },
    methods:{
      tab(index){
        this.num = index
      }
    },
    created () {
<<<<<<< HEAD
      this.type = this.$route.query.type
      this.state = this.$route.query.state
      this.funType = this.$route.query.funType
=======
      this.type = this.$route.query.type;
      this.state = this.$route.query.state;
      this.funType = this.$route.query.funType;
      this.itemList = this.$route.query.itemList;
      this.numState = this.$route.query.numState;
>>>>>>> 专家端对接接口
    }
}
</script>
<style lang="sass" scoped>
.viewinfo_navtabs{
  box-sizing:border-box;
  width: 100%;  
  height: 35px;
  text-align: center;
  line-height: 34px;
  border-bottom: 1px solid #318fdd;
  padding-bottom:2px;
  margin:0 auto;
  font-size:13px;
  li{
    margin-right: 0.55%;
    float: left;
    width: 9.4%;
    background: #cccccc;
    color:gray;
    font-weight:bold;
    cursor: pointer;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .active {
    background: #199ed8;
    color: #ffffff;
  }
}

</style>

