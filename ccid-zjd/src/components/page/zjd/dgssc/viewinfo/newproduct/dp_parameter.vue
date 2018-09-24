<template>
    <div>
        
        <div class="ccid_tableNomal">    
            <table>
                <caption>底 盘</caption>
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
                    <tr v-for="(items,index) in pageDatadipan" :key="index" v-if="pageDatadipan.length>0">
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
        <div class="ccid_tableNomal">
            <table>
                <caption>发动机</caption>
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
                    <tr v-for="(items,index) in  pageDatafadongji" :key="index" v-if="pageDatafadongji.length>0">
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
        <div class="ccid_btnbox">
          <input type="button" value="打 印" class="ccid_certainBtn ccid_certainBtnDef">
        </div>         
        
              
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageDatadipan:[
              {
                isNotice:"1",
                chassisId:"2",
                chassisModel:"3",
                manufacture:"4",
                chassisType:"5",
                chassisTrademark:"6"
              }
            ],
            pageDatafadongji:[
              {
                engineModel:"1",
                manufacturerId:"2",
                displacement:"3",
                power:"4"
              }
            ]
        };
    },
    created() {
        
    },
    mounted() {},
    methods: {
        
    }
};
</script>
<style lang="sass" scoped>
.ccid_tableNomal{
  margin-bottom:10px;
}
.ccid_btnbox{
  text-align:center;
  margin: 50px 0 0 0;
}

</style>

