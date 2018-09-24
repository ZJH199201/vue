<template>
    <div>
        <div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th rowspan="2">序号</th>
                        <th rowspan="2">检验项目</th>
                        <th rowspan="2">检验依据</th>
                        <th rowspan="2">申请检验类别</th>
                        <th colspan="3">视同情况</th>
                        <th colspan="3">实测情况</th>
                        <th rowspan="2">检验结果</th>
                        <th rowspan="2">项目说明</th>
           
                    </tr>
                    <tr>
                        <th>视同产品ID</th>
                        <th>视同产品型号</th>
                        <th>视同报告编号</th>
                        <th>实测数目</th>
                        <th>实测报告编号</th>
                        <th>配置说明</th>
                    </tr>
                </thead>
                <tbody v-for="(items,index) in  pageData" :key="index" v-if="pageData.length>0">
                    <tr>
                        <td :rowspan="items.productScqk.length">{{index+1}}</td>
                        <td :rowspan="items.productScqk.length">{{items.cName  || '-'}}</td>
                        <td :rowspan="items.productScqk.length">{{items.testStandard  || '-'}}</td>
                        <td :rowspan="items.productScqk.length"><span>{{items.testType  || '-'}}</span></td>
                        <td>{{items.productStqk[0].stId  || '-'}}</td>   
                        <td>{{items.productStqk[0].stModel  || '-'}}</td>
                        <td>{{items.productStqk[0].stReportNum  || '-'}}</td>
                        <td :rowspan="items.productScqk.length">{{items.num  || '-'}}</td>
                        <td><span>{{items.productScqk[0].scReportNum  || '-'}}</span></td>
                        <td>{{items.productScqk[0].scExplain  || '-'}}</td>
                        <td :rowspan="items.productScqk.length"><span>{{items.testResult}}</span></td>
                        <td :rowspan="items.productScqk.length">{{items.testExplain  || '-'}}</td>
                    </tr>
                    <tr v-for="(ite,ind) in items.productStqk" :key="ind" v-if="ind>=1">
                        <td>{{ite.stId  || '-'}}</td>
                        <td>{{ite.stModel  || '-'}}</td>
                        <td>{{ite.stReportNum  || '-'}}</td>
                        <td>{{items.productScqk[ind].scReportNum || '-'}}</td>
                        <td>{{items.productScqk[ind].scExplain || '-'}}</td>
                    </tr>
                </tbody>
                <tbody v-if="pageData.length<=0">
                    <tr>
                        <td colspan="12">暂无数据！</td>
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
            
        };
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

