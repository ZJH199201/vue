<template>
    <div class="content">
        <div class="tabs">
            <ul>
                <li v-for="(item,index) in tabs" :key="index" :class="{active:index == num}" @click="tab(index)">{{item}}</li>
            </ul>
            <!-- tab 切换 -->
            <div class="tabCon">
                <div class="tabContents" v-show="num==0">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>序号</th>
                                    <th>是否公告内底盘</th>
                                    <th>底盘ID</th>
                                    <th>底盘型号</th>
                                    <th>生产企业</th>
                                    <th>底盘类别</th>
                                    <th>底盘商标</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{index+1}}</td>
                                    <td>{{items.isNotice ? '是' : '否'}}</td>
                                    <td>{{items.chassisId  || '-'}}</td>
                                    <td>{{items.chassisModel || '-'}}</td>
                                    <td>{{items.manufacture || '-'}}</td>
                                    <td>{{items.chassisType || '-'}}</td>
                                    <td>{{items.chassisTrademark || '-'}}</td>
                                </tr>
                                <tr v-if="pageDatadipan.length<=0">
                                    <td colspan="7">
                                        暂无数据！
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="button">
                        <button class="print">打印</button>
                    </div>
                </div>
                <div class="tabContents" v-show="num==1">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>序号</th>
                                    <th>发动机型号</th>
                                    <th>生产企业</th>
                                    <th>排量(ml)</th>
                                    <th>功率(kw)</th>
                                </tr>
                                
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{index+1}}</td>
                                    <td>{{items.engineModel || '-'}}</td>
                                    <td>{{items.manufacturerId || '-'}}</td>
                                    <td>{{items.displacement || '-'}}</td>
                                    <td>{{items.power || '-'}}</td>
                                </tr>
                                <tr v-if="pageDatafadongji.length<=0">
                                    <td colspan="5">
                                        暂无数据！
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="button">
                        <button class="print">打印</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            tabs: ["底盘数据", "发动机数据"],
            num: 0,
        };
    },
    created() {
        
    },
    mounted() {},
    methods: {
        tab(index) {
            this.num = index;
        },
    }
};
</script>
<style lang="sass" scoped>
.table{
    background:white;
    width:100%;
    text-align:center;
    margin:0 auto;
    margin-bottom:30px;
    border:1px solid #c3d5e5;
    th{
        background:#d2e0ed;
        color:#47627a;
        font-weight:bold;
        text-align:center;
        border:1px solid #c3d5e5;
    }
    td{
      border:1px solid #c3d5e5;
    }
    caption{
        background:#318fdd;
        text-align:center;
        color:white;
        font-weight:bold;
    }
}
.amend{
  background:#26d280;
}
.sure{
  background:#318fdd;
}
.content{
  width:100%;
  min-width:1010px;
  .tabs{
    width:100%;
    margin:0 auto;
    ul{
      width: 100%;
      height:40px;
      line-height:40px;
      background: white;
      font-size:16px;
      font-weight:bold;
      color:#47627a;
      li{
        width:50%;
        float:left;
        cursor: pointer;
        text-align:center;
        border:1px solid #318fdd;
      }
    }
  }
}
.active{
    background:#318fdd;
    color:#fff;
}
.tabCon{
  width:100%;
  margin:0 auto;
}
.table-responsive{
    width:100%;
}
.add_box {
    overflow: hidden;
    width: 100%;
    height: 40px;
    background: #318fdd;
    .newAdd{
        width: 110px;
        height: 30px;
        background: #ff9900;
        color: white;
        outline: none;
        border: none;
        border-radius: 5px;
        float: right;
        margin: 5px;
    }
}
.button{
    margin: 0 auto;
}

</style>

