<template>
    <div class="ccid_tableNomal">
        <table>
            <thead>
                <tr>
                    <th width="10%">序号</th>
                    <th width="30%">项目名称</th>
                    <th width="30%">文件</th>
                    <th width="30%">说明</th>
                </tr>
            </thead>
            <tbody>

                <tr v-for="(items,index) in pageData" :key="index" v-if="pageData.length>0">
                    <td>{{index+1}}</td>
                    <td>{{items.createUserName}}</td>
                    <td>{{items.fileUrl}}</td>
                    <td>{{items.explainText}}</td>
                </tr>
                <tr v-if="pageData.length<=0">
                    <td colspan="4">暂无数据！</td>
                </tr>
              
            </tbody>
        </table>
    </div>
</template>
<script>

export default {
    data() {
        return {
           pageData:[
             {
               createUserName:"1",
               fileUrl:"1",
               explainText:"2"
             }
           ]
        };
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
    methods: {

    },
    created() {
       
    }
};
</script>
<style lang="sass" scoped>
    .ccid_btnbox{
      text-align:center;
      margin: 50px 0 0 0;
    }
    .upFile {
        color: #0066cc;
        text-decoration: underline;
        cursor: pointer;
    }

    .upFile:hover {
        color: #318fdd;
    }
</style>