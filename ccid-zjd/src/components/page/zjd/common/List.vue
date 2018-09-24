<template>
    <div class="ccid-psf-tab-content">
        <div class="search-input-wrapper">
        <div class="search-input-type">
          <label>类型&nbsp;:</label> 
          <label><input type="checkbox" name="" id="">全选</label>
          <label><input type="checkbox" name="" id="">汽车</label>
          <label><input type="checkbox" name="" id="">摩托车</label>
          <label><input type="checkbox" name="" id="">挂车</label>
        </div>
        <div class="search-input-left">
          <div class="search-div">
            <label>企业名称&nbsp;:</label>
            <input type="text" placeholder="请输入企业名称" v-model="enterpriseName">
          </div>
          <div class="search-div">  		
            <label>产品型号&nbsp;:</label>
            <input type="text" placeholder="请输入产品型号" v-model="modelName">
          </div>
          <div class="search-div">  		
            <label>产品名称&nbsp;:</label>
            <input type="text" placeholder="请输入产品名称" v-model="productName">
          </div>
          <div class="search-div">
            <label>产品商标&nbsp;:</label>                   
            <input type="text" placeholder="请输入产品商标" v-model="trademarkName">
          </div>
        </div>
        <div class="search-btn-wrapper">
          <span class="glyphicon glyphicon-search"></span>
        </div>                    
        <div class="clear"></div>
      </div>
        <div class="ccid_tableNomal">
            <table>
                <thead>
                    <tr>
<<<<<<< HEAD
                        <th>
                            <label>
                                序号
                            </label>
                        </th>
=======
                        <th>序号</th>
>>>>>>> 专家端对接接口
                        <th>企业名称</th>
                        <th>目录序号</th>
                        <th>产品商标</th>
                        <th>产品型号</th>
                        <th>产品名称</th>
                        <th>产品类别</th>
                        <th>申请日期</th>
<<<<<<< HEAD
                        <th>分配日期</th>
                        <th>当前状态</th>
                        <th colspan="2">专家分配情况</th>
                        <th>操作</th>
=======
                        <th>{{typeTitle}}分配日期</th>
                        <th style="width: 180px">当前状态</th>
                        <th colspan="2">专家分配情况</th>
                        <th style="width: 150px">操作</th>
>>>>>>> 专家端对接接口
                    </tr>
                </thead>
                <tbody v-for="(item,index) of infolist" :key="index">
                    <tr> 
<<<<<<< HEAD
                      <td rowspan="3">
                        {{index+1}}
                      </td>
                      <td rowspan="3">{{item.enterpriseName}}</td>
                      <td rowspan="3">{{item.enterpriseSerialNumber}}</td>
                      <td rowspan="3">{{item.trademarkName}}</td>
                      <td rowspan="3">{{item.modelName}}</td>
                      <td rowspan="3">{{item.productName}}</td>
                      <td rowspan="3">{{item.cateName}}</td>
                      <td rowspan="3">{{item.gmtCreate}} | {{item.gmtCreate}}</td>
                      <td rowspan="3">{{item.gmtUpdate}} | {{item.gmtUpdate}}</td> 
                      <td rowspan="3"  >{{item.reiterateNum > 0 ? '重新受理审核' : '待受理审核'}}</td> 
                      <td class="tdstatus">{{item.auditType === 1 ? '初审' : ''}}</td>
                      <td class="col-sm-1">{{item.expertName}}(未审核)</td>
                      <td rowspan="3">
                        <span v-if="item.auditType === 1" @click="shenhe('0')">初审审核</span>
                        <span v-else-if="item.auditType === 2 && item.reiterateNum === 0" @click="shenhe('0')">复审审核</span>
                        <span v-else-if="item.auditType === 3 && item.reiterateNum === 0" @click="shenhe('0')">批准审核</span>
                        <span v-else-if="item.auditType === 1 && item.reiterateNum > 0" @click="shenhe('1')">重新初审审核</span>
                        <span v-else-if="item.auditType === 2" @click="shenhe('1')">重新复审审核</span>
                        <span v-else-if="item.auditType === 3 && item.reiterateNum > 0" @click="shenhe('1')">重新批准审核</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="tdstatus">{{item.auditType === 2 ? '复核' : ''}}</td>
                      <td>{{item.expertName}}(受理)</td>
                    </tr>
                    <tr>
                      <td class="tdstatus">{{item.auditType === 3 ? '批准' : ''}}</td>
                      <td>{{item.expertName}}(退回审批)</td>
                    </tr>
