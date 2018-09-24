<template>
    <div class="ccid-psf-dp-parameter">
        <div class="tablebox">
            <!-- <table class="table table-bordered table-hover"> -->
            <table class="ccid_tableNomal">
                <!-- <caption>选装部件申请清单</caption> -->
                <thead>
                    <tr>
                        <th>参数编号</th>
                        <th>参数名称</th>
                        <th>原参数申报内容</th>
                        <th>变更参数申报内容</th>
                        <th>填报说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>QG089</td>
                        <td>门保持件型号（M1）</td>
                        <td>XXXXXXXXXXXXXXXXXXXXXXXXXX</td>
                        <td>
                            <input type="text" placeholder="请输入参数值，如果有多个值，请用半角“,”隔开">
                        </td>
                        <td><router-link to="javascript:void(0);">查看</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td>QG091</td>
                        <td>座椅面料结构</td>
                        <td>XXXXXXXXXXXXXXXXXXXXXXXXXX</td>
                        <td>
                            <input type="text" placeholder="请输入参数值，如果有多个值，请用半角“,”隔开">
                        </td>
                        <td><router-link to="javascript:void(0);">查看</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td>QG092</td>
                        <td>座椅面料材料</td>
                        <td>XXXXXXXXXXXXXXXXXXXXXXXXXX</td>
                        <td>
                            <input type="text" placeholder="请输入参数值，如果有多个值，请用半角“,”隔开">
                        </td>
                        <td><router-link to="javascript:void(0);">查看</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td>QG093</td>
                        <td>座椅面料厚度（mm）</td>
                        <td>XXXXXXXXXXXXXXXXXXXXXXXXXX</td>
                        <td>
                            <input type="text" placeholder="请输入参数值，如果有多个值，请用半角“,”隔开">
                        </td>
                        <td><router-link to="javascript:void(0);">查看</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td>QG094</td>
                        <td>顶棚衬里结构</td>
                        <td>XXXXXXXXXXXXXXXXXXXXXXXXXX</td>
                        <td>
                            <input type="text" placeholder="请输入参数值，如果有多个值，请用半角“,”隔开">
                        </td>
                        <td><router-link to="javascript:void(0);">查看</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td>QG094</td>
                        <td>顶棚衬里材料</td>
                        <td>XXXXXXXXXXXXXXXXXXXXXXXXXX</td>
                        <td>
                            <input type="text" placeholder="请输入参数值，如果有多个值，请用半角“,”隔开">
                        </td>
                        <td><router-link to="javascript:void(0);">查看</router-link>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>QG094</td>
                        <td>储能装置正极材料</td>
                        <td>尖晶石型锰酸钾材料</td>
                        <td>
                            <!-- <input type="text" placeholder="请输入参数值，如果有多个值，请用半角“,”隔开"> -->
                            <select name="" id="">
                                <option value="N/A">N/A</option>
                                <option value="层状三元材料（含镍钴锰、镍钴铝、镍钴锰铝等材料）">层状三元材料（含镍钴锰、镍钴铝、镍钴锰铝等材料）</option>
                                <option value="尖晶石型锰酸钾材料">尖晶石型锰酸钾材料</option>
                                <option value="橄榄石型酸铁锂材料">橄榄石型酸铁锂材料</option>
                                <option value="富锂锰基固溶体材料">富锂锰基固溶体材料</option>
                                <option value="其他类型正极材料（提供说明材料）">其他类型正极材料（提供说明材料）</option>
                            </select>
                        </td>
                        <td><router-link to="javascript:void(0);">查看</router-link>
                        </td>
                    </tr>
                    <tr>
                        <td>QG094</td>
                        <td>储能装置电解质成分</td>
                        <td>
                            <span>其他电解质材料（提供说明材料）</span>
                            <label for="ccid-psf-parameterimg3">
                                <span class="ccid-psf-parameterimgfilename">这里是带着后缀的文件名</span>
                                <!-- <img src="../../../../../static/images/changeexpansion-searchbtn.png" alt=""> -->
                                <input type="file" name="" id="ccid-psf-parameterimg3">
                            </label>
                            <label for="ccid-psf-parameterimg3">
                                <span class="ccid-psf-parameterimgfilename">这里是带着后缀的文件名</span>
                                <!-- <img src="../../../../../static/images/changeexpansion-searchbtn.png" alt=""> -->
                                <input type="file" name="" id="ccid-psf-parameterimg3">
                            </label>
                        </td>
                        <td>
                            <!-- <input type="text" placeholder="请输入参数值，如果有多个值，请用半角“,”隔开"> -->
                            <select name="" id="">
                                <option value="N/A">N/A</option>
                                <option value="六氟磷酸钾材料">六氟磷酸钾材料</option>
                                <option value="其他电解质材料（提供说明材料）">其他电解质材料（提供说明材料）</option>
                            </select>
                        </td>
                        <td><router-link to="javascript:void(0);">查看</router-link>
                        </td>
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
        name: "Changeexpansionnewonefile",
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
                select{
                    display:inline-block;
                    width:100%;
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
            td:nth-child(2){
                width:180px;
                text-align:left;
            }
            td:nth-child(3){
                width:265px;
                text-align:left;
            }
            td:nth-child(4){
                width:370px;
                text-align:left;
                input{
                    display:inline-block;
                    width:100%;
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

    }
</style>