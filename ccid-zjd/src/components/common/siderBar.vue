<template>
    <div class="siderBar"  v-scrollHeight = "0">
        <div class="bo_ccid_box">
           <!-- <div class="ccid_nav">
                        企业产品填报
            </div> -->
            <div v-for="(items,index) in tabData" :key="index"
                class="tabList" :class="items.isShow?'listLineChang':'listLine'" >

                <div class="ccid_sider_p" @click.stop="tabListClick

(index,items.name)">{{items.name}}</div>
                <span class="listLineSider"></span>
                <span class="listLineSiderRight">∨</span>
                <ul>
                    <router-link
                        tag="li" 
                        :to="returnLink(itemChild.link)"
                        active-class="active"
                        v-for="(itemChild,indexChild) in items.children" 

:key="indexChild" 
                        class="relative">
                        
                        <span>{{itemChild.name}}</span>
                    </router-link>
                </ul>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
    data() {
        return {
            tabData: [

                {
                    "name":"首页",
                    "isShow":false,
                    "children":[
                        {"name":"首页","isShow":false,"link":"Homepage"},
                    ],
                },

                // 待受理审核
                {
                    "name":"待受理审核",
                    "isShow":false,
                    "link":"dslsh",
                    "children":[
                        {"name":"产品审核","isShow":false,"link":"dslsh"},
                        {"name":"专用车名称备案审核","isShow":false,"link":"Acceptanceauditconclusionfbmanag_onekey"},
                        {"name":"发动机系族审核","isShow":false,"link":"Acceptanceauditconclusionfbmanag_onekey"},
                        {"name":"财税优惠目录审核","isShow":false,"link":"Acceptanceauditconclusionfbmanag_onekey"}
                    ],
                },

                // 待技术审查
                {
                    "name":"待技术审查",
                    "isShow":false,
                    "link" :'djssc',
                    "children":[
                        {"name":"产品审核","isShow":false,"link":"djssc"},
                        {"name":"专用车名称备案审核","isShow":false,"link":"Acceptanceauditconclusionfbmanag_onekey"},
                        {"name":"发动机系族审核","isShow":false,"link":"Acceptanceauditconclusionfbmanag_onekey"},
                        {"name":"财税优惠目录审核","isShow":false,"link":"Acceptanceauditconclusionfbmanag_onekey"}
                    ],
                },

                // 待公示审查
                {
                    "name":"待公示审查",
                    "isShow":false,
                    "link" :'dgssc',
                    "children":[
                        {"name":"产品审查","isShow":false,"link":"dgssc"}
                    ],
                },

                // 待申诉审查
                {
                    "name":"待申诉审查",
                    "isShow":false,
                    "link" :'dsssc',
                    "children":[
                        {"name":"产品审查","isShow":false,"link":"dsssc"}
                    ],
                },

                // ELV待审核
                {
                    "name":"ELV待审核",
                    "isShow":false,
                    "children":[
                        {"name":"ELV验证审核","isShow":false,"link":"Assigntheexpertstoaccepttheaudit_Onekeyallocationexpert"},
                        {"name":"ELV反馈验证审核","isShow":false,"link":"Acceptanceauditconclusionfbmanag_onekey"}
                    ],
                },

                // 受理审核完成状态查询
                {
                    "name":"受理审核完成状态查询",
                    "isShow":false,
                    "children":[
                        {"name":"产品审核","isShow":false,"link":"Assigntheexpertstoaccepttheaudit_Onekeyallocationexpert"},
                        {"name":"专用车名称备案审核","isShow":false,"link":"Acceptanceauditconclusionfbmanag_onekey"},
                        {"name":"发动机系族审核","isShow":false,"link":"Assigntheexpertstoaccepttheaudit_Onekeyallocationexpert"},
                        {"name":"财税优惠目录审核","isShow":false,"link":"Acceptanceauditconclusionfbmanag_onekey"}
                    ],
                },

                // 技术审查完成状态查询
                {
                    "name":"技术审查完成状态查询",
                    "isShow":false,
                    "children":[
                        {"name":"产品审核","isShow":false,"link":"Assigntheexpertstoaccepttheaudit_Onekeyallocationexpert"},
                        {"name":"专用车名称备案审核","isShow":false,"link":"Acceptanceauditconclusionfbmanag_onekey"},
                        {"name":"发动机系族审核","isShow":false,"link":"Assigntheexpertstoaccepttheaudit_Onekeyallocationexpert"},
                        {"name":"财税优惠目录审核","isShow":false,"link":"Acceptanceauditconclusionfbmanag_onekey"}
                    ],
                },

                // 公示审查完成状态查询
                {
                    "name":"公示审查完成状态查询",
                    "isShow":false,
                    "children":[
                        {"name":"产品审查","isShow":false,"link":"Assigntheexpertstoaccepttheaudit_Onekeyallocationexpert"}
                    ],
                },

                // 申诉审查完成状态查询
                {
                    "name":"申诉审查完成状态查询",
                    "isShow":false,
                    "children":[
                        {"name":"产品审查","isShow":false,"link":"Assigntheexpertstoaccepttheaudit_Onekeyallocationexpert"}
                    ],
                },
 
                // ELV审核完成状态查询
                {
                    "name":"ELV审核完成状态查询",
                    "isShow":false,
                    "children":[
                        {"name":"ELV验证状态","isShow":false,"link":"Assigntheexpertstoaccepttheaudit_Onekeyallocationexpert"},
                        {"name":"ELV反馈验证状态","isShow":false,"link":"Assigntheexpertstoaccepttheaudit_Onekeyallocationexpert"}
                    ],
                },

                // 信息查询
                {
                    "name":"信息查询",
                    "isShow":false,
                    "children":[
                        {"name":"产品信息","isShow":false,"link":"Assigntheexpertstoaccepttheaudit_Onekeyallocationexpert"},
                        {"name":"专用车名称备案信息","isShow":false,"link":"Assigntheexpertstoaccepttheaudit_Onekeyallocationexpert"},
                        {"name":"发动机系族信息","isShow":false,"link":"Assigntheexpertstoaccepttheaudit_Onekeyallocationexpert"},
                        {"name":"财税优惠目录","isShow":false,"link":"Assigntheexpertstoaccepttheaudit_Onekeyallocationexpert"}
                    ],
                },

            ]
        };
    },
    methods: {
        // alert($(".siderBar").length)
        tabListClick(index, pattern) {
            for (let items of this.tabData) {
                if (pattern == items.name) {
                    items.isShow = !items.isShow;
                } else {
                    items.isShow = false;
                }
            }
        },
        returnLink(items) {
            // console.log(`${this.$route.matched[0].path}/${items}`);
            return `${this.$route.matched[0].path}/${items}`;
        }
    },
    mounted() {
        
    }
    };
