<template>
    <div>
        <div class="ccid_tableNomal">
            <table>
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
                        <td><span class="look">查看</span></td>
                    </tr>
                    <tr v-if="this.firstData<=0">
                        <td colspan="4">暂无数据！</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="ccid_tableNomal">
            <table>
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
                    <tr v-for="(items,index) in secondData" :key="index" v-if="secondData.length>0">
                        <td>{{items.seq}}</td>
                        <td>{{items.cName}}</td>
                        <td>{{items.valueName}}</td>
                        <td><span class="look">查看</span></td>
                    </tr>
                    <tr v-if="this.secondData<=0">
                        <td colspan="4">暂无数据！</td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
        <div class="ccid_tableNomal">
            <table>
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
                            <!-- <img :src="productData.rightPhotoUrl" :alt="productData.rightPhotoMc" class="productDataPic" v-if="productData.rightPhotoUrl">
                            <span v-else>暂无缩略图！</span> -->
                        </td>
                        <td><span class="look">查看</span></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>后部照片</td>
                        <td>
                            <!-- <img :src="productData.afterPhotoUrl" :alt="productData.afterPhotoMc" class="productDataPic" v-if="productData.afterPhotoMc">
                            <span v-else>暂无缩略图！</span> -->
                        </td>
                        <!-- productId   id -->
                        <td><span class="look">查看</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="ccid_btnbox">
          <input type="button" value="打 印" class="ccid_certainBtn ccid_certainBtnDef">
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
           firstData:[
             {
               seq:"1",
               cName:"2",
               valueName:"3",
             }
           ],
           secondData:[
             {
               seq:"1",
               cName:"2",
               valueName:"3",
             }
           ]
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
.ccid_btnbox{
  text-align:center;
  margin: 50px 0 0 0;
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
.ccid_tableNomal{
  margin-bottom:10px;
}
</style>

