<template>
    <div id="footer">
        <p>操作手册 &nbsp; | &nbsp; 联系我们</p> 
        <p>工业和信息化部装备工业发展中心 &nbsp; 版权所有© 2018 &nbsp; 京ICP备18021518号</p>
        <p>推荐使用FireFox,Chrome浏览器</p>
        <p>版本信息 V1.0.0 build0701</p>
    </div>
</template>
<script> 

export default {
    data(){
        return{
            mas:"1111"
        }
    }
}
</script>
<style lang="sass" scoped>
    #footer{ 
        padding-top: 15px; 
        padding-bottom: 15px;
        color: #576a7b;
        background: #edf2f8;
        /* background: #9a9790; */
    }
    #footer p {
        flort:left;
        text-align: center;
        line-height: 22px;
        font-size: 12px; 
        /* background: greenyellow; */
    }
</style>
