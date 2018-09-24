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

        <div class="ccid_btnbox">
          <input type="button" value="打 印" class="ccid_certainBtn ccid_certainBtnDef">
        </div>
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