<template>
    <div class="psfregistpage">
        <div class="psfheader">
            <img src="" alt="登陆注册页">
        </div>
        <div class="registcontent">
            <div class="registpagetitle"><p>授权登录--检测机构用户</p></div>
            <div class="rigistlist">
                <div class="rigistli">
                    <p class="rigistlititle">检测机构授权信息填写</p>
                    <div class="rigistlihr"></div>
                    <div class="rigistlisbox clearfix">
                        <div class="rigistlikey">
                            <span>*</span>检测机构账户:
                        </div>
                        <input type="text" placeholder="请输入检测机构账户" class="rigistlival">
                    </div>
                    <div class="rigistlisbox clearfix">
                        <div class="rigistlikey">
                            <span>*</span>检测机构密码:
                        </div>
                        <input type="password" placeholder="请输入检测机构密码" class="rigistlival">
                    </div>
                    <div class="rigistlisbox clearfix">
                        <div class="rigistlikey">
                            <span>*</span>检测机构名称:
                        </div>
                        <input type="text" placeholder="请输入检测机构名称" class="rigistlival">
                    </div>
                    <div class="rigistlisbox clearfix">
                        <div class="rigistlikey">
                            <span>*</span>营业执照企业名称:
                        </div>
                        <input type="text" placeholder="请输入营业执照企业名称" class="rigistlival">
                    </div>
                    <div class="rigistlisbox clearfix">
                        <div class="rigistlikey">
                            <span>*</span>法人代表:
                        </div>
                        <input type="text" placeholder="请输入法人代表" class="rigistlival">
                    </div>
                    <div class="rigistlisbox clearfix">
                        <div class="rigistlikey">
                            <span>*</span>检测机构地址:
                        </div>
                        <input type="text" placeholder="请输入检测机构地址" class="rigistlival">
                    </div>
                    <div class="rigistlisbox clearfix">
                        <div class="rigistlikey">
                            <span>*</span>检测机构上级主管单位名称:
                        </div>
                        <input type="text" placeholder="请输入检测机构上级主管单位名称" class="rigistlival">
                    </div>
                </div>

                
                <div class="rigistli">
                    <p class="rigistlititle">高级管理员授权信息填写</p>
                    <div class="rigistlihr"></div>
                    <div class="rigistlisbox clearfix">
                        <div class="rigistlikey">
                            <span>*</span>检高级管理员联系人:
                        </div>
                        <input type="text" placeholder="请输入检高级管理员联系人" class="rigistlival">
                    </div>
                    <div class="rigistlisbox clearfix">
                        <div class="rigistlikey">
                            <span>*</span>检管理员职务:
                        </div>
                        <input type="text" placeholder="请输入检管理员职务" class="rigistlival">
                    </div>
                    <div class="rigistlisbox clearfix">
                        <div class="rigistlikey">
                            <span>*</span>所在部门:
                        </div>
                        <input type="text" placeholder="请输入所在部门" class="rigistlival">
                    </div>
                    <div class="rigistlisbox clearfix">
                        <div class="rigistlikey">
                            <span>*</span>身份证号:
                        </div>
                        <input type="text" placeholder="请输入身份证号" class="rigistlival">
                    </div>
                    <div class="rigistlisbox clearfix">
                        <div class="rigistlikey">
                            <span>*</span>联系电话（座机）:
                        </div>
                        <input type="text" placeholder="请输入联系电话（座机）" class="rigistlival">
                    </div>
                    <div class="rigistlisbox clearfix">
                        <div class="rigistlikey">
                            <span>*</span>联系电话（手机）:
                        </div>
                        <input type="text" placeholder="请输入联系电话（手机）" class="rigistlival">
                    </div>
                    <div class="rigistlisbox clearfix">
                        <div class="rigistlikey">
                            <span>*</span>传真:
                        </div>
                        <input type="text" placeholder="请输入传真" class="rigistlival">
                    </div>
                    <div class="rigistlisbox clearfix">
                        <div class="rigistlikey">
                            <span>*</span>邮编:
                        </div>
                        <input type="text" placeholder="请输入邮编" class="rigistlival">
                    </div>
                    <div class="rigistlisbox clearfix">
                        <div class="rigistlikey">
                            <span>*</span>EMAIL:
                        </div>
                        <input type="text" placeholder="请输入电子邮箱" class="rigistlival">
                    </div>
                </div>
                
            </div>
            <div class="registbtnbox">
                <div @click="gotopage('Home')" class="registbtn">现在注册</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "regist2",
    data(){
        return{
            tipsstatus:{
                username:false,
                password:false
            },
            registdata:{
              username:'',
              password:''  
            },
            ifdataok:false,
        }
    },
    methods:{
        ifdataokfun(){
            if(this.logindata.username!=''&&this.logindata.password!=''){
                this.tipsstatus.username = false;
                this.tipsstatus.password = false;
                this.ifdataok=true;
            }else if(this.logindata.password ==''&&this.logindata.username ==''){
                this.tipsstatus.username = true;
                this.tipsstatus.password = true;
            }else if(this.logindata.username ==''){
                this.tipsstatus.username = true;
            }else if(this.logindata.password ==''){
                this.tipsstatus.password = true;
            }
        },
        loginfun(){
            this.ifdataokfun();
            if(this.ifdataok){
                alert('输入的登录信息完整');
                this.$router.push("Home");
            }
        },
        gotopage(keyword){
            if(keyword=='regist'){
                // alert('跳转到注册页面');
                this.$router.push("regist")
            }
            if(keyword=='Home'){
                // alert('跳转到注册页面');
                this.$router.push("Home")
            }
        }
    },
}
</script>

