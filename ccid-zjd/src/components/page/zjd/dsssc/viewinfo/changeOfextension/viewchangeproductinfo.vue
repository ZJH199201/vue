<template>
    <div>
        <ul class="viewinfo_navtabs">
            <router-link tag="li" to="/Home/Assigntheexpertstoaccepttheaudit_Productauditspecialist/viewchangeproductinfo/general">基本情况</router-link>
            <router-link tag="li" to="/Home/Assigntheexpertstoaccepttheaudit_Productauditspecialist/viewchangeproductinfo/parameter">主要技术参数</router-link>
            <router-link tag="li" to="/Home/Assigntheexpertstoaccepttheaudit_Productauditspecialist/viewchangeproductinfo/dp_parameter">发动机底盘参数</router-link>
            <router-link tag="li" to="/Home/Assigntheexpertstoaccepttheaudit_Productauditspecialist/viewchangeproductinfo/PnrtS">选装及佐证材料</router-link>
            <router-link tag="li" to="/Home/Assigntheexpertstoaccepttheaudit_Productauditspecialist/viewchangeproductinfo/material">新能源佐证材料</router-link>
            <router-link tag="li" to="/Home/Assigntheexpertstoaccepttheaudit_Productauditspecialist/viewchangeproductinfo/file">备案参数</router-link>
            <router-link tag="li" to="/Home/Assigntheexpertstoaccepttheaudit_Productauditspecialist/viewchangeproductinfo/flat">结构图纸</router-link>
            <router-link tag="li" to="/Home/Assigntheexpertstoaccepttheaudit_Productauditspecialist/viewchangeproductinfo/detail">检验项目统计表</router-link>
            <router-link tag="li" to="/Home/Assigntheexpertstoaccepttheaudit_Productauditspecialist/viewchangeproductinfo/dualSlope">双积分配置</router-link>
            <router-link tag="li" to="/Home/Assigntheexpertstoaccepttheaudit_Productauditspecialist/viewchangeproductinfo/evidenceofhazardoussubstances">有害物质佐证材料</router-link>
        </ul> 
        <router-view v-scrollHeight = "124"></router-view>
    </div>
</template>
<script>
export default {
    data() {
      return {

      }
    },
    methods:{
      
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
  .router_active{
    margin: 0!important;
  }
}
.router-link-active{
  background: #318fdd!important;
  color: white!important;
}

</style>

