<template>
    <div>
        <div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th width="10%">参数编号</th>
                        <th  width="40%">参数名称</th>
                        <th>参数申报内容</th>
                        <th width="10%">填报说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(items,index) in firstData" :key="index" v-if="firstData.length>0">
                        <td>{{items.seq}}</td>
                        <td>{{items.cName}}</td>
                        <td>{{items.valueName}}</td>
                        <td><i class="look">查看</i></td>
                    </tr>
                    <tr v-if="this.firstData<=0">
                        <td colspan="4">暂无数据！</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="table-striped">
            <table class="table table-bordered">
                <caption>车身反光标识说明</caption>
                <thead>
                    <tr class="table_photo">
                        <th  width="10%">参数编号</th>
                        <th  width="40%">参数名称</th>
                        <th>参数申报内容</th>
                        <th  width="10%">填报说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                         <td>{{items.seq}}</td>
                        <td>{{items.cName}}</td>
                        <td>{{items.valueName}}</td>
                        <td><i class="look">查看</i></td>
                    </tr>
                    <tr v-if="this.secondData<=0">
                        <td colspan="4">暂无数据！</td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
        <div class="table-striped">
            <table class="table table-bordered">
                <caption>产品照片</caption>
                <thead>
                    <tr class="table_photo">
                        <th  width="10%">序号</th>
                        <th  width="40%">项目名称</th>
                        <th>缩略图</th>
                        <th  width="10%">填报说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>右45°照片</td>
                        <td>
                            <img :src="productData.rightPhotoUrl" :alt="productData.rightPhotoMc" class="productDataPic" v-if="productData.rightPhotoUrl">
                            <span v-else>暂无缩略图！</span>
                        </td>
                        <td><i class="look">查看</i></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>后部照片</td>
                        <td>
                            <img :src="productData.afterPhotoUrl" :alt="productData.afterPhotoMc" class="productDataPic" v-if="productData.afterPhotoMc">
                            <span v-else>暂无缩略图！</span>
                        </td>
                        <!-- productId   id -->
                        <td><i class="look">查看</i></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button class="print">打印</button>
    </div>
</template>
<script>

export default {
    data(){
        return{
           
        }
    },
    created(){
       
    },
    mounted(){

    },
    methods:{
      
    }
    
}
</script>

<style lang="sass" scoped>
.table-striped{
    margin:40px 0px;
}
.table{
    background:white;
    width:100%;
    margin:0 auto;
    border:1px solid #c3d5e5;
    th{
        background:#d2e0ed;
        color:#47627a;
        font-weight:bold;
        text-align:center;
        border:1px solid #c3d5e5;
    }
    td{
      border:1px solid #c3d5e5;
      vertical-align: middle;
    }
    caption{
        background:#318fdd;
        text-align:center;
        color:white;
        font-weight:bold;
    }
}
.table_photo{
    th{
        background:#edf2f8;
        color: #666666;
    }
}
.table-bordered{
    tr{
        td{
            text-align:center;
        }
    }
    i{
        text-decoration:underline;
        display:inline-block;
        
    }
}
.look{
    cursor:pointer;
}
.productDataPic{
    max-width: 94px;
    max-height: 73px;
    width: auto;
    height: auto;
}
</style>

