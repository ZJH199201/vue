<template>
    <div>
        <div class="ccid_tableNomal">
            <table>
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
                        <th rowspan="2">操作</th>
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
                        <td>
                          <span>查看详情</span>
                        </td>
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
           pageData:[
             {
               productStqk:[
                 {
                    stId:"1",
                    stModel:"3",
                    stReportNum:"2",
                    scExplain:"3"
                 }
               ],
               productScqk:[
                 {
                    stId:"1",
                    stModel:"3",
                    stReportNum:"2",
                    scExplain:"3"
                 }
               ],
               cName:"1",
               testStandard:"2",
               testType:"2",
               num:"1",
               testResult:"2",
               testExplain:"1"
             }
           ],
           
           
        };
    },
    methods: {
       
    },
    created() {
        
    }
}
</script>
<style lang="sass" scoped>

</style>

