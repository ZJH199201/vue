<template>
    <div>
        <div class="ccid_tabs">
            <ul>
                <li v-for="(item,index) in tabs" :key="index"
                :class="{active:index == num}"
                @click="tab(index)">{{item}}</li>
            </ul>
            <!-- tab 切换 -->
            <div class="tabCon">    
                <!-- 基本信息 -->
                <div class="tabContents" v-if="num==0"><basic-info  :type="type" :state="state" :funType="funType"/></div>    
                <!-- 常规统计表 -->
                <div class="tabContents" v-if="num==1"><tradition  :type="type" :state="state" :funType="funType"/></div> 
                  <!--新能源统计表  -->
                <div class="tabContents" v-if="num==2"><new-energy  :type="type" :state="state" :funType="funType"/></div>  
                <!-- 甲醇统计表 -->
                <div class="tabContents" v-if="num==3"><meoh  :type="type" :state="state" :funType="funType"/></div>  
                <!--  -->
            </div>
            <!-- 审核信息 -->
            <shenhe-info :type="type" :state="state" :funType="funType"></shenhe-info>
        </div>
    </div>
</template>
<script>
// 基本信息
import basicInfo from './detailtab/basicinfo.vue'
//甲醇统计表
import meoh from "./detailtab/meoh.vue"
// 新能源统计表
import newEnergy from "./detailtab/newenergy.vue"
// 常规统计表
import tradition from "./detailtab/tradition.vue"
// 审核
import shenheInfo from './shenheInfo.vue'
export default {
    data(){
        return{
            tabs: ["基本信息", "常规统计表","新能源统计表","甲醇统计表"],
            num: 0
        }    
    },
    props:{
        // 页面类型 
        // 1.新产品 2.变更拓展 3.暂停恢复 4.整改产品 5.勘误产品
        type:String,
        // 功能类型 
        // 1.待受理审核 2.待技术审查 3.待公示审查 4.待申诉审查
        state:String,
        // 审核类型 
        // 1.初审审核 2.复审审核 3.批准审核 4.重新初审审核 5.重新复审审核 6.重新批准审核
        funType:String
    },
    components:{
        basicInfo,meoh,newEnergy,tradition,shenheInfo
    },
    methods:{
        tab(index) {
            this.num = index;
        }
    }
}
    
</script>
<style lang="sass" scoped>
p{
  width:100%;
  margin:0 auto;
  margin-bottom:10px;
}
.ccid_tabs{
  margin-top:30px;
  width:100%;
  ul{
    width: 100%;
    height:40px;
    line-height:40px;
    overflow:hidden;
    margin:0 auto;
    border-bottom: 1px solid #318fdd;
    li{
      width:25%;
      float:left;
      text-align:center;
      border:1px solid #318fdd;
      color:#666666;
      font-weight:bold;
      font-size:15px;
      cursor:pointer;
    }
  }
}
.active{
  background:#318fdd;
  color:#fff!important;
}
</style>

