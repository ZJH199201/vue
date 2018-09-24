<template>
    <div class="info-content">
        <pnrt-s :type="type" :state="state" :funType="funType"></pnrt-s>
        <shenhe-info :type="type" :state="state" :funType="funType"></shenhe-info>
    </div>
</template>

<script>
// 基础信息 
import pnrtS from './newproduct/pnrtS.vue'
// 审核
import shenheInfo from './shenheInfo.vue'
    export default {
        components:{
            pnrtS,
            shenheInfo
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
        data(){
            return{
                tabselect:1,
            }
        },
        methods:{
            
        },
        mounted() {
            
        },
    }
</script>

<style lang="sass" scoped>
    .info-content{
        margin-top:30px;
    }
</style>