=======
                      <td >
                        {{index+1}}
                      </td>
                      <td >{{item.enterpriseName}}</td>
                      <td >{{item.enterpriseSerialNumber}}</td>
                      <td rowspan="2">{{item.trademarkName}}</td>
                      <td rowspan="2">{{item.modelName}}</td>
                      <td rowspan="2">{{item.productName}}</td>
                      <td rowspan="2">{{item.cateName}}</td>
                      <td rowspan="2">{{item.gmtCreate}}</td>
                      <td rowspan="2">{{item.gmtUpdate}}</td> 
                      <td rowspan="2" v-show="funType === '1'">{{item.reiterateNum > 0 && funType === '1'? '重新受理审核' : '待受理审核'}}</td>
                      <td rowspan="2" v-show="funType === '2'">{{item.reiterateNum > 0 && funType === '2'? '重新技术审核' : '待技术审核'}}</td>
                      <td rowspan="2" v-show="funType === '3'">{{item.reiterateNum > 0 && funType === '3'? '重新公示审核' : '待公示审核'}}</td>
                      <td rowspan="2" v-show="funType === '4'">{{item.reiterateNum > 0 && funType === '4'? '重新申诉审核' : '待申诉审核'}}</td>
                      <td class="tdstatus">
                        <tr class="spec" v-for="(item1,index1) of item.expertList" :key="index1">
                          <td v-show="item1.auditType==1">初审</td>
                          <td v-show="item1.auditType==2">复核</td>
                          <td v-show="item1.auditType==3">批准</td>
                        </tr>
                      </td>
                      <td style="width: 205px;">
                        <tr class="state" v-for="(item1,index1) of item.expertList" :key="index1">
                          <td style="border: none">{{item1.expertName}}</td>
                          <td v-show="item1.expertResult === '1'">(通过)</td>
                          <td v-show="item1.expertResult === '2'">(不通过)</td>
                          <td v-show="item1.expertResult === '3'">(受理)</td>
                          <td v-show="item1.expertResult === '4'">(不予受理)</td>
                          <td v-show="item1.expertResult === '5'">(及时改正)</td>
                          <td v-show="item1.expertResult === '6'">(及时修正)</td>
                          <td v-show="item1.expertResult === '7'">(同意)</td>
                          <td v-show="item1.expertResult === '8'">(不同意)</td>
                          <td v-show="item1.expertResult === '9'">(退回初审)</td>
                          <td v-show="item1.expertResult === '10'">(待定)</td>
                        </tr>
                      </td> 
                      <!-- <td class="tdstatus" v-for="(item1,index1) of item.expertList" :key="index1"></td> -->
                      <!-- <td style="width: 200px">{{item.expertName}}(未审核)</td> -->
                      <td rowspan="3">
                        <span v-if="item.auditType === 1 && item.reiterateNum === 0" @click="shenhe('0', item, '1')">初审审核</span>
                        <span v-else-if="item.auditType === 2 && item.reiterateNum === 0" @click="shenhe('0', item, '2')">复核审核</span>
                        <span v-else-if="item.auditType === 3 && item.reiterateNum === 0" @click="shenhe('0', item, '3')">批准审核</span>
                        <span v-else-if="item.auditType === 1 && item.reiterateNum > 0" @click="shenhe('1', item, '4')">重新初审审核</span>
                        <span v-else-if="item.auditType === 2 && item.reiterateNum > 0" @click="shenhe('1',item, '5')">重新复核审核</span>
                        <span v-else-if="item.auditType === 3 && item.reiterateNum > 0" @click="shenhe('1', item, '6')">重新批准审核</span>
                      </td>
                    </tr>
                    <!-- <tr>
                      <td class="tdstatus">{{shenheType}}</td>
                      <td>{{item.expertName}}(受理)</td>
                    </tr>
                    <tr>
                      <td class="tdstatus">{{shenheType}}</td>
                      <td>{{item.expertName}}(退回审批)</td>
                    </tr> -->
