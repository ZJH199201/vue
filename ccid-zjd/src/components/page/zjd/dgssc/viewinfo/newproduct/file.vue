<template>
  <div class="ccid_tableNomal">
    <table>
      <thead>
        <tr>
          <th>参数编号</th>
          <th>参数名称</th>
          <th colspan="2">参数申报内容</th>
          <th>填报说明</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items,index) in pageData" :key="index" v-if="pageData.length>0">
          <td>{{items.seq}}</td>
          <td>{{items.cName}}</td>
          <td>
            <span v-if="items.valueId">{{items.valueId}}</span>
            <span v-else>{{items.valueName}}</span>
          </td>
          <td>
            <span>{{items.imageUrl}}</span>
          </td>
          <td >
            <span class="examine">查看</span>
          </td>
        </tr>
        <tr v-if="pageData.length<=0">
          <td colspan="5">暂无数据！</td>
        </tr>
        
        <!-- <tr>
          <td></td>
          <td>储能装置正极材料</td>
          <td class="col-sm-3">
            <select name="" id="">
              <option value="">N/A</option>
              <option value="">层状三元材料(含镍钴锰、镍钴铝、镍钴锰铝等材料)</option>
              <option value="">尖晶石型锰酸钾材料</option>
              <option value="">橄榄石型酸铁锂材料</option>
              <option value="">富锂锰基固溶体材料</option>
              <option value="">其他类型正极材料(提供说明材料)</option>
            </select>
          </td>
          <td class="col-sm-4">
            <p>材料说明文件1.docx <span class="glyphicon glyphicon-remove-circle"></span></p>
            <p>材料说明文件2.docx <span class="glyphicon glyphicon-remove-circle"></span></p>
            <input type="text" value="上传附件" onclick="path1.click()" class="upFile" readonly>  
            <input type="file" id="path1" style="display:none" @change="addFile($event)">
          </td>
          <td class="examine">查看</td>
        </tr>
        <tr>
          <td></td>
          <td>储能装置电解质成分</td>
          <td>
            <select name="" id="">
              <option value="">N/A</option>
              <option value="">六氟磷酸钾材料</option>
              <option value="">其他电解质材料(提供说明材料)</option>
            </select>
          </td>
          <td>
            <p>材料说明文件1.docx <span class="glyphicon glyphicon-remove-circle"></span></p>
            <p>材料说明文件2.docx <span class="glyphicon glyphicon-remove-circle"></span></p>
            <input type="text" value="上传附件" onclick="path2.click()" class="upFile" readonly>  
            <input type="file" id="path2" style="display:none" @change="addFile($event)">
          </td>
          <td class="examine">查看</td>
        </tr> -->
      </tbody>
    </table>

    <div class="ccid_btnbox">
      <input type="button" value="打 印" class="ccid_certainBtn ccid_certainBtnDef">
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return{
      pageData:[
        {
          seq:"1",
          cName:"2",
          valueId:"3",
          valueName:"4",
          imageUrl:"5"
        }
      ]
    }
  },
  created(){
    
  },
  methods:{
    save(){
      // console.log(1234)
    },
    addFile(val){
      console.log(val.target.files[0].name)
      console.log(val.target.value)
      this.upfile.name = val.target.files[0].name
      this.upfile.url = val.target.value
    },
    // 获取备案参数数据
    selectNoticedProductBacsxmproductIdData(){
        this.pageData =[]
        selectNoticedProductBacsxmproductIdData(this.selectbyproductid,{accessToken:getStorage('accessTokened')}).then( result => {
          if(result.data.data){
            this.pageData = result.data.data;
          }else{
            this.pageData = [];
          }
        }).catch( err => {
            console.log( err , '')
        })
    }
  }
}
</script>
<style lang="sass" scoped>
.ccid_btnbox{
  text-align:center;
  margin: 50px 0 0 0;
}
</style>


