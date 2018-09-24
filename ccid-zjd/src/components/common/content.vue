<template>
    <div class="contentWrap boxSizing"  v-scrollHeight = "0">
        <div class="ccid_banner_back">
             <CurrentTime />
        </div>
        <div class="ccid_content_off" >
            <div class="ccid_content_header">
              <img src="../../../static/images/ccid_center_house.png" alt="">
              <router-link to='/Home' tag="span" style='cursor: pointer;'> 首页</router-link>>
              <router-link to='/' tag="span" style='cursor: pointer;'>新产品管理</router-link>
            </div>
         </div>
        <router-view class="contentview"></router-view>
        <Footer />
    </div>
</template>
<script>
    // 底部
import Footer from '../../components/common/footer/footer'
    // 修改域名
import CurrentTime from '../../components/module/currenTime/currentTime.vue'
export default {
  components:{
    CurrentTime,
    Footer
  },
  data() {
    return {
      nowIndex: 0,
            }
          },
  methods: {
    dropdown: function(){
      console.log(event.target.getAttribute('class'))
      if(event.target.getAttribute('class') === 'dropdownBtn') {
         this.dropdownActive = !this.dropdownActive;
         }
       },
    tabToggle: function(index){
          this.nowIndex = index;
           if(index === 0){
             return
         }else {
           this.dropdownActive = false;
                }
            }
        },
}
</script>
<style lang="sass" scoped>
.contentview{
    min-width:1010px;
    width:98%;
    font-size:14px;
    background:#fff;
    // padding:20px;
    padding:0 20px 20px;
    border-right:1px solid #bacfe2;
    border-bottom:1px solid #bacfe2;
    min-width: 1010px;
    overflow-x: hidden;
}

.contentWrap{
  width:-moz-calc(100% - 220px);
  width:-webkit-calc(100% - 220px);
  width: calc(100% - 220px);
  height:100%;
  background:#edf2f8;
  float:left;
  overflow: hidden;
}
.ccid_banner_back{
  width: 100%;
  padding-top:10px;
  box-sizing: border-box;
  height: 40px;
  background-color:#edf2f8;
}
.ccid_content_off{
  width: 98%;
  height:100px;
  min-width:1010px;
  line-height: 100px;
  background-size: 100%;
  border-right:1px solid #bacfe2;
  // border-top:1px solid #bacfe2;
  background-color:#FFFFFF;
  img{
    width:16px;
    height: 16px;
  }
}
.ccid_content_header{
      float: left;
      width:80%;
      margin-left:20px;
}
.ccid_name{
  float: right;
}

/* xiala */
    .wrapper {
        justify-content: center;
        
        align-items: center;
    }
    .wrapper>div {
        text-align: center;
        height: 36px;
        line-height: 36px;
    }
    .dropdownWrapper {
        /*margin-top: 36px;*/
        border: 1px solid #2C3E50;
        font-size: 14px;
    }
    .dropdownWrapper li {
        display: block!important;
    }

    .nav-item.active {
        background: #e3e3d3;
    }
    .dropdownBtn {
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .nav-item {
        cursor: pointer;
    }
</style>
