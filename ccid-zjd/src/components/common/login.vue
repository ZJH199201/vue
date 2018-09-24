<template>
    <div class="psfloginpage">
        <div class="psfheader">
            <img src="" alt="登陆注册页">
        </div>
        <div class="psflogincontent">
            <p class="psflogintitle"><span>登陆</span></p>
            <input type="text" placeholder="请输入用户名" v-model="logindata.username">
            <span v-if="tipsstatus.username">请输入用户名</span>
            <input type="password" placeholder="请输入密码" v-model="logindata.password">
            <span v-if="tipsstatus.password">请输入密码</span>
            <div class="psfloginothers">
                <label for="psfautologin"><input type="checkbox" name="psfautologin" id="psfautologin"><span>下次自动登陆</span></label>
                <a href="javascript:">忘记密码</a>
            </div>
            <div @click="loginfun" class="loginbtn">登陆</div>
            <div class="psflogintoregistbox">
                <span class="psflogintips">没有账号?</span><span @click="gotopage('regist')" class="psflogintoregist">点击注册</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    data(){
        return{
            tipsstatus:{
                username:false,
                password:false
            },
            logindata:{
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
        }
    },
}
</script>

<style lang="sass" scoped>
    .psfloginpage{
        font-size:14px;
        width:100%;
        height:100%;
        min-width:1230px;
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
        .psflogincontent{
            /* border:1px solid #ccc;
            // background:#fff;
            width:360px;
            height:300px;
            margin:100px auto; */
            padding-bottom:20px;
            &>*{
                display:block;
                // width:500px;
                margin:0 auto;
                box-sizing:border-box;
            }
            &>input{
                // border:1px solid #ccc;
                width:500px;
                height:54px;
                background:#fff;
                line-height:54px;
                padding-left:35px;
                border-radius:27px;
                margin:15px auto 0;
            }
            &>span{
                color:#FF0000;
                font-size:13px;
                padding-left:25px;
                display:block;
                width:500px;
                margin:10px auto;
            }
            .psflogintitle{
                border-bottom:1px solid #fff;
                color:#169BD5;
                width:600px;
                margin:0 auto 30px;
                font-weight:500;
                text-align:center;
                height:60px;
                span{
                    font-size:28px;
                }
            }
            .psfloginothers{
                margin-top:20px;
                width:500px;
                label{
                    margin-bottom:0;
                    margin-left:40px;
                    span{
                        color:#333;
                        font-size:13px;
                        font-weight:normal;
                    }
                }
                a{
                    color:#333;
                    float:right;
                    margin-right:40px;
                }
            }
            .loginbtn{
                width:318px;
                height:54px;
                border-radius:20px;
                text-align:center;
                line-height:54px;
                font-size:20px;
                background:rgba(25, 158, 216, 1);
                color:#fff;
                cursor:pointer;
                margin:25px auto;
            }
            .psflogintoregistbox{
                width:500px;
                margin:25px auto;
                text-align:center;
                .psflogintoregist{
                    // display:inline-block;
                    // margin-left:10px;
                    color:rgba(25, 158, 216, 1);
                    cursor:pointer;
                }
            }
        }
    }
</style>
