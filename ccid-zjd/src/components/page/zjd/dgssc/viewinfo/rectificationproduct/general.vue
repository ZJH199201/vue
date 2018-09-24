<template>
    <div class="psfchangeexpansionnewonecontentli">
        <!-- generalgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneral -->
        <div class="psfchangeexpansionnewonecontentlictc">
            <p class="psfcontenttitle">产品基本情况</p>
            <table class="psfcontentgeneral table table-bordered">
                <tbody>
                    <tr>
                        <td class="psfcontentgeneralkey">产品型号</td>
                        <td>{{checkdata.productModel}}</td>
                    </tr>
                    <tr>
                        <td class="psfcontentgeneralkey">产品名称</td>
                        <td>{{checkdata.name}}</td>
                    </tr>
                    <tr>
                        <td class="psfcontentgeneralkey">产品商标</td>
                        <td>{{checkdata.trademark}}</td>
                    </tr>
                    <tr>
                        <td class="psfcontentgeneralkey">产品类别</td>
                        <td>XXXXXXX</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="psfchangeexpansionnewonecontentlictc psfchangeexpansionnewonecontentlictc2">
            <p class="psfcontenttitle">变更扩展信息</p>
            <table class="psfcontentgeneral table table-bordered">
                <tbody>
                    <tr>
                        <td class="psfcontentgeneralkey">变更类别</td>
                        <td>变更/扩展</td>
                    </tr>
                    <tr>
                        <td class="psfcontentgeneralkey">申报原因</td>
                        <td>
                            <input type="text" placeholder="请输入申报原因">{{checkdata.id}}暂无
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="psfcheckboxbox" v-bind:class="{psfcheckboxboxbottom:!psfchangeexpansionnewonecheckipt}">
            <label><input v-model="psfchangeexpansionnewonecheckipt" type="checkbox"> 变更扩展车型及试验项目并需要出具强检统计表</label>
        </div>
        <div v-if="psfchangeexpansionnewonecheckipt" class="psfchangeexpansionnewonecontentlictc">
            <table class="psfcontentjigou table table-bordered">
                <tbody>
                    <tr>
                        <td class="psfcontentgeneralkey">强检机构</td>
                        <td>
                            {{checkdata.testingOrgId}}
                            <select name="psfcontentqjjigou" id="psfcontentqjjigou">
                                <option value="国家轿车质量监督检测中心">国家轿车质量监督检测中心</option>
                                <option value="国家轿车质量监督检测中心">国家轿车质量监督检测中心</option>
                                <option value="国家轿车质量监督检测中心">国家轿车质量监督检测中心</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="psfcontentgeneralkey">定型机构</td>
                        <td>
                            {{checkdata.shapingOrgId}}
                            <select name="psfcontentdxjigou" id="psfcontentdxjigou">
                                <option value="国家轿车质量监督检测中心">国家轿车质量监督检测中心</option>
                                <option value="国家轿车质量监督检测中心">国家轿车质量监督检测中心</option>
                                <option value="国家轿车质量监督检测中心">国家轿车质量监督检测中心</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- <div class="psfgeneralsubmitbtnbox">
            <div class="psfgeneralsubmitbtn">
                保存
            </div>
        </div> -->
        <div class="ccid-psf-btnbox">
            <div class="ccid-psf-btn">保存并下一步</div>
            <div class="ccid-psf-btn ccid-psf-btncancel">取消</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Changeexpansionnewonegeneral",
        data(){
            return{
               
            }
        },
        methods:{
           
        },
        mounted() {
        },
        created() {
            this.getdata()
        },
    }
</script>

<style lang="sass" scoped>
    $tablebtncolor:#318fdd;
    $tablebtnyellowcolor:#d8a57e;
    .psfchangeexpansionnewonecontentli{
        .psfchangeexpansionnewonecontentlictc{
            // width: 80%;
            margin: 0 auto;
        }
        .psfchangeexpansionnewonecontentlictc2{
            margin-top:30px;
        }
        .psfcheckboxbox{
            // width: 80%;
            height:47px;
            // line-height:47px;
            // text-align:center;
            margin: 0 auto;
            box-sizing: border-box;
            border-right:1px solid #c3d5e5;
            border-left:1px solid #c3d5e5;
            label{
                height:47px;
                line-height:47px;
                float:left;
                margin-left:190px;
                color:rgb(102, 102, 102);
                font-size:14px;
                margin-bottom:0;
            }
        }
        .psfcheckboxboxbottom{
            border-bottom:1px solid #c3d5e5;
        }
        .psfcontenttitle{
            border-left:5px solid #318fdd;
            padding-left:8px;
            margin-bottom:23px;
            height:23px;
            line-height:23px;
            color:#47627A;
            font-size:16px;
        }
        .table{
            margin-bottom:0;
        }
        table{
            border: 1px solid #c3d5e5;
            width:100%;
            tr{
                height:48px;
                td{
                    height:48px;
                    vertical-align: middle;
                    
                }
                .psfcontentgeneralkey{
                    background: #edf2f8;
                    color: #666666;
                    font-weight: bold;
                    text-align: left;
                    border: 1px solid #c3d5e5;
                    width:190px;
                }
            }
        }
        .psfgeneralsubmitbtnbox{
            padding:33px 0;
            .psfgeneralsubmitbtn{
                width:150px;
                height:36px;
                line-height:36px;
                color:#fff;
                background:rgb(49, 143, 221);
                text-align:center;
                margin:0 auto;
                border-radius:5px;
                cursor:pointer;
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