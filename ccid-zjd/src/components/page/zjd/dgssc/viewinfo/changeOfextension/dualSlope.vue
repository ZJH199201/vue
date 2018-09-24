<template>
    <div class="ccid-psf-dp-parameter">
        <!-- <P>ChangeexpansionnewonedualSlopeChangeexpansionnewonedualSlope</P> -->
        <div class="psf-new-btnbox">
            <div class="psf-new-btn">
                新增配置
            </div>
        </div>
        <!-- <div class="content-tabbox clearfix">
            <div class="tab" :class="{active:tabselect==1}" @click="tabselect=1">底盘数据</div>
            <div class="tab" :class="{active:tabselect==2}" @click="tabselect=2">发动机数据</div>
        </div> -->
        <div class="tablebox">
            <!-- <table class="table table-bordered table-hover tablesjf"> -->
            <table class="ccid_tableNomal tablesjf">
                <thead>
                    <tr>
                        <th rowspan="2">序号</th>
                        <th rowspan="2">车辆基本信息</th>
                        <th colspan="2">配置ID：NC001</th>
                        <th colspan="2" class="psf-add-thwidth">配置ID：NC002</th>
                    </tr>
                    <tr>
                        <th colspan="2">
                            <span class="psf-table-clonebtn">复制</span>
                        </th>
                        <th colspan="2">
                            <span class="psf-table-clonebtn">复制</span>
                            <span class="psf-table-deletebtn">删除</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>车辆型号</td>
                        <td colspan="2">1</td>
                        <td colspan="2">1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>燃料类型</td>
                        <td colspan="2">2</td>
                        <td colspan="2">2</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>整备质量</td>
                        <td colspan="2">3</td>
                        <td colspan="2">3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>座椅排数</td>
                        <td colspan="2">4</td>
                        <td colspan="2">4</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>变速器型式</td>
                        <td colspan="2">5</td>
                        <td colspan="2">5</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>车型燃料消耗量（天然气车型填写折算后的油耗值）</td>
                        <td colspan="2">6</td>
                        <td colspan="2">6</td>
                    </tr>
                </tbody>
            </table>
            <div style="clear:both;"></div>
            <div class="tabletips">
                <p>说明：</p>
                <ul>
                    <li>1、发动机、储能装置、电机等主要部件存在选装的车辆需按单一配置分别填报。</li>
                    <li>2、申报变更扩展时不允许删除原有配置ID。</li>
                    <li>3、主需要填写值即可，不用带单位，并注意空格。</li>
                    <!-- <li>按照标准要求“不适用项目”应在“申请检验类别”栏中填“■”，</li> -->
                    <!-- <li>按照标准要求“适用项目”应在“申请检验类别”栏中按以下规定填写：实测填“△”、同一型式（或视同）填“○”、豁免填“★”、 无影响填“ ● ”。</li> -->
                </ul>
            </div>
            <div style="clear:both;"></div>
        </div>
        <div class="ccid-psf-btnbox">
            <div class="ccid-psf-btn">上一步</div>
            <div class="ccid-psf-btn">保存并下一步</div>
            <div class="ccid-psf-btn ccid-psf-btncancel">取消</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChangeexpansionnewonedualSlope",
        data(){
            return{
                tabselect:1,
            }
        },
        methods:{
            
        },
        mounted() {
            
        },
    }
</script>

<style lang="sass" scoped>
    $tablebtncolor:#318fdd;
    $tablebtnyellowcolor:#d8a57e;
    label{
        margin:0;
    }
    input[type="checkbox"]{
        margin:0;
    }
    .ccid-psf-dp-parameter{
        &>*{
            // width: 80%;
            margin: 0 auto;
            min-width: 1010px;
        }
        .content-tabbox{
            
            // border:1px solid $tablebtncolor;
            margin:0 auto 15px;
            .tab{
                float:left;
                cursor:pointer;
                line-height:40px;
                width:50%;
                text-align:center;
                font-weight:bold;
                border:1px solid $tablebtncolor;
            }
            .tab.active{
                background:$tablebtncolor;
                color:#fff;
            }
        }
        .table{
            margin:10px auto 0;
            caption{
                border:2px solid rgb(221,221,221);
                border-collapse:collapse;
                border-bottom:none;
                background:$tablebtncolor;
                color:#fff;
                font-weight:bold;
                text-align:center;
            }
            th{
                background: $tablebtncolor;
                color: white;
                text-align: center;
                padding: 10px 5px;
                font-weight: bold;
                vertical-align:middle;
            }
            td{
                text-align: center;
                vertical-align:middle;
                a{
                    color:inherit;
                }
                label{
                    font-weight:normal;
                    color:rgb(0, 102, 204);
                    input[type="file"]{
                        display:none;
                    }
                }
                img{
                    max-width:94px;
                    max-height:73px;
                    width:auto;
                    height:auto;
                }

                // 自定义提示
                .psfinline{display:inline-block}
                .psfviewinformationbtn{
                    text-align:center;
                    position:relative;
                    width:24px;
                    height:24px;
                    border-radius:50%;
                    background:#318fdd;
                    color:#fff;
                    line-height:24px;
                    cursor:pointer;
                    .psfviewinformationbtntitle{
                            position:absolute;
                            left:50%;
                            bottom:35px;
                            display:none;
                            min-width:107px;
                            height:22px;
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
            .look{
                background:#61b4dc;
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
        
        .psf-new-btnbox{
            margin-bottom:10px;
            .psf-new-btn{
                padding:8px 15px;
                background:$tablebtncolor;
                border-radius:5px;
                color:#fff;
                cursor:pointer;
                width:130px;
                text-align:center;
            }
        }
        
        .tablesjf{
            width:auto;
            float:left;
            .psf-table-clonebtn,.psf-table-deletebtn{
                cursor:pointer;
                text-decoration:underline;
            }
            .psf-table-deletebtn{
                margin-left:5px;
            }
            thead{
                tr:nth-child(1){
                    th:nth-child(1){
                        width:70px;
                    }
                    th:nth-child(2){
                        width:140px;
                    }
                    th:nth-child(3){
                        width:70px;
                    }
                    th.psf-add-thwidth{
                        width:70px;
                    }
                }
            }
        }
    }
    .tabletips{
        float:left;
        margin-top:25px;
        padding-left:5px;
        &>*{
            float:left;
        }
    }
    
</style>