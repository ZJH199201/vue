<template>
     <div class="info-content">
        <new-product :type="type" :state="state" :funType="funType" v-if="type=='1'||type=='3'"></new-product>
        <change-ofextension :type="type" :state="state" :funType="funType" v-if="type=='2'||type=='4'||type=='5'"></change-ofextension>
<<<<<<< HEAD
        <shenhe-info :type="type" :state="state" :funType="funType"></shenhe-info>
=======
        <shenhe-info :type="type" :state="state" :funType="funType" :itemList="itemList" :numState="numState"></shenhe-info>
>>>>>>> 专家端对接接口
    </div>
</template>

<script>
// 基础信息 - 新产品
import newProduct from './newproduct/general.vue'
// 基础信息 - 变更拓展
import changeOfextension from './changeOfextension/general.vue'
// 审核
import shenheInfo from './shenheInfo.vue'
    export default {
        components:{
            newProduct,
            changeOfextension,
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
<<<<<<< HEAD
            funType:String
=======
            funType:String,

            // 产品列表数据
            itemList: String,

            numState: String,
>>>>>>> 专家端对接接口
        },
        data(){
            return{
                showdata:{

                }
            }
        },
        methods:{

        },
        created() {
            
        },
    }
</script>

<style lang="sass" scoped>
    .info-content{
        margin-top:30px;
    }
</style>