<template>
    <div class="header">
       <div class="ccid_header_fin image"><img src="../../../static/images/ccid_header_fin.png" alt=""></div>
       <div class="ccid_header_set image"><img src="../../../static/images/ccid_header_set.png" alt=""></div>
       <div class="ccid_style_welcome">欢迎您！江苏中意有限公司 阎　彬</div>
    </div>
</template>
<script>
import {mapMutations} from "vuex"
export default {
    data(){
        return{
        } 
    }, 
    methods:{
        ...mapMutations({
            headerWidth:"HEADER_WIDTH"
        }),
        exit(){
          this.meng.flag = false
        } 
    },
    mounted(){ 
        var _this=this
        // window.onresize=function(){
            _this.headerWidth($('.header').width())
        // }
    }
}
</script>
<style lang="sass" scoped>
.header{            
    overflow: hidden;
    width:100%;
    height:110px;
    background: url('../../../static/images/ccid_header.png') no-repeat;
    background-color: #10468c;
    min-width:1200px;
}
.ccid_style_welcome{
    font-family: "欸软雅黑 Regular", 欸软雅黑;
    font-weight: 400;
    font-style: normal;
    font-size: 12px;    
    text-align: left;
    color: #FFFFFF;
    margin-right: 15px;   
}
.ccid_style_welcome, .image{
    line-height: 120px;
    float:right;
}
image{
    width: 24px;
    height: 23px;
}
.ccid_header_set{
    margin-right: 15px;
}

.ccid_header_fin{
    margin-right: 30px;
}
</style>
