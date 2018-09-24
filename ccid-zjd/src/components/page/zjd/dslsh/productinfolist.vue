<template>
  <div>
    <ul class="ccid_producttabs">
        <li
        v-for="(item,index) in tabs" 
        :class="{active:index == num}"
        @click="tab(index)" :key='index'>{{item}}</li>
    </ul>
    <!-- 新产品tab -->
    <div class="ccid_tab_content" v-if="num==0">
      <new-product />
    </div>
    <!-- 变更扩展tab -->
    <div class="ccid_tab_content" v-if="num==1">
      <change-of-extension />
    </div>
    <!-- 暂停恢复tab -->
    <div class="ccid_tab_content" v-if="num==2">
      <suspend-resume />
    </div>
    <!-- 整改产品tab -->
    <div class="ccid_tab_content" v-if="num==3">
      <rectification-product />
    </div>
    <!-- 勘误产品tab -->
    <div class="ccid_tab_content" v-if="num==4">
      <print-product />
    </div>
  </div>
</template>

<script>
import newProduct from "./productinfolist/newproduct.vue" //新产品
import changeOfExtension from "./productinfolist/changeOfextension.vue"  //变更扩展
import suspendResume from "./productinfolist/suspendresume.vue"    //暂停恢复
import rectificationProduct from "./productinfolist/rectificationproduct.vue"    //整改产品
import printProduct from "./productinfolist/printproduct.vue"      //勘误产品
export default {
  components:{
    newProduct,changeOfExtension,suspendResume,rectificationProduct,printProduct
  },
  data(){
    return{
      tabs:["新产品","变更扩展","暂停恢复","整改产品","勘误产品"],
      num:0,
    } 
  },
  methods:{
    tab(index){
      this.num = index
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