</script>
<style lang="sass" scoped>
*{
    padding: 0;
    margin: 0;
 }
 .ccid-personal-center{
    list-style:none;
    padding:15px 10px 0 20px;
    font-size: 14px;
    font-weight: bold;
    float: left;
    width:100%;
    height:100%;
    cursor:pointer;
 }
// html,body,.bo_ccid_box{
//     height:100%;
// }
.siderBar{
    width: 220px;
    height: 100%;
    float:left;
    color: #656378;
    font-family: 'PingFangSC-Regular', 'PingFang SC';
    background-color:#2B2B38;
}
//  .ccid_nav{
//      margin: 20px 0 0 20px;
//      color:  #e8c260;
//      font-weight: bold;
//       font-size: 18px ;
//  }
.ccid_sider_p{
    padding:0 10px 0 20px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    float: left;
    width:100%;
    user-select:none;

}
.tabList{
    width:100%;
    float: left;
    line-height: 60px;
    cursor:pointer;
    ul{
        width:100%;
        padding-left:10px;
        li{
            height: 36px;
            line-height:36px;
            color:#7A7A93;
            font-size: 14px;
            float: left;
            width: 100%;
            Padding-left:30px;
        }
    }
}

.listLine{
    overflow:hidden;
    height:60px;
    
    .ccid_sider_p{
        color:#656378;
        background-color:#2b2b38;
    }
    .listLineSider{
        display:none
    }
    .listLineSiderRight{
        display:none;
    }
}
.listLineChang .ccid_sider_p{
    font-size:14px;
    font-weight:bold;
    background-color:#272733;
}
.listLineChang{
    position:relative;
    .listLineSider{
        display:block;
        position:absolute;
        left:0px;
        top:0px;
        width:4px;
        height:60px;
        background-color:#e8c260;
    }
    .listLineSiderRight{
        display:block;
        position:absolute;
        right:10px;
        top:27px;
        height:6px;
        width:6px;
        line-height:6px;
        color:#707088;
        font-size:16px;
    }
}
.active{
    color:#fff!important;
}
</style>
