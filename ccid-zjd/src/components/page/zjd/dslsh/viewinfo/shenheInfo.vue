<template>
    <div class="shenhe-content">
         <table class="table-add mt30" v-if="funType === '4'">
            <tr class="one">
                <td  @click="toast" class="shensu" :class="{
                    change: this.isChange
                }">申诉内容</td>
                <td  @click="changetab" class="history" :class="{
                    cur: this.isCur
                }">历史审核信息</td>
            </tr>
         </table>
         <table class="table-add" v-if="funType === '4'">
            <tr class="three shen-content" v-show="isActive">
                <th style="height: 123px; text-align: right">产品申诉内容：</th>
                <td  colspan="3"></td>
            </tr>
            <tr class="three" v-show="isShow">
                <th>初审审核结论</th>
                <td style="color: red; text-align: left">不通过</td>
                <th>初审审核时间</th>
                <td>2018-08-05 12:00:00</td>
                <th>初审审核意见</th>
                <td >显示初审专家意见</td>
            </tr>
            <tr class="three" v-show="isShow">
                <th>复审审核结论</th>
                <td style="color: red; text-align: left">同意初审意见</td>
                <th>复审审核时间</th>
                <td>2018-08-05 12:00:00</td>
                <th>复审审核意见</th>
                <td >显示复核专家意见</td>
            </tr>
            <tr class="three" v-show="isShow">
                <th>批准审核结论</th>
                <td style="color: red; text-align: left">同意</td>
                <th>批准审核时间</th>
                <td>2018-08-05 12:00:00</td>
                <th>批准审核意见</th>
                <td >显示批准专家意见</td>
            </tr> 
      </table>
<<<<<<< HEAD
        <table class="table-add mt30" v-if="funType === '3'">
=======
      <table class="table-add mt30" v-if="funType === '3'">
>>>>>>> 专家端对接接口
            <tr class="one">
                <td colspan="6">举报信息</td>
            </tr>
            <tr class="three">
                <th style="text-align: right">产品举报信息：</th>
                <td colspan="5">
<<<<<<< HEAD
                    <textarea style="width: 100%;height: 100px;border: none; outline: none" placeholder="不通过时必须填写审核意见，如果没填写，提交时给予提示" ></textarea>
=======
                    <textarea style="width: 100%;height: 100px;border: none; outline: none"></textarea>
>>>>>>> 专家端对接接口
                </td>
            </tr>   
      </table>
      <table class="table-add" v-if="state > 0">
            <tr class="one">
                <td colspan="6">历史审核信息</td>
            </tr>
<<<<<<< HEAD
=======
            <tr class="three" v-for="(item, index) in this.shenheDataHis" :key="index">
                <th v-show="index === 0">{{index === 0 ? '初审' : ''}}审核结论</th>
                <th v-show="index === 1">{{index === 1 ? '复核' : ''}}审核结论</th>
                <th v-show="index === 2">{{index === 2 ? '批准' : ''}}审核结论</th>
                <td v-if="item.expertResult === '1'">通过</td>
                <td v-else-if="item.expertResult === '2'">不通过</td>
                <td v-else-if="item.expertResult === '3'">受理</td>
                <td v-else-if="item.expertResult === '4'">不予受理</td>
                <td v-else-if="item.expertResult === '5'">及时改正</td>
                <td v-else-if="item.expertResult === '6'">及时修正</td>
                <td v-else-if="item.expertResult === '7'">同意</td>
                <td v-else-if="item.expertResult === '8'">不同意</td>
                <td v-else-if="item.expertResult === '9'">退回初审</td>
                <td v-else-if="item.expertResult === '10'">待定</td>
                <td v-else></td>
                <th v-show="index === 0">{{index === 0 ? '初审' : ''}}审核时间</th>
                <th v-show="index === 1">{{index === 1 ? '复核' : ''}}审核时间</th>
                <th v-show="index === 2">{{index === 2 ? '批准' : ''}}审核时间</th>
                <td>{{item.gmtAudit}}</td>
                <th v-show="index === 0">{{index === 0 ? '初审' : ''}}审核意见</th>
                <th v-show="index === 1">{{index === 1 ? '复核' : ''}}审核意见</th>
                <th v-show="index === 2">{{index === 2 ? '批准' : ''}}审核意见</th>
                <td >{{item.auditOpinion}}</td>
            </tr>
      </table>
      <!-- <table class="table-add" v-if="state > 0">
            <tr class="one">
                <td colspan="6">历史审核信息</td>
            </tr>
