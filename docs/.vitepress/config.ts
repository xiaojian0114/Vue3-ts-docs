import { tr } from 'element-plus/es/locales.mjs'
import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({

    title: "Vue 3 + TypeScript 学习文档",
    description: "详细学习 Vue3 和 TypeScript 的指南",
    themeConfig: {
        siteTitle: "前端学习",
        logo: "https://my-bucket-wyj.oss-cn-shanghai.aliyuncs.com/images/1.png",
        nav: [

            { text: "首页" , link: "/"},
            { text: "指南" , link: "/guide/" },
            { text: "组件" , link: "/components/" },
            { text: "API 参考", link: "/api/"},
            { text: "常见问题" , link: "/faq/"}, 
           
        ],
        socialLinks: [
            { icon:"github" , link:"https://github.com/xiaojian0114/Vue3-ts-docs"},
        ],

        sidebar: {
            "/guide/": [
                {
                    text: "开始",
                    collapsible: true,
                    items: [
                        { text: "介绍" , link: "/guide/" },
                        { text: "更新记录" , link:"/guide/Records"},
                        
                    ],
                },

            

                {
                    text: "Vueuse学习",
                    collapsible: true,
                    items: [
                        { text: "介绍" ,link: "/guide/indexVue"},
                        { text: "快速入门" , link: "/guide/installationVue"},
                        { text: "倒计时功能" , link: "/guide/CountDown"},
                        { text: "发送信息功能" , link: "/guide/SmsSender"},
                        { text: "表单验证功能" , link: "/guide/MyForm"},
                        { text: "白天黑夜切换" , link: "/guide/DarkModeToggle"},
                        { text: "拓展组合函数" , link: "/guide/ExpansionComponents" }


                    ]
                }
            ],

            "/components/": [
                {
                    text: "常用组件",
                    items: [

                        { text: "介绍" , link: "/components/"},
                        { text: "按钮 Button" , link: "/components/button" },
                        { text: "表单 Form", link: "/components/form" },
                        { text: "表格 Table", link: "/components/table" },
                       

                    ],
                },
            ],
        },

        footer: {
            message: "学 习 文 档",
            copyright: "超级睡觉王学习中心 © 未备案"
        }

    }
})
