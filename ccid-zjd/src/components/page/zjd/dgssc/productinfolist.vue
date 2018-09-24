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
    <!-- 暂停恢复tab -->
    <div class="ccid_tab_content" v-if="num==1">
      <suspend-resume />
    </div>
  </div>
</template>

<script>
import newProduct from "./productinfolist/newproduct.vue" //新产品
import suspendResume from "./productinfolist/suspendresume.vue"    //暂停恢复
export default {
  components:{
    newProduct,suspendResume
  },
  data(){
    return{
      tabs:["新产品","暂停恢复"],
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
