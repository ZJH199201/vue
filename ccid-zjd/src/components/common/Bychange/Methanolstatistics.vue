<template>
    <div class="content">

        <div class="table-responsive">
            <div class="productList-search">
              <div class="search-content">
                <div class="search-top">
                  产品类别：<input type="text" v-model="productModels"> 
                  参数编号：<input type="text" v-model="productDemo">                 
                </div> 
              </div>
              <div class="search-btn">
                <button @click="searchList">查询 <span class="glyphicon glyphicon-search"></span></button>
              </div>
            </div>
            <section class="btn">   
                <button @click="add()" style="background:#ff9900">
                  新增配置参数
                </button>
            </section>      
            <table class="table table-bordered table-hover">
                <thead>
                  <tr> 
                    <th>排序</th>
                    <th>参数编号</th>
                    <th>参数名称</th>
                    <th>说明</th>
                    <th>排序</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="(i,index) in Byadd" :key='index'>   
                      <td>{{i.px}}</td>
                      <td>{{i.cs}}</td>
                      <td>{{i.csmc}}</td>  
                      <td>{{i.sm}}</td>
                      <td> 
                        
                        <div class="psfinline psfviewinformationbtn amend">
                            改
                            <span class="psfviewinformationbtntitle">
                                修改
                            </span>
                            <div class="psfafterdom"></div>
                        </div>
                        <div class="psfinline psfviewinformationbtn remove" @click="del(i.id)">
                            停
                            <span class="psfviewinformationbtntitle">
                                停用
                            </span>
                            <div class="psfafterdom"></div>
                        </div>  
                      </td>
                    </tr>
                </tbody>
            </table>  
        </div>  
        <div class="ccidBy-footer">
           <button class="look">保存</button>
           <button>取消</button>
        </div> 
          <transition name="fade">
         <div class="ccidBy-add" v-if="Byremove">
              <div class="ccidBy-contentheader">双积分参数名称全项</div>
              <div class="productList-search">
                  <div class="search-content">
                    <div class="search-top">
                      产品类别：<input type="text" class="ccidBy-width" v-model="productModels"> 
                      参数编号：<input type="text" class="ccidBy-widthbox" v-model="productDemo">                 
                    </div> 
                  </div>
                  <div class="search-btn">
                    <button @click="searchList">查询 <span class="glyphicon glyphicon-search"></span></button>
                    <button @click="searchList">重置</button>
                  </div>
                </div>    
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr> 
                          <th><label class="ccidBy-checkbox"><input type="checkbox"> 全选</label></th>
                          <th>序号</th>
                          <th>参数编号</th>
                          <th>参数名称</th>
                          <th>说明</th>

                        </tr>
                      </thead>
                      <tbody>
                          <tr v-for="(i,index) in Byadd" :key='index'>   
                            <td><label class="ccidBy-checkbox"><input type="checkbox"> {{i.px}}</label></td>
                            <td> 

                              </td>
                            <td>{{i.cs}}</td>
                            <td>{{i.csmc}}</td>  
                            <td>{{i.sm}}</td>

                          </tr>
                      </tbody>
                </table>  
                <div class="ccidBy-footer">
                    <button class="look" @click="byremout()">保存</button>
                    <button>取消</button>
                 </div>    
             </div> 
         </transition>
   
    </div>
