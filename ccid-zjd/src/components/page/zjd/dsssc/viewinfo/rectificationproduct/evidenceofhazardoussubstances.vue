<template>
    <div class="ccid-psf-dp-parameter">
        <div class="tablebox">
            <!-- <table class="table table-bordered table-hover"> -->
            <table class="ccid_tableNomal">
                <caption>变更扩展产品有害物质使用说明</caption>
                <thead>
                    <tr>
                        <th>项目</th>
                        <th>说明</th>
                        <th>文件</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A.变更扩展产品ELV影响说明</td>
                        <td>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </td>
                        <td>
                            <label for="ccid-psf-parameterimg1">
                                <span>上传照片</span>
                                <!-- <img src="" alt=""> -->
                                <input type="file" name="" id="ccid-psf-parameterimg1">
                            </label>
                            <div class="ccid-psf-stxz">视同选择</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            B.变更扩展产品有害物质使用合规承诺书
                            <div class="ccid-psf-table-floatrightbox">
                                <p>查看填报模板</p>
                            </div>
                        </td>
                        <td>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </td>
                        <td>
                            <label for="ccid-psf-parameterimg1">
                                <span>上传照片</span>
                                <!-- <img src="" alt=""> -->
                                <input type="file" name="" id="ccid-psf-parameterimg1">
                            </label>
                            <div class="ccid-psf-stxz">视同选择</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            C.变更扩展产品零部件备案表
                            <div class="ccid-psf-table-floatrightbox">
                                <p>查看填报模板</p>
                                <p>零部件范围清单</p>
                            </div>
                        </td>
                        <td>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </td>
                        <td>
                            <label for="ccid-psf-parameterimg1">
                                <span>上传照片</span>
                                <!-- <img src="" alt=""> -->
                                <input type="file" name="" id="ccid-psf-parameterimg1">
                            </label>
                            <div class="ccid-psf-stxz">视同选择</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="ccid-psf-tab-btnbox">
                <div class="ccid-psf-btn">保存</div>
                <div class="ccid-psf-btn ccid-psf-btncancel">取消</div>
            </div>
        </div>
        <div class="ccid-psf-btnbox">
            <div class="ccid-psf-btn">上一步</div>
            <div class="ccid-psf-btn">完成</div>
            <div class="ccid-psf-btn ccid-psf-btncancel">取消</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChangeexpansionnewoneEvidenceofhazardoussubstances",
        data(){
            return{

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
    $textareaheight:30px;
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
                    color:inherit;
                }
                label{
                    font-weight:normal;
                    // color:rgb(0, 102, 204);
                    color:$tablebtncolor;
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

            tbody{
                tr{
                    td:nth-child(1){
                        width:370px;
                        text-align:left;
                        line-height:$textareaheight;
                        .ccid-psf-table-floatrightbox{
                            float:right;
                            p{
                                cursor:pointer;
                                color:$tablebtncolor;
                                // text-decoration:underline;
                                text-align:right;
                                // margin-bottom:5px;
                                line-height:1.2em;
                            }
                        }
                    }
                    textarea{
                        height:$textareaheight;
                        width:100%;
                    }
                    .ccid-psf-stxz{
                        display:inline-block;
                        cursor:pointer;
                        color:$tablebtncolor;
                        // text-decoration:underline;
                    }
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
        .ccid-psf-tab-btnbox{
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
                min-width:105px;
            }
            .ccid-psf-btncancel{
                background:rgb(153, 153, 153);
                margin-right:0;
            }
        }

    }
</style>