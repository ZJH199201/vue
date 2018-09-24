<template>
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th width="10%">序号</th>
                    <th width="30%">项目名称</th>
                    <th width="20%">文件</th>
                    <th width="30%">说明</th>
                    <th width="10%">填报说明</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(items,index) in pageData" :key="index" v-if="pageData.length>0">
                    <td>{{index+1}}</td>
                    <td>{{items.cName}}</td>
                    <td><a href="" class="underline">{{items.imageUrl}}</a></td>
                    <td>{{items.valueName}}</td>
                    <td class="text-center"><i class="underline">查看</i></td>
                </tr>
                <tr v-if="pageData.length<=0">
                    <td colspan="5">暂无数据！</td>
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
              cName:"1",
              imageUrl:"2",
              valueName:"2",
              
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
}
</script>

<style lang="sass" scoped>
.table{
  width:100%;
  background:white;
  margin:0 auto;
  border:1px solid #c3d5e5;
  th,td{
    border:1px solid #c3d5e5;
  }
  tr{
    td:nth-of-type(1){
      text-align:center;
    }
  }
  th{
    background:#d2e0ed;
    color:#47627a;
    text-align:center;
    font-weight:bold;
  }
  td{
      a{
          color:#000;
      }
  }
}
</style>