</template>
<script> 
export default{
  data(){
    return {
      Byremove:false,
      accessTokened:"SID_41913346DB1D398BB59EB689AA06C8D1",
      ProductList:[],
      productModels:"",
      productDemo:"",
      trademarkNames:"",
      statuses: 0,
      batchNumbers:0, 
      flag:0,  
      selAll: false,
      Byadd:[
            {px:'1',cs:'产数编号',csmc:'企业名称',sm:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'},
            {px:'2',cs:'产数编号',csmc:'企业名称',sm:'aaaaawwaaaa22aaaaaaaaaaaaaaaaaaaaa'},
            {px:'3',cs:'产数编号',csmc:'企业名称',sm:'aaaaa啊呜呜1aaaaaaaaaaaaaaaaaaaaaaaaa'},
            {px:'4',cs:'产数编号',csmc:'企业名称',sm:'aaaaaaaaa3aaaaaaaaaaaaaaaaaaaaa'},
            {px:'5',cs:'产数编号',csmc:'企业名称',sm:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}, 
            {px:'6',cs:'产数编号',csmc:'企业名称',sm:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'},
            {px:'7',cs:'产数编号',csmc:'企业名称',sm:'（天然气车w型填写折算后的油耗值）'}      
      ]
    }
  },
  updated() {},
  methods:{
    add(){
      this.Byremove=!this.Byremove
    },
    look(id){ 
      this.$router.push({
        path:'/Home/CorrigendumModellist/applicationForm', 
        query:{  id:id }
      });
    },   
    del(id){},
    searchList() {},
    getList(){},
    byremout(){
      this.Byremove=!this.Byremove
    }
  },
  created(){ 
    // this.ProductList=[ { "id": 43, "proModelbeizu": "", "name": 1, "nameBeizhu": "", "enterpriseBasic": "", "categoryId": 1, "productionAddress": "", "structureCategory": "", "spficaCategory": "", "carTypeId": 1, "testingOrgId": 2, "shapingOrgId": 3, "isNecp": 0, "necpCategory": 5, "platformReportNumber": "was", "proTecReport": "3w", "createTime": "2018-07-11", "submitTime": "", "batchNumberId": "", "isNoticed": 0, "status": 0, "result": 0, "isDelete": 0, "productModelT": { "id": 1, "name": "产品名称1" }, "trademark": "", "productBatchNumber": "", "check": false }, { "id": 44, "proModelbeizu": "", "name": 1, "nameBeizhu": "", "enterpriseBasic": "", "categoryId": 1, "productionAddress": "", "structureCategory": "", "spficaCategory": "", "carTypeId": 1, "testingOrgId": 2, "shapingOrgId": 3, "isNecp": 1, "necpCategory": 5, "platformReportNumber": "was", "proTecReport": "3w", "createTime": "2018-07-11", "submitTime": "", "batchNumberId": "", "isNoticed": 0, "status": 0, "result": 0, "isDelete": 0, "productModelT": { "id": 1, "name": "产品名称1" }, "trademark": "", "productBatchNumber": "", "check": false }, { "id": 47, "proModelbeizu": "", "name": 3, "nameBeizhu": "", "enterpriseBasic": "", "categoryId": 22, "productionAddress": "", "structureCategory": "", "spficaCategory": "", "carTypeId": 3, "testingOrgId": 3, "shapingOrgId": 3, "isNecp": 3, "necpCategory": 3, "platformReportNumber": "11", "proTecReport": "31", "createTime": "2018-07-11", "submitTime": "", "batchNumberId": "", "isNoticed": 0, "status": 0, "result": 0, "isDelete": 0, "productModelT": { "id": 3, "name": "产品名称3" }, "trademark": "", "productBatchNumber": "", "check": false }, { "id": 48, "proModelbeizu": "", "name": 3, "nameBeizhu": "", "enterpriseBasic": "", "categoryId": 22, "productionAddress": "", "structureCategory": "", "spficaCategory": "", "carTypeId": 3, "testingOrgId": 3, "shapingOrgId": 3, "isNecp": 3, "necpCategory": 3, "platformReportNumber": "11", "proTecReport": "31", "createTime": "2018-07-11", "submitTime": "", "batchNumberId": "", "isNoticed": 0, "status": 0, "result": 0, "isDelete": 0, "productModelT": { "id": 3, "name": "产品名称3" }, "trademark": "", "productBatchNumber": "", "check": false }, { "id": 49, "proModelbeizu": "", "name": 3, "nameBeizhu": "", "enterpriseBasic": "", "categoryId": 22, "productionAddress": "", "structureCategory": "", "spficaCategory": "", "carTypeId": 3, "testingOrgId": 3, "shapingOrgId": 3, "isNecp": 3, "necpCategory": 3, "platformReportNumber": "11", "proTecReport": "31", "createTime": "2018-07-11", "submitTime": "", "batchNumberId": "", "isNoticed": 0, "status": 0, "result": 0, "isDelete": 0, "productModelT": { "id": 3, "name": "产品名称3" }, "trademark": "", "productBatchNumber": "", "check": false }, { "id": 50, "proModelbeizu": "", "name": 3, "nameBeizhu": "", "enterpriseBasic": "", "categoryId": 22, "productionAddress": "", "structureCategory": "", "spficaCategory": "", "carTypeId": 3, "testingOrgId": 3, "shapingOrgId": 3, "isNecp": 3, "necpCategory": 3, "platformReportNumber": "11", "proTecReport": "31", "createTime": "2018-07-11", "submitTime": "", "batchNumberId": "", "isNoticed": 0, "status": 0, "result": 0, "isDelete": 0, "productModelT": { "id": 3, "name": "产品名称3" }, "trademark": "", "productBatchNumber": "", "check": false }, { "id": 51, "proModelbeizu": "", "name": 3, "nameBeizhu": "", "enterpriseBasic": "", "categoryId": 22, "productionAddress": "", "structureCategory": "", "spficaCategory": "", "carTypeId": 3, "testingOrgId": 3, "shapingOrgId": 3, "isNecp": 3, "necpCategory": 3, "platformReportNumber": "11", "proTecReport": "31", "createTime": "2018-07-11", "submitTime": "", "batchNumberId": "", "isNoticed": 0, "status": 0, "result": 0, "isDelete": 0, "productModelT": { "id": 3, "name": "产品名称3" }, "trademark": "", "productBatchNumber": "", "check": false }, { "id": 54, "proModelbeizu": "", "name": 324, "nameBeizhu": "", "enterpriseBasic": "", "categoryId": 456754, "productionAddress": "", "structureCategory": "", "spficaCategory": "", "carTypeId": 456754, "testingOrgId": 456754, "shapingOrgId": 456754, "isNecp": 456754, "necpCategory": 4, "platformReportNumber": "平台符合性报告编号", "proTecReport": "产品技术报告", "createTime": "2018-07-20", "submitTime": "", "batchNumberId": "", "isNoticed": 0, "status": 0, "result": 0, "isDelete": 0, "productModelT": "", "trademark": "", "productBatchNumber": "", "check": false }, { "id": 55, "proModelbeizu": "", "name": 324, "nameBeizhu": "", "enterpriseBasic": "", "categoryId": 456754, "productionAddress": "", "structureCategory": "", "spficaCategory": "", "carTypeId": 456754, "testingOrgId": 456754, "shapingOrgId": 456754, "isNecp": 456754, "necpCategory": 4, "platformReportNumber": "平台符合性报告编号", "proTecReport": "产品技术报告", "createTime": "2018-07-20", "submitTime": "", "batchNumberId": "", "isNoticed": 0, "status": 0, "result": 0, "isDelete": 0, "productModelT": "", "trademark": "", "productBatchNumber": "", "check": false }, { "id": 56, "proModelbeizu": "", "name": 324, "nameBeizhu": "", "enterpriseBasic": "", "categoryId": 456754, "productionAddress": "", "structureCategory": "", "spficaCategory": "", "carTypeId": 456754, "testingOrgId": 456754, "shapingOrgId": 456754, "isNecp": 456754, "necpCategory": 4, "platformReportNumber": "平台符合性报告编号", "proTecReport": "产品技术报告", "createTime": "2018-07-20", "submitTime": "", "batchNumberId": "", "isNoticed": 0, "status": 0, "result": 0, "isDelete": 0, "productModelT": "", "trademark": "", "productBatchNumber": "", "check": false } ]
  }
}
</script>
<style lang="sass" scoped>

.productList-search{
  width:100%;
  height:100px;
  border:1px solid #b3c4d4;
  padding:10px;
  overflow:hidden;
  margin-bottom:40px;
  .search-content{
    width:70%;
    float:left;
    .search-top{
      margin-top:10px;
      height:100%;
      line-height:40px;

      .ccidBy-widthbox{
        width: 40%;
      }
      input{
        width:30%;
        height:50px;
        border:1px solid #999999;
        margin-right:10px;
        border-color:#999999;
        padding:0 5px;
      }
    }
    .search-bottom{
      height:40px;
      line-height:40px;
    }
  }
  .search-btn{
    width:30%;
    float:right;
    padding:10px;
    text-align: right;
    button{
      width:120px;
      height:40px;
      background:#318fdd;
      border:none;
      outline:none;
      border-radius:5px;
      color:#fff;
      margin-top:10px;
      font-size:16px;
    }
  }
}
.content{
  min-width:1010px;
  width:98%;
  font-size:14px;
  position: relative;
  background:#fff;
  padding:20px;
  >div{
    height: 100%;
  }
  .btn{
    float:right;
    font-size:12px;
    bottom:-20px;
    button{
      margin-left:20px;
      width:110px;
      height:30px;
      font-size:14px;
      border-radius: 5px;
      background: #7bafdc;
      outline:none;
      border:none;
      color:white;
      font-weight:bold;
      span{
        margin-right:5px;
        font-size:15px;
      }
    }
  }
  th{
    background: #318fdd;
    color: white;
    text-align: center;
    padding: 10px 5px;
    font-weight:bold;
  }
  .table{
    background:white;
    td{
      text-align: center;
      padding:10px 5px;
    }
    .psfinline{display:inline-block}
    .psfviewinformationbtn{
      position:relative;
      width:26px;
      height:26px;
      border-radius:50%;
      background:#318fdd;
      color:#fff;
      line-height:26px;
      cursor:pointer;
      .psfviewinformationbtntitle{
        position:absolute;
        left:50%;
        bottom:35px;
        display:none;
        width:100px;
        height:20px;
        line-height:20px;
        border-radius:5px;
        text-align:center;
        transform:translate(-50%,0);
        box-shadow:0 0 4px #318fdd;
        background:#fff;
        color:rgb(51,51,51);
        z-index:20;
      } 
      .psfafterdom{
        display:none;
        position:absolute;
        box-shadow:0 0 4px #318fdd; 
        /*border:8px solid transparent;*/
        /*border-top-color:#000;*/
        border:6px solid #fff;
        left:50%;
        bottom:22px;
        transform:translate(-50%,-50%) rotate(45deg);
        z-index:10;
      }
      &:hover>.psfviewinformationbtntitle{
          display:block;
      }
      &:hover>.psfafterdom{
          display:block;
      }
    }

    .amend{
      background:#26d280;
    }
    .remove{
      background:#ff6161;
    }
    .submit{
      background:#d8a57e;
    }
    .return{
      background:#7486d0;
    }
    .appeal{
      background:#db80b2;
    }
  }
}
.ccidBy-footer{
  width: 100%;
  text-align:center;
  margin-bottom: 10px;
  button{
    width:70px;
    height: 40px;
    margin-left:40px;
    border:none;
  }
  .look{
      background:#61b4dc;
    }
}
.ccidBy-add{
 position: absolute;
 width: 100%;
 height: 500px;
 left: 10px;
 top:0px;
 border:1px solid #b3c4d4;
 background-color: #fff;
}
.fade-enter-active, .fade-leave-active {
  /* transition: opacity 0.6s; */
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  /* opacity: 0; */
}
.ccidBy-contentheader{
  width:100%;
  height:40px;
  line-height: 40px;
  text-align: center;
  font-size: 12px;
  background-color:#CAD8E3;
}
.ccidBy-checkbox{
  cursor: pointer;
}
</style>

