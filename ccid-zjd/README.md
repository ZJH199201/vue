

## 前言 ##
本项目由vue+webpack+es6+vuex


## 目录结构介绍 ##

	|-- build                            // webpack配置文件
	|-- config
	    |-- dev.env                      //开发环境地址
	    |-- index                        //生产开发环境配置
	    |-- prod.env                     //生产环境地址
	|-- dist                             // 构建的成品项目
	|-- src                              // 源码目录
	|   |-- api                          // 请求地址
	|       |-- ns_api                   // 每个系统的对应请求
	|       |-- request.js               // 对所有请求的拦截配置
	|   |-- common                       // 公共方法
	|   |-- components                   // 组件
	|       |-- common                   // 公共组件
	|           |-- Header.vue           // 公共头部
	|           |-- Home.vue           	 // 公共路由入口
	|		|-- page                   	 // 项目页面组件
	|   |-- router                       // 路由配置
	|   |-- vuex                         // 状态管理
	|       |-- modules                  // 状态模块
	|       |-- store.js                 // 状态中心
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- static                           // 资源
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明


## 安装步骤 ##

	git clone https://win-na3s17ckr11.rxjy.com:4430/svn/Web/2018.SourceCode/MCGroup/src/components/page               // 把模板下载到本地
	npm install         // 安装项目依赖，等待安装完成之后

## 本地开发 ##

	// 开启服务器，浏览器访问 http://localhost:8080
	npm run dev

## 构建生产 ##

	// 执行构建命令，生成的dist文件夹放在服务器下即可访问
	npm run build

## 项目功能说明与演示 ##

### vue-schart ###
vue.js封装sChart.js的图表组件。访问地址：[vue-schart](https://github.com/linxin/vue-schart)
<p><a href="https://www.npmjs.com/package/vue-schart"><img src="https://img.shields.io/npm/dm/vue-schart.svg" alt="Downloads"></a></p>

```JavaScript
<template>
    <div>
        <schart :canvasId="canvasId"
				:type="type"
				:width="width"
				:height="height"
				:data="data"
				:options="options"
		></schart>
    </div>
</template>
	
<script>
    import Schart from 'vue-schart';        // 导入Schart组件
    export default {
        data: function(){
            return {
                canvasId: 'myCanvas',       // canvas的id
                type: 'bar',                // 图表类型
                width: 500,
                height: 400,
                data: [
                    {name: '2014', value: 1342},
                    {name: '2015', value: 2123},
                    {name: '2016', value: 1654},
                    {name: '2017', value: 1795},
                ],
                options: {                  // 图表可选参数
                    title: 'Total sales of stores in recent years'
                }
            }
        },
        components: {
            Schart
        }
    }
</script>

### element-ui ###
一套基于vue.js2.0的桌面组件库。访问地址：[element](http://element.eleme.io/#/zh-CN/component/layout)

### vue-datasource ###
一个用于动态创建表格的vue.js服务端组件。访问地址：[vue-datasource](https://github.com/coderdiaz/vue-datasource)



### Vue-Quill-Editor ###
基于Quill、适用于Vue2的富文本编辑器。访问地址：[vue-quill-editor](https://github.com/surmon-china/vue-quill-editor)

### Vue-SimpleMDE ###
Vue.js的Markdown Editor组件。访问地址：[Vue-SimpleMDE](https://github.com/F-loat/vue-simplemde)

### Vue-Core-Image-Upload ###
一款轻量级的vue上传插件，支持裁剪。访问地址：[Vue-Core-Image-Upload](https://github.com/Vanthink-UED/vue-core-image-upload)

## 项目功能说明与演示 ##
### 项目接口配置 ###
