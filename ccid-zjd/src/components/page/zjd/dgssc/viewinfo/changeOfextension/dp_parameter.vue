<template>
    <div class="ccid-psf-dp-parameter">
        <div class="content-tabbox clearfix">
            <div class="tab" :class="{active:tabselect==1}" @click="tabselect=1">底盘数据</div>
            <div class="tab" :class="{active:tabselect==2}" @click="tabselect=2">发动机数据</div>
            <!-- <router-link tag="div" class="tab" to="Chassisdata">底盘数据</router-link>
            <router-link tag="div" class="tab" to="enginedata">发动机数据</router-link>

            <router-link tag="div" class="tab" :to="{path:'Chassisdata',query:{listid:$route.query.listid}}">底盘数据</router-link>
            <router-link tag="div" class="tab" :to="{path:'enginedata',query:{listid:$route.query.listid}}">发动机数据</router-link> -->
        </div>
        <!-- <router-view></router-view> -->
        
        <div class="tablebox">
            <table class="table table-bordered table-hover" v-if="tabselect==1">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>是否公告内底盘</th>
                        <th>底盘ID</th>
                        <th>底盘型号</th>
                        <th>生产企业</th>
                        <th>底盘类别</th>
                        <th>底盘商标</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>是否公告内底盘</td>
                        <td>底盘ID</td>
                        <td>底盘型号</td>
                        <td>生产企业</td>
                        <td>底盘类别</td>
                        <td>底盘商标</td>
                        <td>
                            
                            <div class="psfinline psfviewinformationbtn look">
                                查
                                <span class="psfviewinformationbtntitle">
                                    查看产品信息
                                </span>
                                <div class="psfafterdom"></div>
                            </div>
                            <div class="psfinline psfviewinformationbtn amend">
                                变
                                <span class="psfviewinformationbtntitle">
                                    变更产品信息
                                </span>
                                <div class="psfafterdom"></div>
                            </div>
                            <div class="psfinline psfviewinformationbtn remove">
                                扩
                                <span class="psfviewinformationbtntitle">
                                    扩展产品信息
                                </span>
                                <div class="psfafterdom"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="table table-bordered table-hover" v-if="tabselect==2">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>发动机型号</th>
                        <th>生产企业</th>
                        <th>排量（ml）</th>
                        <th>功率（kw）</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>
                            
                            <div class="psfinline psfviewinformationbtn look">
                                查
                                <span class="psfviewinformationbtntitle">
                                    查看产品信息
                                </span>
                                <div class="psfafterdom"></div>
                            </div>
                            <div class="psfinline psfviewinformationbtn amend">
                                变
                                <span class="psfviewinformationbtntitle">
                                    变更产品信息
                                </span>
                                <div class="psfafterdom"></div>
                            </div>
                            <div class="psfinline psfviewinformationbtn remove">
                                扩
                                <span class="psfviewinformationbtntitle">
                                    扩展产品信息
                                </span>
                                <div class="psfafterdom"></div>
                            </div>
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
        name: "Changeexpansionnewonedp_parameter",
        data(){
            return{
                tabselect:0,
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

    }
    .router-link-active{
        background:$tablebtncolor;
        color:#fff;
    }
</style>