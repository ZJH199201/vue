<template>
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th width="10%">序号</th>
                    <th width="30%">项目名称</th>
                    <th width="30%">文件</th>
                    <th width="30%">说明</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td>{{index+1}}</td>
                    <td>{{items.createUserName}}</td>
                    <td>{{items.fileUrl}}</td>
                    <td>{{items.explainText}}</td>
                </tr>
                <tr v-if="pageData.length<=0">
                    <td colspan="4">暂无数据！</td>
                </tr>
              
            </tbody>
        </table>

        <div class="button">
            <button class="save">打印</button>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
           
        };
    },
    methods: {

    },
    created() {
       
    }
};
</script>
<style lang="sass" scoped>
    .table {
        width: 100%;
        margin: 0 auto;
        border: 1px solid #c3d5e5;
        td {
            display: table-cell;
            vertical-align: middle;
            padding: 5px 10px;
            border: 1px solid #c3d5e5;
        }
        td:nth-of-type(1) {
            text-align: center;
        }
        th {
            background: #d2e0ed;
            color: #47627a;
            font-weight: bold;
            text-align: center;
            border: 1px solid #c3d5e5;
        }
        .textarea {
            width: 400px;
            min-height: 60px;
            max-height: 200px;
            outline: 0;
            // border: 1px solid gray;
            word-wrap: break-word;
        }
    }

    .upFile {
        color: #0066cc;
        text-decoration: underline;
        cursor: pointer;
    }

    .upFile:hover {
        color: #318fdd;
    }
</style>