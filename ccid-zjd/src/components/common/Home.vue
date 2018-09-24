<template>
    <div class="wrap" v-scrollHeight = "0">
        <v-header></v-header>
        <v-siderbar></v-siderbar>
        <v-content></v-content>
    </div>
</template>
<script>
// 头部
import vHeader from './header';
// 左边栏
import vSiderbar from './siderBar'
// 主内容
import vContent from './content'

export default {
    components:{
        vHeader,vSiderbar,vContent
    }
}
</script>   
<style lang="sass" scoped>
.wrap{
    width:100%;
    // min-width:1200px; 
    min-width:1230px; 
    overflow-y: hidden;
}
</style>