>>>>>>> 专家端对接接口
            <tr class="three">
                <th>初审审核结论</th>
                <td style="color: red; text-align: left">受理</td>
                <th>初审审核时间</th>
                <td>2018-08-05 12:00:00</td>
                <th>初审审核意见</th>
                <td >显示初审专家意见</td>
            </tr>
            <tr class="three">
                <th>复审审核结论</th>
                <td style="color: red; text-align: left">不予受理</td>
                <th>复审审核时间</th>
                <td>2018-08-05 12:00:00</td>
                <th>复审审核意见</th>
                <td >显示复核专家意见</td>
            </tr>
            <tr class="three">
                <th>批准审核结论</th>
                <td style="color: red; text-align: left">退回初审</td>
                <th>批准审核时间</th>
                <td>2018-08-05 12:00:00</td>
                <th>批准审核意见</th>
                <td >显示批准专家意见</td>
            </tr> 
<<<<<<< HEAD
      </table>
=======
      </table> -->
>>>>>>> 专家端对接接口
        <table class="table-add">
            <tr class="one">
                <td colspan="6">审核信息</td>
            </tr>
<<<<<<< HEAD
            <tr class="three">
                <th>初审审核结论</th>
                <td>123</td>
                <th>初审审核时间</th>
                <td>123</td>
                <th>初审审核意见</th>
                <td >123</td>
            </tr>
            <tr class="three">
                <th>复审审核结论</th>
                <td>123</td>
                <th>复审审核时间</th>
                <td>123</td>
                <th>复审审核意见</th>
                <td >123</td>
            </tr>
            <tr class="three">
                <th>批准审核结论</th>
                <td>123</td>
                <th>批准审核时间</th>
                <td>123</td>
                <th>批准审核意见</th>
                <td >123</td>
            </tr> 
=======
            <tr class="three" v-for="(item, index) in this.shenheData" :key="index">
                <th v-show="index === 0">{{index === 0 ? '初审' : ''}}审核结论</th>
                <th v-show="index === 1">{{index === 1 ? '复核' : ''}}审核结论</th>
                <th v-show="index === 2">{{index === 2 ? '批准' : ''}}审核结论</th>
                <td v-if="item.expertResult === '1'">通过</td>
                <td v-else-if="item.expertResult === '2'">不通过</td>
                <td v-else-if="item.expertResult === '3'">受理</td>
                <td v-else-if="item.expertResult === '4'">不予受理</td>
                <td v-else-if="item.expertResult === '5'">及时改正</td>
                <td v-else-if="item.expertResult === '6'">及时修正</td>
                <td v-else-if="item.expertResult === '7'">同意</td>
                <td v-else-if="item.expertResult === '8'">不同意</td>
                <td v-else-if="item.expertResult === '9'">退回初审</td>
                <td v-else-if="item.expertResult === '10'">待定</td>
                <td v-else></td>
                <th v-show="index === 0">{{index === 0 ? '初审' : ''}}审核时间</th>
                <th v-show="index === 1">{{index === 1 ? '复核' : ''}}审核时间</th>
                <th v-show="index === 2">{{index === 2 ? '批准' : ''}}审核时间</th>
                <td>{{item.gmtAudit}}</td>
                <th v-show="index === 0">{{index === 0 ? '初审' : ''}}审核意见</th>
                <th v-show="index === 1">{{index === 1 ? '复核' : ''}}审核意见</th>
                <th v-show="index === 2">{{index === 2 ? '批准' : ''}}审核意见</th>
                <td >{{item.auditOpinion}}</td>
            </tr>
>>>>>>> 专家端对接接口
      </table>
      <table class="table-add mt30" v-if="funType === '1'">
            <tr class="three">
                <th>{{typeName}}审核结论</th>
                <td colspan="5" class="left">
