<template>
    <div>
        <div>
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <th width="25%">车辆检验类别</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th width="25%">发动机类型</th>
                        <td><span v-if="pageData">{{pageData.motoType || '-'}}</span><span v-else>-</span></td>
                    </tr>
                    <tr>
                        <th width="25%">定型报告编号</th>
                        <td>
                            <span v-if="pageData">{{pageData.designReportId || '-'}}</span>
                            <span v-else>-</span>
                        </td>
                    </tr>
                    <tr>
                        <th width="25%">统计表类型</th>
                        <td>
                            <span v-if="pageData&&pageData.statisticsTypeId === 2">变更扩展</span>
                            <span v-else-if="pageData&&pageData.statisticsTypeId === 1">新产品</span>
                            <span v-else-if="pageData&&pageData.statisticsTypeId === 3">整改产品</span>
                            <span v-else>-</span>
                        </td>
                    </tr>
                    <tr>
                        <th width="25%">检验说明</th>
                        <td>
                            <span v-if="pageData">{{pageData.testExplain || '-'}}</span>
                            <span v-else>-</span>
                        </td>
                    </tr>
                    <tr>
                        <th width="25%">进口件说明</th>
                        <td>
                            <span v-if="pageData">{{pageData.importedPartsExplain || '-'}}</span>
                            <span v-else>-</span>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            pageData:null
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
}
</script>
<style lang="sass" scoped>
.table{
  width:100%;
  background:white;
  margin:0 auto;
  border:1px solid #c3d5e5;
  th{
    background:#d2e0ed;
    color:#47627a;
    text-align:center;
    vertical-align: middle;
    font-weight:bold;
    border:1px solid #c3d5e5;
  }
  td{
    vertical-align: middle;
    text-align:center;
    border:1px solid #c3d5e5;
    button{
      width:50px;
      height:30px;
      background:#61b4dc;
      outline:none;
      border:none;
      border-radius:5px;
      color:#fff;
    }
  }
}
</style>