>>>>>>> 专家端对接接口
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// import { selectCount, distributionExpert, acceptanceAuditSearch, distributionExpertBatch, auditSpecialist } from '@api/zhangguohuaApi'
import { getProductListFromExpert } from '@api/zhangjianhuaApi';
export default {
    props:{
      // 页面类型 
      // 1.新产品 2.变更拓展 3.暂停恢复 4.整改产品 5.勘误产品
<<<<<<< HEAD
      type:String ,
=======
      type:String,
>>>>>>> 专家端对接接口
      // 功能类型 
      // 1.待受理审核 2.待技术审查 3.待公示审查 4.待申诉审查
      funType :String
    },
    data(){
        return{
<<<<<<< HEAD
          expertUuid: 5,
          //列表
          infolist:[],      
=======
          isShenhe: '',
          shenheType: '',
          typeTitle: '',
          expertUuid: 3,

          //列表
          infolist:[],
          shenheList: [],    
>>>>>>> 专家端对接接口
          enterpriseName:null,  //企业名称
          modelName:null,      //产品型号
          productName:null,    //产品名称
          trademarkName:null,  //产品商标
        }
    },
    created(){
<<<<<<< HEAD
=======
      
      if (this.funType === '1') {
        this.typeTitle = '受理';
      } else if (this.funType === '2') {
        this.typeTitle = '技术审查';
      } else if (this.funType === '3') {
        this.typeTitle = '公示审查';
      } else {
        this.typeTitle = '申诉审查';
      }
      console.log(this.typeTitle);
>>>>>>> 专家端对接接口
      let nodeId = ''
      if (this.funType == '2') {
        nodeId = 16
      } else if (this.funType == '1') {
        nodeId = 6
      } else if (this.funType == '4') {
        nodeId = 38
      } else if (this.funType == '3') {
<<<<<<< HEAD
        nodeId = 25
      }
=======
        nodeId = 26
      }

      // console.log(this.funType);
>>>>>>> 专家端对接接口
      
      let query = {
        expertUuid: this.expertUuid,
        nodeId: nodeId
      }
<<<<<<< HEAD
=======

>>>>>>> 专家端对接接口
      getProductListFromExpert(query)
        .then(res => {
          console.log(res);
          this.infolist = res.data.data;
          console.log(this.infolist);

        });
    },
    mounted(){
       console.log('this.type=='+this.type)
       console.log('this.funType=='+this.funType)
    },
    methods:{ 
<<<<<<< HEAD
      shenhe (state) {
=======
      shenhe (state, item, numState) {
>>>>>>> 专家端对接接口
        this.$router.push({
           path:"/Home/dslsh/viewchangeproductinfo",
           query: {
            state: state,
<<<<<<< HEAD
=======
            numState: numState,
            itemList: JSON.stringify(item),
>>>>>>> 专家端对接接口
            type: this.type,
            funType:this.funType
          }
        });
<<<<<<< HEAD
=======
       
>>>>>>> 专家端对接接口
      }
    }
}
</script>
<style lang="sass" scoped>
<<<<<<< HEAD
=======
tr.state {
  width: 100%;
  // border-bottom: 1px solid #e5e5e5;
}
tr.state td {
  border: none;
}
//  tr.zhuanjia td {
//    width: 150px!important;
//    border: none;
//    border-bottom: 1px solid #e5e5e5!important;
//  }
  tr.spec {
    border: 0px solid #000!important;
    background-color: #e5e5e5;
  }
  tr.spec td {
    border: 0px solid #000!important;
    background-color: #e5e5e5;
  }
>>>>>>> 专家端对接接口
 .ccid_tableNomal span{
  display:block;
  margin:20px 0;
}
<<<<<<< HEAD
.tdstatus{
  background:#e5e5e5;
=======
.ccid_tableNomal th {
  width: 100px;
  height: 35px;
  vertical-align: middle;
}
.tdstatus{
  background:#e5e5e5; 
  width: 80px;
>>>>>>> 专家端对接接口
}
</style>
