<template>
    <div class="ccid-psf-dp-parameter">
        <div class="tablebox">
            <table class="ccid_tableNomal ccid_thirdTable table1">
                <caption>选装部件申请清单</caption>
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>项目名称</th>
                        <th>缩略图（文件格式只能为：jpg格式！）</th>
                        <th>说明</th>
                        <th>填报说明</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>选装不见11</td>
                        <td>
                            <label for="ccid-psf-parameterimg1">
                                <!-- <span>上传照片</span> -->
                                <!-- <img src="../../../../../static/images/changeexpansion-searchbtn.png" alt=""> -->
                                <input type="file" name="" id="ccid-psf-parameterimg1">
                            </label>
                        </td>
                        <td><input type="text" value="显示原值，编辑状态，直接在原值的基础上修改"></td>
                        <td><router-link to="javascript:void(0);">查看</router-link></td>
                        <td><router-link to="javascript:void(0);">查看原值</router-link></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>选装不见33333</td>
                        <td>
                            <label for="ccid-psf-parameterimg1">
                                <span>上传照片</span>
                                <!-- <img src="../../../../../static/images/changeexpansion-searchbtn.png" alt=""> -->
                                <input type="file" name="" id="ccid-psf-parameterimg1">
                            </label>
                        </td>
                        <td><input type="text" value="显示原值，编辑状态，直接在原值的基础上修改"></td>
                        <td><router-link to="javascript:void(0);">查看</router-link></td>
                        <td><router-link to="javascript:void(0);">查看原值</router-link></td>
                    </tr>
                </tbody>
            </table>
            
            <table class="ccid_tableNomal ccid_thirdTable table2">
                <caption>侧、后下部防护装置的组合照片</caption>
                <thead>
                    <tr>
                        <th>项目名称</th>
                        <th>缩略图（文件格式只能为：jpg格式！）</th>
                        <th>说明</th>
                        <th>填报说明</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <label for="ccid-psf-parameterimg1">
                                <!-- <span>上传照片</span> -->
                                <!-- <img src="../../../../../static/images/changeexpansion-searchbtn.png" alt=""> -->
                                <input type="file" name="" id="ccid-psf-parameterimg1">
                            </label>
                        </td>
                        <td><input type="text" value="显示原值，编辑状态，直接在原值的基础上修改"></td>
                        <td><router-link to="javascript:void(0);">查看</router-link></td>
                        <td><router-link to="javascript:void(0);">查看原值</router-link></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <label for="ccid-psf-parameterimg2">
                                <span>上传照片</span>
                                <!-- <img src="../../../../../static/images/changeexpansion-searchbtn.png" alt=""> -->
                                <input type="file" name="" id="ccid-psf-parameterimg2">
                            </label>
                        </td>
                        <td><input type="text" value="显示原值，编辑状态，直接在原值的基础上修改"></td>
                        <td><router-link to="javascript:void(0);">查看</router-link></td>
                        <td><router-link to="javascript:void(0);">查看原值</router-link></td>
                    </tr>
                </tbody>
            </table>
            <table class="ccid_tableNomal ccid_thirdTable table3">
                <caption>佐证材料清单</caption>
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>项目名称</th>
                        <th>文件（文件格式只能为：pdf、jpg、doc、excel、zip）</th>
                        <th>说明</th>
                        <th>填报说明</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>选装不见11</td>
                        <td>
                            <label for="ccid-psf-parameterimg1">
                                <span class="ccid-psf-parameterimgfilename">这里是带着后缀的文件名</span>
                                <!-- <img src="../../../../../static/images/changeexpansion-searchbtn.png" alt=""> -->
                                <input type="file" name="" id="ccid-psf-parameterimg1">
                            </label>
                        </td>
                        <td><input type="text" value="显示原值，编辑状态，直接在原值的基础上修改"></td>
                        <td><router-link to="javascript:void(0);">查看</router-link></td>
                        <td><router-link to="javascript:void(0);">查看原值</router-link></td>
                    </tr>
                </tbody>
            </table>
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
        name: "ChangeexpansionnewonePnrtS",
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
    $tablelinkcolor:rgb(0, 102, 204);
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
            margin:20px auto 0;
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
                    color:$tablelinkcolor;
                }
                label{
                    font-weight:normal;
                    color:$tablelinkcolor;
                    input[type="file"]{
                        display:none;
                    }
                    .ccid-psf-parameterimgfilename{
                        text-decoration:underline;
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
        .table1{
            td:nth-child(4){
                width:315px;
                text-align:left;
                input{
                    display:inline-block;
                    width:100%;
                }
            }
        }
        .table2{
            td:nth-child(3){
                width:315px;
                text-align:left;
                input{
                    display:inline-block;
                    width:100%;
                }
            }
        }
        .table3{
            td:nth-child(4){
                width:315px;
                text-align:left;
                input{
                    display:inline-block;
                    width:100%;
                }
            }
        }
    }
</style>