<<<<<<< HEAD
                     <label><input type="radio" name="radio">受理</label>
                     <label><input type="radio" name="radio">不予受理</label>
                     <label><input type="radio" name="radio">及时改正</label>
                     <label><input type="radio" name="radio">及时修正</label>
=======
                     <label><input type="radio" name="radio" value="3" v-model="value">受理</label>
                     <label><input type="radio" name="radio" value="4" v-model="value">不予受理</label>
                     <label><input type="radio" name="radio" value="5" v-model="value">及时改正</label>
                     <label><input type="radio" name="radio" value="6" v-model="value">及时修正</label>
                     <label v-if="numState === '3' || numState === '6'"><input type="radio" name="radio" v-model="value">退回初审</label>
>>>>>>> 专家端对接接口
                </td>
            </tr>   
            <tr class="three">
                <th>{{typeName}}审核意见</th>
                <td colspan="5">
                    <textarea v-model="shenheinfo" style="width: 100%;height: 100px;border: none; outline: none" placeholder="请输入审核意见" ></textarea>
<<<<<<< HEAD
                </td>
            </tr>   
      </table>
      <table class="table-shenhe mt30" v-if="funType === '2'">
          <tr>
              <th>{{typeName}}审核结论</th>
              <td colspan="3">
                  <label><input type="radio" name="radio">通过</label>
                  <label><input type="radio" name="radio">不通过</label>
=======
                    <div v-if="isHide">请填写审核意见</div>
                </td>
            </tr>   
      </table>
      <!-- <table class="table-shenhe mt30" v-if="funType === '2'">
          <tr>
              <th>{{typeName}}审核结论</th>
              <td colspan="3">
                  <label><input type="radio" name="radio" value="1" v-model="value">通过</label>
                  <label><input type="radio" name="radio" value="2" v-model="value">不通过</label>
>>>>>>> 专家端对接接口
              </td>
          </tr>
          <tr>
              <th>1、备案参数是否齐全（照片图纸）：</th>
              <td>
<<<<<<< HEAD
                  <label><input type="radio" name="radio">通过</label>
                  <label><input type="radio" name="radio">不通过</label>
=======
                  <label><input type="radio" name="radio" >通过</label>
                  <label><input type="radio" name="radio" >不通过</label>
>>>>>>> 专家端对接接口
                  <label><input type="radio" name="radio">待定</label>
              </td>
              <td rowspan="3" class="firsttrial">初审审核意见：</td>
              <td rowspan="3" class="textarea">
<<<<<<< HEAD
                  <textarea placeholder="不通过时必须填写审核意见，如果没填写，提交时给予提示" style="border: none; outline: none"></textarea>
=======
                  <textarea v-model="shenheinfo"  style="border: none; outline: none"></textarea>
                  <div v-if="isHide">请填写审核意见</div>
>>>>>>> 专家端对接接口
              </td>
          </tr>
          <tr>
              <th>2、备案参数是否与报告一致：</th>
              <td>
<<<<<<< HEAD
                  <label><input type="radio" name="radio">通过</label>
                  <label><input type="radio" name="radio">不通过</label>
=======
                  <label><input type="radio" name="radio" >通过</label>
                  <label><input type="radio" name="radio" >不通过</label>
