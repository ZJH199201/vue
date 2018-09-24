<template>
    <div class="ccid_tableNomal">
        <!-- 选装部件申请清单 -->
        <table>
            <caption>选装部件申请清单</caption>
            <thead>
                <tr>
                    <th width="10%">序号</th>
                    <th width="20%">项目名称</th>
                    <th width="30%">缩略图（文件格式只能为：jpg格式！）</th>
                    <th width="30%">说明</th>
                    <th width="10%">填报说明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>{{pageData.xzOneMc}}</td>
                    <td>
                        <img class="productDataPic" :src="pageData.xzOneUrl" :alt="pageData.xzOneMc" v-if="pageData.xzOneUrl">
                        <i v-else>暂无图片！</i>
                    </td>
                    <td>{{pageData.xzOneIntro}}</td>
                    <td><span class="state">查看</span></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>{{pageData.xzTwoMc}}</td>
                    <td>
                        <img class="productDataPic" :src="pageData.xzTwoUrl" :alt="pageData.xzTwoMc" v-if="pageData.xzTwoUrl">
                        <i v-else>暂无图片！</i>
                    </td>
                    <td>{{pageData.xzTwoIntro}}</td>
                    <td><span class="state">查看</span></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>{{pageData.xzThreeMc}}</td>
                    <td>
                        <img class="productDataPic" :src="pageData.xzThreeUrl" :alt="pageData.xzThreeMc" v-if="pageData.xzThreeUrl">
                        <i v-else>暂无图片！</i>
                    </td>
                    <td>{{pageData.xzThreeIntro}}</td>
                    <td><span class="state">查看</span></td>
                </tr>
            </tbody>
        </table>
        <!-- 侧、后下部防护装置的组合照片 -->
        <table >
            <caption>侧、后下部防护装置的组合照片</caption>
            <thead>
                <tr>
                    <th width="30%">项目名称</th>
                    <th width="30%">缩略图（文件格式只能为：jpg格式）</th>
                    <th width="30%">说明</th>
                    <th width="10%">填报说明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{pageData.chOneMc}}</td>
                    <td>
                        <img class="productDataPic" :src="pageData.chOneUrl" :alt="pageData.chOneMc" v-if="pageData.chOneUrl">
                        <i v-else>暂无图片！</i>
                    </td>
                    <td>{{pageData.chOneIntro}}</td>
                    <td><span class="state">查看</span></td>
                </tr>
                
            </tbody>
        </table>
        <!-- 佐证材料清单 -->
        <table >
            <caption>佐证材料清单</caption>
            <thead>
                <tr>
                    <th width="10%">序号</th>
                    <th width="20%">项目名称</th>
                    <th width="30%">文件（文件格式只能为：pdf、jpg、doc、excel、zip）</th>
                    <th width="30%">说明</th>
                    <th width="10%">填报说明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>{{pageData.xzOneMc}}</td>
                    
                    <td>

                        <img class="productDataPic"  :src="pageData.xzTwoUrl" :alt="pageData.xzOneMc" v-if="returnType(pageData.xzTwoUrl) == 'jpg' || returnType(pageData.xzTwoUrl) == 'pdf'">
                        <a target="_blank" :href="pageData.xzTwoUrl" download="pageData.xzTwoUrl" v-else-if="pageData.xzTwoUrl">{{pageData.xzTwoUrl | sliceName}}</a>
                        <i v-else>暂无数据！</i>
                    </td>
                    <td>{{pageData.xzOneIntro}}</td>
                    <td><span class="state">查看</span></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>{{pageData.xzTwoMc}}</td>
                    <td>
                        <img class="productDataPic" :src="pageData.xzOneUrl" :alt="pageData.xzTwoMc"  v-if="returnType(pageData.xzTwoMc) == 'jpg' || returnType(pageData.xzTwoMc) == 'pdf'">
                        <a target="_blank" :href="pageData.xzTwoMc" download="pageData.xzTwoMc" v-else-if="pageData.xzTwoMc">{{pageData.xzTwoMc | sliceName}}</a>
                        <i v-else>暂无数据！</i>
                    </td>
                    <td>{{pageData.xzTwoIntro}}</td>
                    <td><span class="state">查看</span></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>{{pageData.xzThreeMc}}</td>
                    <td>
                        <img class="productDataPic" :src="pageData.xzThreeUrl" :alt="pageData.xzThreeMc" v-if="returnType(pageData.xzThreeUrl) == 'jpg' || returnType(pageData.xzThreeUrl) == 'pdf'">
                        <a target="_blank" :href="pageData.xzThreeUrl" download="pageData.xzThreeUrl" v-else-if="pageData.xzThreeUrl">{{pageData.xzThreeUrl | sliceName}}</a>
                        <i v-else>暂无数据！</i>
                    </td>
                    <td>{{pageData.xzThreeIntro}}</td>
                    <td><span class="state">查看</span></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>{{pageData.zzFourMc}}</td>
                    <td>
                        <img class="productDataPic" :src="pageData.zzFourUrl" :alt="pageData.zzFourMc" v-if="returnType(pageData.zzFourUrl) == 'jpg' || returnType(pageData.zzFourUrl) == 'pdf'">
                        <a target="_blank" :href="pageData.zzFourUrl" download="pageData.zzFourUrl" v-else-if="pageData.zzFourUrl">{{pageData.zzFourUrl | sliceName}}</a>
                        <i v-else>暂无数据！</i>
                    </td>
                    <td>{{pageData.zzFourIntro}}</td>
                    <td><span class="state">查看</span></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>{{pageData.zzFiveMc}}</td>
                    <td>
                        <img class="productDataPic" :src="pageData.zzFiveUrl" :alt="pageData.zzFiveMc" v-if="returnType(pageData.zzFiveUrl) == 'jpg' || returnType(pageData.zzFiveUrl) == 'pdf'">
                        <a target="_blank" :href="pageData.zzFiveUrl" download="pageData.zzFiveUrl" v-else-if="pageData.zzFiveUrl">{{pageData.zzFiveUrl | sliceName}}</a>
                        <i v-else>暂无数据！</i>
                    </td>
                    <td>{{pageData.zzFourIntro}}</td>
                    <td><span class="state">查看</span></td>
                </tr>
            </tbody>
        </table>
        <div class="ccid_btnbox">
          <input type="button" value="打 印" class="ccid_certainBtn ccid_certainBtnDef">
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            pageData:{zzFiveUrl:"2"}
        }
    },
    created(){
       
    },
    mounted(){

    },
    methods:{
       returnType(){
         return true;
       }
    },
    computed:{},
    filters:{
        sliceName(items){
            if(items){
                let arr = items.split("/")
                return arr[arr.length-1]
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.ccid_btnbox{
  text-align:center;
  margin: 50px 0 0 0;
}
.ccid_tableNomal table{
  margin-bottom:10px;
}
.table td i.state {
    cursor: pointer;
    color: #0066cc;
    display: inline-block;
    text-decoration:underline;
}
.productDataPic{
    max-width: 94px;
    max-height: 73px;
    width: auto;
    height: auto;
}
</style>

