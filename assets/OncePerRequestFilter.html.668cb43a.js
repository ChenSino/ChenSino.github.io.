import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as l,b as e,a as n,d as t,r as i}from"./app.4dca7b9c.js";const a={},c=e("h2",{id:"_1\u3001onceperrequestfilter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1\u3001onceperrequestfilter","aria-hidden":"true"},"#"),t(" 1\u3001OncePerRequestFilter")],-1),_=e("p",null,[e("code",null,"org.springframework.web.filter.OncePerRequestFilter"),t('\u662Fspringweb\u4E2D\u7684\u4E00\u4E2A\u8FC7\u6EE4\u5668\uFF0C\u662F\u4E3A\u4E86\u786E\u4FDD\u4E00\u4E2A\u8BF7\u6C42\u53EA\u88AB\u8FC7\u6EE4\u5668\u6267\u884C\u4E00\u6B21\u3002\u4EC0\u4E48\uFF1F\u96BE\u9053\u4E00\u4E2A\u8BF7\u6C42\u8FD8\u80FD\u88AB\u540C\u4E00\u4E2A\u8FC7\u6EE4\u5668\u6267\u884C\u591A\u6B21\uFF1F \u5176\u5B9E\u662F\u6709\u8FD9\u4E2D\u53EF\u80FD\u7684\uFF0C\u5728\u4E0D\u540C\u7248\u672C\u4E0B\u7684servlet\u4E0B\uFF0C\u8FC7\u6EE4\u5668\u7684\u884C\u4E3A\u662F\u4E0D\u4E00\u6837\u7684\u3002\u6BD4\u5982\u5728servlet-2.3\u4E2D\uFF0CFilter\u4F1A\u8FC7\u6EE4\u4E00\u5207\u8BF7\u6C42\uFF0C\u5305\u62EC\u670D\u52A1\u5668\u5185\u90E8\u4F7F\u7528forward\u8F6C\u53D1\u8BF7\u6C42\u548C<%@ include file="/index.jsp"%>\u7684\u60C5\u51B5\u3002\u5230\u4E86servlet-2.4\u4E2DFilter\u9ED8\u8BA4\u4E0B\u53EA\u62E6\u622A\u5916\u90E8\u63D0\u4EA4\u7684\u8BF7\u6C42\uFF0Cforward\u548Cinclude\u8FD9\u4E9B\u5185\u90E8\u8F6C\u53D1\u90FD\u4E0D\u4F1A\u88AB\u8FC7\u6EE4\u3002\u56E0\u4E3ASpringweb\u65E0\u6CD5\u4FDD\u8BC1\u6BCF\u4E2A\u7528\u6237\u4F7F\u7528\u7684Servlet\u5BB9\u5668\u662F\u4E00\u6837\u7684\uFF0C\u56E0\u6B64\uFF0C\u5728\u6709\u4E9B\u573A\u666F\u5982\u679C\u6211\u4EEC\u8981\u786E\u4FDD\u540C\u4E00\u4E2A\u8BF7\u6C42\u53EA\u80FD\u88AB\u8FC7\u6EE4\u5668\u5904\u7406\u4E00\u6B21\uFF0C\u90A3\u5C31\u9700\u8981spring\u81EA\u5DF1\u6765\u5B9E\u73B0\u4E86\uFF0C\u56E0\u6B64\u6709\u4E86\u8FD9\u4E2A\u7C7B\u3002\u5176\u6CE8\u91CA\u4E0B\u5199\u7684\u5F88\u6E05\u695A\uFF0C\u5C31\u662F\u4E3A\u4E86\u8981\u9648any servlet container\u90FD\u786E\u4FDD\u53EA\u6267\u884C\u4E00\u6B21\u3002')],-1),d=e("p",null,[e("img",{src:"https://afatpig.oss-cn-chengdu.aliyuncs.com/blog/20221103172449.png",alt:"20221103172449",loading:"lazy"})],-1),h=t("\u6700\u5F00\u59CB\u88AB\u8BEF\u5BFC\u662F\u56E0\u4E3A\u770B\u4E86"),p={href:"https://www.baeldung.com/spring-onceperrequestfilter",target:"_blank",rel:"noopener noreferrer"},u=t("\u8FD9\u7BC7"),g=e("img",{src:"https://afatpig.oss-cn-chengdu.aliyuncs.com/blog/20221103173249.png",alt:"20221103173249",loading:"lazy"},null,-1),f=t(" \u770B\u5B8C\u8FD9\u7BC7\uFF0C\u6211\u5C31\u505A\u5B9E\u9A8C\u60F3\u590D\u73B0\u4ED6\u8BF4\u7684\u8FD9\u4E2A\uFF0C\u56E0\u4E3A\u6211\u7528\u7684springboot,\u5185\u5D4C\u7684tomcat\u662F9.x\u7248\u672C\uFF0C\u5BF9\u5E94\u7684servlet\u662F4.0\uFF0C\u8FD9\u4E2A\u7248\u672Cservlet\u4E0D\u5B58\u5728\u5B83\u8BF4\u7684\u95EE\u9898\uFF0C\u6240\u4EE5\u4E00\u76F4\u65E0\u6CD5\u590D\u73B0\uFF0C\u5BFC\u81F4\u6211\u7406\u89E3\u51FA\u73B0\u4E86\u504F\u5DEE\u3002\u540E\u6765\u770B\u4E86\u522B\u4EBA\u535A\u5BA2\uFF0C\u624D\u77E5\u9053\u600E\u4E48\u56DE\u4E8B\u3002"),m=e("h2",{id:"_2\u3001\u53C2\u8003",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2\u3001\u53C2\u8003","aria-hidden":"true"},"#"),t(" 2\u3001\u53C2\u8003")],-1),b={href:"https://blog.csdn.net/weixin_43944305/article/details/119923969",target:"_blank",rel:"noopener noreferrer"},v=t("Spring\u7684OncePerRequestFilter\u8FC7\u6EE4\u5668"),x=e("br",null,null,-1),w={href:"https://blog.csdn.net/zl1zl2zl3/article/details/79270664",target:"_blank",rel:"noopener noreferrer"},q=t("Spring\u7684OncePerRequestFilter\u7684\u4F5C\u7528");function k(F,O){const r=i("ExternalLinkIcon");return s(),l("div",null,[c,_,d,e("p",null,[h,e("a",p,[u,n(r)]),g,f]),m,e("p",null,[e("a",b,[v,n(r)]),x,e("a",w,[q,n(r)])])])}var y=o(a,[["render",k],["__file","OncePerRequestFilter.html.vue"]]);export{y as default};