>>>>>>> 专家端对接接口
                  <label><input type="radio" name="radio">待定</label>
              </td>
          </tr>
          <tr>
              <th>3、强检统计表是否符合要求：</th>
              <td>
                  <label><input type="radio" name="radio">通过</label>
                  <label><input type="radio" name="radio">不通过</label>
                  <label><input type="radio" name="radio">待定</label>
              </td>
          </tr>
          <tr>
              <th>4、试验报告是否齐全、符合要求：</th>
              <td>
                  <label><input type="radio" name="radio">通过</label>
                  <label><input type="radio" name="radio">不通过</label>
                  <label><input type="radio" name="radio">待定</label>
              </td>
              <td rowspan="3" class="firsttrial">VIN审查意见：</td>
              <td rowspan="3" class="textarea">
                  <textarea  placeholder="填写VIN审查意见" style="border: none; outline: none"></textarea>
              </td>
          </tr>
          <tr>
              <th>5、产品是否科学合理：</th>
              <td>
                  <label><input type="radio" name="radio">通过</label>
                  <label><input type="radio" name="radio">不通过</label>
                  <label><input type="radio" name="radio">待定</label>
              </td> 
          </tr>
          <tr>
              <th>6、轻型车油耗审查：</th>
              <td>
                  <span style="color: red">不需审</span>
              </td> 
          </tr>
          <tr>
              <th>7、其他：</th>
              <td>
                  <label><input type="radio" name="radio">通过</label>
                  <label><input type="radio" name="radio">不通过</label>
                  <label><input type="radio" name="radio">待定</label>
              </td>
              <td rowspan="3" class="firsttrial">不合格报告：</td>
              <td rowspan="3" class="textarea">
                  <textarea row="10" cols="30" placeholder="填写不合格报告" style="border: none; outline: none"></textarea>
              </td>
          </tr>
          <tr>
              <th>8、VIN审查：</th>
              <td>
                  <label><input type="radio" name="radio">通过</label>
                  <label><input type="radio" name="radio">不通过</label>
              </td> 
          </tr>
          <tr>
              <th>9、产品1590标准</th>
              <td>
                  <label><input type="radio" name="radio">超限</label>
                  <label><input type="radio" name="radio">不超限</label>
              </td> 
          </tr>
<<<<<<< HEAD
      </table>
      <table class="table-add mt30" v-if="funType === '3' || funType === '4'">
            <tr class="three">
                <th>{{typeName}}审核结论</th>
                <td colspan="5" class="left">
                     <label style="margin-right: 40px; padding-left: 50px;"><input type="radio" name="radio" style="margin-right: 5px; position: relative; top: 2px;">通过</label>
                     <label><input type="radio" name="radio" style="margin-right: 5px; position: relative; top: 2px;">不通过</label>
=======
      </table> -->
      <table class="table-add mt30" v-if="funType === '3' || funType === '4' || funType === '2'">
            <tr class="three">
                <th>{{typeName}}审核结论</th>
                <td colspan="5" class="left">
                     <label v-show="isPass" style="margin-right: 40px; padding-left: 50px;"><input type="radio" name="radio" style="margin-right: 5px; position: relative; top: 2px;" value="1" v-model="value">{{checkoption}}</label>
                     <label v-show="isPass"><input type="radio" name="radio" style="margin-right: 5px; position: relative; top: 2px;" value="2" v-model="value">不{{checkoption}}</label>
                     <label v-show="isPass1" style="margin-right: 40px; padding-left: 50px;"><input type="radio" name="radio" style="margin-right: 5px; position: relative; top: 2px;" value="7" v-model="value">{{checkoption}}</label>
                     <label v-show="isPass1"><input type="radio" name="radio" style="margin-right: 5px; position: relative; top: 2px;" value="8" v-model="value">不{{checkoption}}</label>
>>>>>>> 专家端对接接口
                </td>
            </tr>   
            <tr class="three">
                <th>{{typeName}}审核意见</th>
                <td colspan="5">
<<<<<<< HEAD
                    <textarea v-model="shenheinfo" style="width: 100%;height: 100px;border: none; outline: none" placeholder="不通过时必须填写审核意见，如果没填写，提交时给予提示" ></textarea>
=======
                    <textarea v-model="shenheinfo" style="width: 100%;height: 100px;border: none; outline: none"></textarea>
                    <div v-if="isHide">请填写审核意见</div>
>>>>>>> 专家端对接接口
                </td>
            </tr>   
      </table>

      <div class="ccid-psf-btnbox">
        <div class="ccid-psf-btn" @click="submission">提交审核</div>
        <div class="ccid-psf-btn ccid-psf-btncancel">取消</div>
      </div>
<<<<<<< HEAD
=======
       <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>审核成功</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
>>>>>>> 专家端对接接口
    </div>
</template>

<script>
 import {commitExpertAudit, getExpertAuditInfo, getExpertAuditInfoHis} from '@api/zhangjianhuaApi';