<style lang="sass" scoped>
    .psfregistpage{
        font-size:14px;
        width:100%;
        height:100%;
        min-width:1300px;
        overflow-y: scroll;
        background:#EDF2F8;
        .psfheader{
            width:100%;
            height:150px;
            margin-bottom:80px;
            background:#ccc;
            img{
                width:100%;
                height:auto;
            }
        }
        .registcontent{
            .registpagetitle{
                width:700px;
                margin:0 auto 20px;
                border-bottom:1px solid #fff;
                text-align:center;
                p{
                    font-size:28px;
                    color:#318FDD;
                    // position:relative;
                }
            }
            .rigistlist{
                width:1198px;
                border:1px solid rgb(195, 213, 229);
                background:#fff;
                margin:0 auto;
                padding: 50px 84px;
                .rigistli{
                    margin-bottom:20px;
                }
                .rigistlititle{
                    font-weight:700;
                    padding-left:20px;
                    border-left:6px solid #FCB322;
                }
                .rigistlihr{
                    height:2px;
                    background:rgb(25, 158, 216);
                    width:100%;
                    margin:5px auto 25px;
                }
                .rigistlisbox{
                    margin-top:15px;
                    .rigistlikey{
                        float:left;
                        width:175px;
                        span{
                            color:#f00;
                            margin-right:5px;
                        }
                        line-height:30px;
                        color:#333;
                    }
                    .rigistlival{
                        float:left;
                        width:566px;
                        height:30px;
                        background:#fff;
                        border:1px solid #999;
                        &:placeholder{
                            color:#999999
                        }
                        color:#000;
                    }
                    .rigistlivalbox{
                        float:left;
                        width:566px;
                        label{
                            display:block;
                        }
                    }
                }
            }
            .registbtnbox{
                padding:65px 0;
                .registbtn{
                    width:150px;
                    height:36px;
                    background:rgb(49, 143, 221);
                    color:#fff;
                    line-height:36px;
                    text-align:center;
                    margin:0 auto;
                    cursor:pointer;
                    border-radius:5px;
                }
            }
        }
    }
</style>
