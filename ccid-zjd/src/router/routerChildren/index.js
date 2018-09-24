export default [{
        path: "/",
        // redirect: "/Home/SupplementaryMaterials"
        redirect: "Homepage"
    },
    //首页
    // ==================>>>>>
    {
        path: "Homepage", //首页
        component: resolve =>
            require(["../../components/page/Homepage.vue"], resolve)
    },
    // sider大分组模块名称
    // ==================>>>>>
    // 分组内单项页面的名称及配置
    // {
    //     path: 'Viewauthorizationinformation',
    //     component: resolve =>
    //         require(["../../components/page/jcjg/Viewauthorizationinformation.vue"], resolve)
    // },


    // 待受理审核
    // ==================>>>>>
    // 产品审核
    {
        path: 'dslsh',
        redirect: '/Home/dslsh/productinfolist',
        component: resolve =>
            require(["../../components/page/zjd/dslsh/Assigntheexpertstoaccepttheaudit_Productauditspecialist.vue"], resolve),
        children: [
            // 产品列表
            {
                  path: 'productinfolist',
                  component: resolve =>
                      require(["../../components/page/zjd/dslsh/productinfolist.vue"], resolve)
            },
            // 查看
            {
                path: 'viewchangeproductinfo',
                component: resolve =>
                    require(["../../components/page/zjd/dslsh/viewinfo.vue"], resolve)
        
            }
        ]
    },
    // 专用车名称备案审核
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
        children: [{
                path: 'Acceptanceauditconclusionfbmanag_onekey',
                component: resolve =>
                    require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
            }
        ]
    },

    // 发动机系族审核
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    },
    // 财税优惠目录审核
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    },


    // 待技术审查
    // ==================>>>>>
    // 产品审核
    {
        path: 'djssc',
        redirect: '/Home/djssc/productinfolist',
        component: resolve =>
            require(["../../components/page/zjd/djssc/Assigntheexpertstoaccepttheaudit_Productauditspecialist.vue"], resolve),
        children: [
            // 产品列表
            {
                  path: 'productinfolist',
                  component: resolve =>
                      require(["../../components/page/zjd/djssc/productinfolist.vue"], resolve),
                  children:[

                  ]
            }
        ]
    },
    // 专用车名称备案审查
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    },
    // 发动机系族审核
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    },
    // 待公示审查
    // ==================>>>>>
    // 产品审查
    {
        path: 'dgssc',
        redirect: '/Home/dgssc/productinfolist',
        component: resolve =>
            require(["../../components/page/zjd/dgssc/Assigntheexpertstoaccepttheaudit_Productauditspecialist.vue"], resolve),
        children: [
            // 产品列表
            {
                  path: 'productinfolist',
                  component: resolve =>
                      require(["../../components/page/zjd/dgssc/productinfolist.vue"], resolve),
                  children:[

                  ]
            }
        ]
    },

    // 待申诉审查
    // ==================>>>>>
    // 产品审查
    {
        path: 'dsssc',
        redirect: '/Home/dsssc/productinfolist',
        component: resolve =>
            require(["../../components/page/zjd/djssc/Assigntheexpertstoaccepttheaudit_Productauditspecialist.vue"], resolve),
        children: [
            // 产品列表
            {
                  path: 'productinfolist',
                  component: resolve =>
                      require(["../../components/page/zjd/dsssc/productinfolist.vue"], resolve),
                  children:[

                  ]
            }
        ]
    },
     

    // ELV待审核
    // ==================>>>>>
    // ELV验证审核
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    },

    // ELV反馈验证审核
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    }, 

    // 受理审核完成状态查询
    // ==================>>>>>
    // 产品审核
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    }, 

    // 专用车名称备案审核
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    }, 

    // 发动机系族审核
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    }, 

    
    // 财税优惠目录审核
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    },

    // 技术审查完成状态查询
    // ==================>>>>>
    // 产品审核
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    }, 

    // 专用车名称备案审核
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    }, 

    // 发动机系族审核
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    }, 

    
    // 财税优惠目录审核
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    },

    // 公示审查完成状态查询
    // ==================>>>>>
    // 产品审查
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    }, 

    // 申诉审查完成状态查询
    // ==================>>>>>
    // 产品审查
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    },
    
    // ELV审核完成状态查询
    // ==================>>>>>
    // ELV验证状态
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    },
    
    // ELV反馈验证状态
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    },

    // 信息查询
    // ==================>>>>>
    // 产品审核
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    },

    // 专用车名称备案信息
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    },
    
    // 发动机系族信息
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    },

    // 财税优惠目录
    {
        path: 'Acceptanceauditconclusionfbmanag_onekey',
        redirect: 'Acceptanceauditconclusionfbmanag_onekey/Acceptanceauditconclusionfbmanag_onekey',
        component: resolve =>
            require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey.vue"], resolve),
            children: [{
                    path: 'Acceptanceauditconclusionfbmanag_onekey',
                    component: resolve =>
                        require(["../../components/page/zjd/Acceptanceauditconclusionfbmanag_onekey/List.vue"], resolve)
                }
            ]
    },
]