export default {
  data() {
    return {
<<<<<<< HEAD
        typeName:'初审',
=======
        dialogVisible: false,
        isPass: false,
        isPass1: false,
        value2: '',
        value1: '',
        checkoption: '',
        checkText: '',
        value: '',
        isHide: false,
        typeName:'',
>>>>>>> 专家端对接接口
        isShow: false,
        isActive: true,
        isCur: false,
        isChange: false,
        shenheinfo: '',
<<<<<<< HEAD
        flowUuid: 3,
        // 审核详情
        shenheData: [],
        // 历史审核详情
        shenheDataHis: []
=======
        // 审核详情
        shenheData: [],
        // 历史审核详情
        shenheDataHis: [],

        productList: {}

>>>>>>> 专家端对接接口
    };
  },
  props:{
    // 页面类型 
    // 1.新产品 2.变更拓展 3.暂停恢复 4.整改产品 5.勘误产品
    type:String,
    // 功能类型 
    // 1.待受理审核 2.待技术审查 3.待公示审查 4.待申诉审查
    funType:String,
    // 审核类型 
    // 1.初审审核 2.复审审核 3.批准审核 4.重新初审审核 5.重新复审审核 6.重新批准审核
<<<<<<< HEAD
    state:String
  },
  methods: {
=======
    state:String,

    numState: String,

    //产品列表数据
    itemList: String,
    // nodeId:Number
  },
  methods: {
    //   test() {
    //       console.log(this.value);
    //   },
>>>>>>> 专家端对接接口
      changetab() {
          this.isShow = true;
          this.isActive = false;
          this.isCur = true;
          this.isChange = true; 
      },
<<<<<<< HEAD
      submission() {
          let query = {
            msg: this.shenheinfo
        }
          commitExpertAudit(auditOpinion)
            .then(res => {
                console.log(res);
                this.shenheinfo = '';
=======
        // 提交审核意见接口
      submission() {
          this.value = parseInt(this.value);
          console.log(this.value);
          if (this.shenheinfo === '' && this.value === 4 ) {
              this.isHide = true;
          } else if (this.shenheinfo === '' && this.value === 5) {
              this.isHide = true;
          } else if (this.shenheinfo === '' && this.value === 6) {
              this.isHide = true;
          } else if (this.shenheinfo === '' && this.value === 8) {
              this.isHide = true;
          } else if (this.shenheinfo === '' && this.value === 2) {
              this.isHide = true;
          }
          else {
              this.isHide = false;
          }

          this.shenheinfo = '';
          
          
          let query = {
              reiterateNum: this.productList.reiterateNum,
              expertResult: this.value,
              auditOpinion: this.auditOpinion,
              flowUuid: this.productList.flowUuid,
              uuid: this.productList.uuid,
              nodeId: this.productList.nodeId,
              expertUuid: this.productList.expertUuid,
              auditType: this.productList.auditType
        }
          commitExpertAudit(query)
            .then(res => {
                console.log(res);
                if (res.data.status === '0') {
                    this.dialogVisible = true;
                } else 
                    this.dialogVisible = false;


>>>>>>> 专家端对接接口
            }) 

          
      },
      
      toast() {
          this.isActive = true;
          this.isShow = false;
          this.isCur = false;
          this.isChange = false;

      }
  },
  mounted(){
    console.log('审核页面的this.type=='+this.type)
    console.log('审核页面的this.funType=='+this.funType)
    console.log('审核页面的this.state=='+this.state)
<<<<<<< HEAD
    // console.log(this.shenheinfo);
   },
  created() {
      let nodeId = ''
      if (this.funType == '2') {
        nodeId = 16
      } else if (this.funType == '1') {
        nodeId = 6
      } else if (this.funType == '4') {
        nodeId = 38
      }
      
      let query = {
        flowUuid: this.flowUuid,
        nodeId: nodeId
      }
      if (this.state === '0') {
          getExpertAuditInfo(query)
        .then(res => {
            console.log(res);
        })
      }

      getExpertAuditInfoHis(query)
        .then(res => {
            console.log(res);
        })
=======
    // console.log(JSON.parse(this.itemList));
    // console.log(this.productList);
    // console.log(this.numState);
    console.log(this.value);
   },
  created() {
      if (this.numState === '1' || this.numState === '4') {
          this.typeName = '初审';
          this.checkoption = '通过';
          this.isPass = true;
          this.isPass1 = false;
      } else if (this.numState === '2' || this.numState === '5') {
          this.typeName = '复核';
          this.checkoption = '同意';
          this.isPass1 = true;
          this.isPass = false;

      } else if (this.numState === '3' || this.numState === '6') {
          this.typeName = '批准';
          this.checkoption = '同意';
          this.isPass1 = true;
          this.isPass = false;
      }


      this.productList = JSON.parse(this.itemList);
    //   let nodeId = 0;
    //   if (this.funType == '2') {
    //     nodeId = 16;
    //   } else if (this.funType == '1') {
    //     nodeId = 6;
    //   } else if (this.funType == '4') {
    //     nodeId = 38;
    //   } else if (this.funType == '3') {
    //     nodeId = 25;
    //   }
      
      let query = {
        flowUuid: this.productList.flowUuid,
        nodeId: this.productList.nodeId,
        reiterateNum: this.productList.reiterateNum
      }
    //   console.log(nodeId);
      if (this.state === '0') {
          getExpertAuditInfo(query)
            .then(res => {
                console.log(res);
                this.shenheData = res.data.data;
                console.log(this.shenheData);
            })
      } else {
          getExpertAuditInfoHis(query)
            .then(res => {
                console.log(res);
                this.shenheDataHis = res.data.data;
            })
      }

      
>>>>>>> 专家端对接接口
      
  }
};
</script>

<style lang="sass" scoped>
    $tablebtncolor:#318fdd;
    .shenhe-content{
        margin-top:30px;

        .mt30 {
            margin-top : 30px
        }
        .table-add {
            width: 100%;
           
        }
        .table-add .left {
            text-align:left!important;
        }
        .table-add th {
            height: 40px;
            line-height: 40px;
            width: 170px;
            font-size: 14px;
            padding-left:5px;
            border: 1px solid #b3c4d4;
            color: #333; 
            background: #E6ECF2;
        }

        .table-add td {
            max-width: 170px;
            height: 40px;
            line-height: 40px;
            width: 170px;
            font-size: 14px;
            padding-left:5px;
            border: 1px solid #b3c4d4;
            color: #666;  
        }
        .table-add td label {
            margin: 0 10px;
        }
        .table-add td input[type=radio] {
            width: 14px;
            height: 14px;
            line-height: 40px;
            margin-right: 5px;
            position: relative;
            top: 2px;
        }
        
        .table-add .one td{
            background: #199ED8; 
            color: #fff;
            font-weight: bold;
            font-size: 16px;
            text-align: center;
            cursor: pointer;
           
        }
        .table-add .one td.history {
            background: #fff;
            color: #000;
            &:hover {
                // background: #199ED8; 
                // color: #fff;
            }
        }
        .table-add .one td.cur {
            background: #199ED8;
            color: #fff;

        }
        .table-add .one td.shensu {
             width: 50%;
        }
        .table-add .one td.change {
            background: #fff;
            color: #000;
        }
        .table-add .three td{
            color: #333;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
        }
        .table-add th {
            width: 12%;
        }
        .table-shenhe {
            width: 100%;
            border: 1px solid #b3c4d4;
            color: #333; 
            th {
                height: 40px;
                line-height: 40px;
                width: 250px;
                font-size: 14px;
                padding-left:5px;
                border: 1px solid #b3c4d4;
                color: #333; 
                background: #E6ECF2;
            }
            td {
                text-align: left;
                padding-left: 10px;
                label {
                    margin: 0 10px;
                    input {
                        margin-right: 5px;
                        position: relative;
                        top: 2px;
                    }
                }
                textarea {
                    width: 100%;
                    height: 120px;
                }
            }
            td.textarea {
                padding-left: 3px;
            }
           
            .firsttrial {
                background: #E6ECF2;
                text-align: right;
                
            }
        }
        .ccid-psf-btnbox{
            text-align:center;
            margin:45px auto 0;
            &>*{
                display:inline-block;
                margin-right:10px;
                padding:8px 15px;
                background:$tablebtncolor;
                border-radius:5px;
                color:#fff;
                cursor:pointer;
                min-width:145px;
            }
            .ccid-psf-btncancel{
                background:rgb(153, 153, 153);
                margin-right:0;
            }
        }
     }
     
</style>