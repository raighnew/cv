(function(t){function e(e){for(var a,l,o=e[0],r=e[1],c=e[2],u=0,p=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&p.push(s[l][0]),s[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,o=1;o<i.length;o++){var r=i[o];0!==s[r]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=i[0]))}return t}var a={},s={app:0},n=[];function l(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=a,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(i,a,function(e){return t[e]}.bind(null,a));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=r;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0d2b":function(t,e,i){t.exports=i.p+"img/head.ef79a3e2.png"},"50f7":function(t){t.exports=JSON.parse('[{"id":5,"name":{"en":"Public API and SDK","cn":"Public API and SDK"},"describe":{"en":"In Datature, to enhance our customers\' capabilities, I developed public APIs and SDKs to facilitate the seamless integration of our AI platform with their business operations. The API is crafted in TypeScript and comes with comprehensive inline documentation. Once the code is merged into the main branch, it is automatically deployed on Google Kubernetes Engine, and the documentation is published to our developer portal. We employ Kong as our gateway to offer public services, which includes key authentication and rate limiting setup on Kong, ensuring service protection while providing additional value for paying users. The SDK was developed in Python and it comes with a Command Line Interface (CLI), which allows customers to integrate it into their proprietary code. The CLI provides a variety of useful functions, such as the ability to upload assets directly from a local folder.","cn":"在 Datature，为了提高客户的能力，我开发了公共 API 和 SDK，以促进我们的人工智能平台与客户业务运营的无缝集成。API 采用 TypeScript 编写，并附带全面的内联文档。代码一旦合并到主分支，就会自动部署到谷歌 Kubernetes 引擎上，文档也会发布到我们的开发人员门户网站上。我们使用 Kong 作为提供公共服务的网关，其中包括在 Kong 上设置密钥验证和速率限制，以确保在为付费用户提供额外价值的同时保护服务。SDK 是用 Python 开发的，它带有命令行界面 (CLI)，客户可以将其集成到自己的专有代码中。CLI 提供各种有用的功能，例如直接从本地文件夹上传资产。"}},{"id":3,"name":{"en":"Payment and Payout Service","cn":"支付服务"},"describe":{"en":"The payment service was developed in TypeScript to encapsulate third-party logic for our POS and Web platforms. Employing polymorphism, I integrated various payment methods such as TNG, Stripe, and GrabPay, enabling seamless payment support for other services. Throughout the project development, I embraced Test-Driven Development (TDD), recognizing its significance in ensuring robustness and reliability.","cn":"支付服务是用 TypeScript 开发的，目的是为我们的 POS 和 Web 平台封装第三方逻辑。利用多态性，我集成了 TNG、Stripe 和 GrabPay 等各种支付方法，实现了对其他服务的无缝支付支持。在整个项目开发过程中，我采用了测试驱动开发（TDD），因为我认识到它在确保稳健性和可靠性方面的重要性。"}},{"id":1,"name":{"en":"Kubernetes Projects","cn":"Kubernetes 项目"},"describe":{"en":"During the development of the Public API, I engaged in Kubernetes development within a production environment. I authored a complete CI/CD pipeline to facilitate rolling updates of deployments within Kubernetes, utilizing Kong as the API gateway. On the Kong gateway, I wrote a custom rate-limiting plugin in Lua, which not only enhanced API availability and stability but also improved the system\'s capacity to handle high-traffic volumes. My efforts significantly shortened the product iteration cycle, ensured rapid rollback in the event of incremental update issues, and minimized the risk of system instability. Additionally, I integrated the entire cluster with Grafana, making it more convenient to monitor cluster resources and health status.","cn":"在开发Public API的过程中，我实践了在生产环境中使用Kubernetes的开发。我编写了完整的CI/CD流程，实现了对Kubernetes中部署的滚动更新，并采用Kong作为API网关。在Kong网关上，我用Lua语言编写了自定义的限流插件，这不仅提高了API的可用性和稳定性，还增强了系统对高流量的处理能力。我的这些工作有效地缩短了产品迭代周期，同时确保了在增量更新中发生问题时可以快速回滚，最大限度地降低了系统的不稳定性风险。整个集群接入了grafana, 更方便的了解集群的资源，以及健康度程度。"}}]')},5619:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Index")],1)},n=[],l=i("86d6"),o={name:"app",components:{Index:l["default"]}},r=o,c=(i("e18d"),i("2877")),d=Object(c["a"])(r,s,n,!1,null,null,null),u=d.exports,p=i("a925"),f={title:"翁生的简历",basicInfo:"基础信息",name:"姓名",myName:"翁生",degree:"学历",myDegree:"本科",major:"专业",myMajor:"通信工程",school:"毕业院校",mySchool:"湖南工学院",education:"教育经历",graduateTime:"毕业年份",myGraduateTime:"2017",contact:"联系方式",mobile:"手机",myMobile:"(86) 132-7671-1862",email:"邮箱",myEmail:"raighne.weng@gmail.com",page:"个人主页",myPage:"www.raighne.xyz",skills:"技能点",skillMap:"技术栈",devOps:"DevOps",backEnd:"后端",other:"其他",embedded:"TensorFlow",college:"湖南工学院 - 通信工程 2013-2017",lang:"英语四级",experience:"工作经验",projects:"项目经验",selfAssessment:"自我评价",mySelfAssessment:"我是一个崇尚工程师文化、热爱计算机、喜欢钻研的IT工程师。多年的工作经验，让我认识到了自我的渺小，站在人类巨灵的肩膀上 Stay hungry. Stay foolish. 我目前正在寻找后端工程师岗位，希望借此机会为贵司献上我的一点绵薄之力~"},m={title:"Raighne's CV",basicInfo:"Personal Information",name:"Name",myName:"Raighne.Weng",degree:"Degree",myDegree:"Bachelor Degree",major:"Major",myMajor:"Communication Engineering",school:"School",mySchool:"Hunan Institute of Technology",education:"Education",graduateTime:"Graduation Year",myGraduateTime:"2017",contact:"Contact",mobile:"Mobile",myMobile:"(65) 8053-1077",email:"Email",myEmail:"raighne.weng@gmail.com",page:"HomePage",myPage:"www.raighne.xyz",skills:"Skills",skillMap:"SkillMap",devOps:"DevOps",backEnd:"BackEnd",other:"Other",embedded:"TensorFlow",college:"Hunan Institute of Technology - Communication Engineering",lang:"CET-6",experience:"Experience",projects:"Projects",selfAssessment:"Self Assessment",mySelfAssessment:"I am an IT engineer who admires the engineering culture, loves computer science and is willing to learn new things. Currently I am looking for a development engineer position, I hope to take the opportunity to contribute to your company."};a["a"].use(p["a"]);var h=new p["a"]({locale:"cn",messages:{cn:f,en:m}}),v=h,b=function(t){return Promise.resolve().then(function(){var e=[i("86d6")];t.apply(null,e)}.bind(this)).catch(i.oe)},y=[{path:"/",component:b},{path:"*",hidden:!0,redirect:{path:"/404"}}],_=y,g=i("8c4f");a["a"].config.productionTip=!1;var C=new g["a"]({mode:"history",routes:_});new a["a"]({router:C,i18n:v,render:function(t){return t(u)}}).$mount("#app")},"86d6":function(t,e,i){"use strict";i.r(e);i("7f7f");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container",attrs:{id:"cv"}},[e("div",{staticClass:"side"},[e("div",{staticClass:"me"}),e("div",{staticClass:"profile info-unit"},[e("h2",{staticClass:"info-header"},[e("i",{staticClass:"iconfont icon-person"}),e("span",{staticClass:"info-title",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("basicInfo")))]),t._m(0),t._m(1)]),e("hr"),e("ul",{staticClass:"info-list"},[e("li",[e("label",{staticClass:"left-label",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("name")))]),e("span",{staticClass:"label-value",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("myName")))]),t._m(2)]),e("li",[e("label",{staticClass:"left-label",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("degree")))]),e("span",{staticClass:"label-value",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("myDegree")))]),t._m(3)]),e("li",[e("label",{staticClass:"left-label",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("school")))]),e("span",{staticClass:"label-value",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("mySchool")))]),t._m(4)]),e("li",[e("label",{staticClass:"left-label",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("major")))]),e("span",{staticClass:"label-value",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("myMajor")))]),t._m(5)]),e("li",[e("label",{staticClass:"left-label",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("graduateTime")))]),e("span",{staticClass:"label-value",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("myGraduateTime")))]),t._m(6)])])]),e("div",{staticClass:"contact info-unit"},[e("h2",{staticClass:"info-header"},[e("i",{staticClass:"iconfont icon-call"}),e("span",{staticClass:"info-title",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("contact")))]),t._m(7),t._m(8)]),e("hr"),e("ul",{staticClass:"info-list"},[e("li",[e("label",{staticClass:"left-label",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("mobile")))]),e("span",{staticClass:"label-value",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("myMobile")))]),t._m(9)]),e("li",[e("label",{staticClass:"left-label",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("email")))]),e("span",{staticClass:"label-value",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("myEmail")))]),t._m(10)]),e("li",[e("label",{staticClass:"left-label",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("page")))]),e("span",{staticClass:"label-value",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("myPage")))]),t._m(11)]),t._m(12)])]),e("div",{staticClass:"stack info-unit"},[e("h2",{staticClass:"info-header"},[e("i",{staticClass:"iconfont icon-build"}),e("span",{staticClass:"info-title",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("skillMap")))]),t._m(13),t._m(14)]),e("hr"),e("ul",{staticClass:"stack-list"},[e("li",[e("label",{staticClass:"left-label",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("devOps")))]),e("span",{staticClass:"label-value",attrs:{contenteditable:"true"}},[t._v("Kubernetes, Helm, Kong, Docker, CI/CD")]),t._m(15)]),e("li",[e("label",{staticClass:"left-label",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("backEnd")))]),e("span",{staticClass:"label-value",attrs:{contenteditable:"true"}},[t._v("Node.js TypeScript Python Go Lua MongoDB MySQL Redis Elasticsearch SQS gRPC")]),t._m(16)]),e("li",[e("label",{staticClass:"left-label",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("other")))]),e("span",{staticClass:"label-value",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("embedded")))]),t._m(17)])])])]),e("div",{staticClass:"main"},[e("div",{staticClass:"work info-unit right-list"},[e("h2",{staticClass:"info-header"},[e("i",{staticClass:"iconfont icon-work"}),e("span",{staticClass:"info-title",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("experience")))]),t._m(18),t._m(19)]),e("hr"),e("ul",{staticClass:"experience-list"},t._l(t.workExperiences,(function(i){return e("li",{key:i.id},[e("h3",{attrs:{contenteditable:"true"}},[t._v(t._s(i.name[t.locale]))]),e("p",{attrs:{contenteditable:"true"}},[t._v(t._s(i.describe[t.locale]))]),t._m(20,!0)])})),0)]),e("div",{staticClass:"project info-unit right-list"},[e("h2",{staticClass:"info-header"},[e("i",{staticClass:"iconfont icon-project"}),e("span",{staticClass:"info-title",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("projects")))]),t._m(21),t._m(22)]),e("hr"),e("ul",{staticClass:"experience-list"},t._l(t.workProjects,(function(i){return e("li",{key:i.id},[e("h3",{attrs:{contenteditable:"true"}},[t._v(t._s(i.name[t.locale]))]),e("p",{attrs:{contenteditable:"true"}},[t._v(t._s(i.describe[t.locale]))]),t._m(23,!0)])})),0)]),e("div",{staticClass:"aboutme info-unit right-paragraph"},[e("h2",{staticClass:"info-header"},[e("i",{staticClass:"iconfont icon-flower"}),e("span",{staticClass:"info-title",attrs:{contenteditable:"true"}},[t._v(t._s(t.$t("selfAssessment")))]),t._m(24)]),e("hr"),e("p",{attrs:{contenteditable:"true"}}),e("p",{staticStyle:{padding:"0px",cursor:"default",color:"rgb(0, 77, 64)","font-family":"'Helvetica Neue', Helvetica, 'Lucida Grande', Arial, 'Hiragino Sans GB', 微软雅黑, 'WenQuanYi Micro Hei', STHeiti, SimSun, sans-serif","font-size":"18px","text-indent":"36px"}},[t._v(t._s(t.$t("mySelfAssessment")))])])])])},s=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-add",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-playlistadd"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"unit-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-add",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-playlistadd"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"unit-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("li",[e("label",{staticClass:"left-label",attrs:{contenteditable:"true"}},[t._v("Github")]),e("span",{staticClass:"label-value",attrs:{contenteditable:"true"}},[e("span",{staticStyle:{"background-color":"rgb(245, 245, 245)",display:"inline !important"}},[t._v("github.com/raighneweng")])]),e("span",{staticClass:"item-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-add",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-playlistadd"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"unit-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-add",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-playlistadd"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"unit-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-add",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-playlistadd"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"unit-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"item-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"unit-remove",staticStyle:{visibility:"hidden"}},[e("i",{staticClass:"iconfont icon-delete"})])}],n=(i("386d"),i("1157")),l=i.n(n),o=i("50f7"),r=i("e859"),c=i("0d2b"),d=i.n(c),u={data:function(){return{locale:"cn",workProjects:o,workExperiences:r,headImage:d.a}},created:function(){document.title=this.$t("title");var t=window.location.search.substring(1),e=new URLSearchParams(t);"en"==e.get("lng")?this.locale="en":this.locale="cn",l()(document).ready((function(t){t("*").removeAttr("contenteditable")}))},watch:{locale:function(t){this.$i18n.locale=t}}},p=u,f=i("2877"),m=Object(f["a"])(p,a,s,!1,null,"7a2f7b45",null);e["default"]=m.exports},e18d:function(t,e,i){"use strict";i("5619")},e859:function(t){t.exports=JSON.parse('[{"id":"5","name":{"en":"Datature / 2022.08 - 2022.06","cn":"Datature / 2022.08 - 2022.06"},"describe":{"en":"As a Backend Developer at a Singapore-based AI Vision startup, I led the development of public APIs and SDKs. This initiative enabled clients to seamlessly upload and annotate assets, as well as train and deploy models, effectively putting powerful machine learning capabilities at their fingertips.","cn":"在新加坡一家人工智能视觉创业公司担任后端开发人员，领导开发了 Public API 和 SDK 。与社区紧密合作，了解分析研发用户需求，使用用户可以通过集成 SDK 完成上传资产，标注资产，训练并部署模型至云端的能力。"}},{"id":"4","name":{"en":"StoreHub / 2019.03 - 2022.08","cn":"StoreHub / 2019.03 - 2022.08"},"describe":{"en":"As a Backend Developer at a pioneering new retail startup in Malaysia, which successfully secured USD 8.9M in Series A funding led by Vertex Ventures, I played a key role in the company’s financial infrastructure. I developed payment products and integrated various third-party payment systems in Southeast Asia for our POS and online platforms. I also helped move our company to a microservices setup using Kubernetes and adopted Domain-Driven Design principles.","cn":"作为马来西亚一家新零售创业公司的后台开发人员，我在公司的金融基础设施方面发挥了关键作用。该公司成功获得了由 Vertex Ventures 领投的 890 万美元 A 轮融资。我开发了支付服务，并为我们的 POS 和 Web 平台整合了东南亚的各种第三方支付系统。我还使用 Kubernetes 和领域驱动设计原则，帮助公司转向微服务架构。"}},{"id":"3","name":{"en":"JiangSu ZhaoMi Technology / 2017.08 - 2019.03","cn":"江苏兆米技术有限公司 / 2017.08 - 2019.03"},"describe":{"en":"As a Full-Stack Developer at a collaborative bookstore technology service provider, I engaged in daily development of RESTful APIs and deepened my expertise in Node.js. I am well-versed in ES6 features, which I actively incorporate into production. I am passionate about architecture and software design patterns, I am committed to crafting elegant and scalable code.","cn":"作为一家合作书店技术服务提供商的全栈开发人员，我参与了 RESTful API 的日常开发工作，并加深了我在 Node.js 方面的专业知识。我精通 ES6 功能，并积极将其融入到生产中。我对架构和软件设计模式充满热情，致力于打造优雅、可扩展的代码。"}}]')}});
//# sourceMappingURL=app.48eaa013.js.map