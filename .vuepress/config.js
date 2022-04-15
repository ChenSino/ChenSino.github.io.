module.exports = {
    base: '/',
    "title": "Cute baby Sino Chen",
    "description": "Good good study ,day day up!",
    "dest": "public",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    "themeConfig": {
        vssueConfig: {
            platform: 'github',
            owner: 'ChenSino',
            repo: 'ChenSino.github.io',
            clientId: '8730ff09031fd6fcc754',
            clientSecret: '655372b976941560dfe0e2a8e6d34ab4b162353e',
        },
        lastUpdated: '上次更新', // string | boolean
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        "nav": [
            {
                "text": "Home",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "Java",
                "icon": "reco-blog",
                "items": [
                    {
                        text: "Java Core",
                        items: [
                            {
                                "text": "Java基础",
                                "link": "/docs/java/base/"
                            },
                            {
                                "text": "Jvm",
                                "link": "/docs/java/jvm/"
                            },
                            {
                                "text": "Java进阶",
                                "link": "/docs/java/advance/"
                            },
                        ]
                    },
                    {
                        text: "Java FrameWork",
                        items: [
                            {
                                "text": "Spring",
                                "link": "/docs/java/framework/spring/"
                            },
                            {
                                "text": "SpringBoot",
                                "link": "/docs/java/framework/springboot/SpringBootAutoConfiguration"
                            },
                            {
                                "text": "Mybatis",
                                "link": "/docs/java/framework/mybatis/mybatis"
                            }
                        ]
                    },
                    {
                        text: "分布式微服务",
                        items: [
                            {
                                "text": "分布式",
                                "link": "/docs/distributeservice/"
                            }
                        ]
                    }
                ]
            },
            {
                "text": "web前端",
                "icon": "reco-blog",
                items: [
                    {
                        "text": "javascript基础",
                        "link": "/docs/frontWeb/javascript/"
                    },
                    {
                        "text": "vue知识点",
                        "link": "/docs/frontWeb/vue/"
                    }
                ]
            },
            {
                "text": "Linux",
                "link": "/docs/linux/"
            },
            {
                "text": "工具软件",
                "link": "/docs/tools/"
            },
            {
                "text": "每日一记",
                "link": "/docs/daily/"
            },
            {
                "text": "随笔杂记",
                "link": "/docs/essay/"
            },
            {
                "text": "TimeLine",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "Contact",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "GitHub",
                        "link": "https://github.com/chensino",
                        "icon": "reco-github"
                    }
                ]
            }
        ],
        "sidebar": {
            //java基础
            "/docs/java/base/": [
                "",
                "ConstantPool",
                "IntegerConstantPool",
                "String",
                "Serialization",
                "CustomLRU"
            ],
            //jvm
            "/docs/java/jvm/": [
                "",
                "SetObjectNull",
                "StringAdd",
                "NewObject"
            ],
            //java进阶
            "/docs/java/advance/": [
                "",
                "ProxyInjava",
                "Mysql8主从复制搭建",
                "ThreadPool",
                "ParentDelegationClassloader",
                "Collection"
            ],
            //java框架Spring
            "/docs/java/framework/spring/": [
                "",
                "SpringExtensionPoint",
                "DesignPatternInSpring",
                "SpringCache",
                "BeanPostProcessor"
            ],
            //java框架SpringBoot
            "/docs/java/framework/springboot/": [
                "SpringBootAutoConfiguration",
                "AOPLog"
            ],
            //java框架Mybatis
            "/docs/java/framework/mybatis/": [
                "mybatis"
            ],
            "/docs/frontWeb/vue/":[
                "",
                "vue-router1",
                "vue-nextTick"
            ],
            "/docs/frontWeb/javascript/": [
                "",
                "aboutAsync",
                "01"
            ],
            //随笔
            "/docs/essay/": [
                "",
                "TyporaPicgo",
                "DeployGithubPage",
                "CDN",
                "GreatWallProxy",
                "Jenkins"
            ],
            //linux
            "/docs/linux/": [
                "",
                "CommonUsedCMD",
                "Manjaro"
            ],
            "/docs/tools/": [
                "",
                "IdeaActivation"
            ],
            //每日一记
            "/docs/daily/": [
                "",
                "2022-03-17",
                "2022-03-18",
                "Service",
                "2022-04-12"
            ],
            //分布式微服务
            "/docs/distributeservice/": [
                "",
                "DistributeLock"
            ],
        },
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "Category"
            },
            "tag": {
                "location": 3,
                "text": "Tag"
            }
        },
        "friendLink": [
            {
                "title": "vuepress-theme-reco",
                "desc": "A simple and beautiful vuepress Blog & Doc theme.",
                "avatar": "/avatar.jpg",
                "link": "https://vuepress-theme-reco.recoluan.com"
            }
        ],
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "上次更新",
        "author": "chenkun",
        "authorAvatar": "/avatar.jpg",
        "record": "Just go go go",
        "startYear": "2017"
    },
    "markdown": {
        "lineNumbers": true
    },
    plugins: ['@vuepress/last-updated', 'vuepress-plugin-mermaidjs']
}
