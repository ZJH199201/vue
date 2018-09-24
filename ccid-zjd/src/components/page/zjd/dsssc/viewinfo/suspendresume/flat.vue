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
                <tr>
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
        <button class="print">打印</button>
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

