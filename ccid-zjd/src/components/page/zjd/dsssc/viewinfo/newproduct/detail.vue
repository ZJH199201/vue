<template>
    <div>
        <p>强检统计表编号：<span></span></p>
        <div class="ccid_tabs">
            <ul>
                <li v-for="(item,index) in tabs" :key="index"
                :class="{active:index == num}"
                @click="tab(index)">{{item}}</li>
            </ul>
            <!-- tab 切换 -->
            <div class="tabCon">    
                <!-- 基本信息 -->
                <div class="tabContents" v-if="num==0"><basic-info /></div>    
                <!-- 常规统计表 -->
                <div class="tabContents" v-if="num==1"><tradition /></div> 
                  <!--新能源统计表  -->
                <div class="tabContents" v-if="num==2"><new-energy /></div>  
                <!-- 甲醇统计表 -->
                <div class="tabContents" v-if="num==3"><meoh /></div>  
                <!--  -->
            </div> 
        </div>
        <button class="print">打印</button>
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
export default {
    data(){
        return{
            tabs: ["基本信息", "常规统计表","新能源统计表","甲醇统计表"],
            num: 0
        }    
    },
    components:{
        basicInfo,meoh,newEnergy,tradition
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
  margin-top:20px;
  width:100%;
  margin:0 auto;
  ul{
    width: 100%;
    height:40px;
    line-height:40px;
    overflow:hidden;
    margin:0 auto;
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

