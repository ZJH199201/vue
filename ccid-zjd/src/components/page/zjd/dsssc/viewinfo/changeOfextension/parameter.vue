<template>
    <div class="ccid-psf-parameter">
        <table class="ccid_tableNomal">
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
                    <td>参数编号</td>
                    <td>参数名称</td>
                    <td>原参数申报内容</td>
                    <td>变更参数申报内容</td>
                    <td>
                        <router-link to="">查看</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="ccid_tableNomal ccid_thirdTable">
            <caption>车身反光标识说明</caption>
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
                    <td>参数编号</td>
                    <td>参数名称</td>
                    <td>原参数申报内容</td>
                    <td>变更参数申报内容</td>
                    <td>
                        <router-link to="">查看</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="ccid_tableNomal ccid_thirdTable">
            <caption>产品照片</caption>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>项目名称</th>
                    <th>原文件缩略图</th>
                    <th>变更文件缩略图</th>
                    <th>填报说明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>右45°照片</td>
                    <td>
                        <!-- <img src="../../../../../static/images/changeexpansion-searchbtn.png" alt="缩略图"> -->
                    </td>
                    <td>
                        <label for="ccid-psf-parameterimg1">
                            <span>上传照片</span>
                            <!-- <img src="" alt=""> -->
                            <input type="file" name="" id="ccid-psf-parameterimg1">
                        </label>
                    </td>
                    <td>
                        <router-link to="">查看</router-link>
                    </td>
                </tr>
                
                <tr>
                    <td>1</td>
                    <td>右45°照片</td>
                    <td>
                        <!-- <img src="../../../../../static/images/changeexpansion-searchbtn.png" alt="缩略图"> -->
                    </td>
                    <td>
                        <label for="ccid-psf-parameterimg1">
                            <!-- <span>上传照片</span> -->
                            <!-- <img src="../../../../../static/images/changeexpansion-searchbtn.png" alt=""> -->
                            <input type="file" name="" id="ccid-psf-parameterimg1">
                        </label>
                    </td>
                    <td>
                        <router-link to="">查看</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="ccid-psf-btnbox">
            <div class="ccid-psf-btn">上一步</div>
            <div class="ccid-psf-btn">保存并下一步</div>
            <div class="ccid-psf-btn ccid-psf-btncancel">取消</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Changeexpansionnewoneparameter",
        data(){
            return{
                showdata:{

                }
            }
        },
        methods:{
            getdata(){
                // console.log(this.$route.query.listid)
                bgkzmk_check_jscs(this.$route.query.listid,{
                    accessToken:getStorage('accessTokened')
                }).then(e=>{
                    console.log(e.data)
                    // this.showdata=e.data.data;
                })
            }
        },
        created() {
            this.getdata()
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
    .ccid-psf-parameter{
        &>*{
            // width: 80%;
            margin: 0 auto;
            min-width: 1010px;
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