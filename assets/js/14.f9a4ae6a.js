(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{107:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"spring支持aop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring支持aop","aria-hidden":"true"}},[t._v("#")]),t._v(" spring支持aop")]),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),s("p",[t._v('xmlns:aop="http://www.springframework.org/schema/aop"')]),s("blockquote",[s("p",[t._v("xsd路径不要写错，可以参考看aop的jar包")])]),s("p",[t._v("http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd")]),s("h2",{attrs:{id:"默认已经有aop的包了，增加-aspectjweaver-即可。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认已经有aop的包了，增加-aspectjweaver-即可。","aria-hidden":"true"}},[t._v("#")]),t._v(" 默认已经有AOP的包了，增加 aspectjweaver 即可。")]),s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- https://mvnrepository.com/artifact/org.aspectj/aspectjweaver --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.aspectj"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("aspectjweaver"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.8.10"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("h2",{attrs:{id:"切返回指定类型的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切返回指定类型的方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 切返回指定类型的方法")]),s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- aop --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("aop:")]),t._v("aspectj-autoproxy")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("beans:")]),t._v("bean")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("controllerAop"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.huawei.plm.common.aop.ControllerAOP"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("aop:")]),t._v("config")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("aop:")]),t._v("aspect")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myAop"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("controllerAop"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("aop:")]),t._v("pointcut")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("target"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("expression")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("execution(public com.huawei.plm.common.beans.ResultBean *(..))"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token comment"}},[t._v('\x3c!-- \n\t\t<aop:before method="checkValidity" pointcut-ref="target" /> \n\t\t<aop:after method="addLog" pointcut-ref="target" />\n\t\t--\x3e')]),t._v("\n\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("aop:")]),t._v("around")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handlerControllerMethod"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("pointcut-ref")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("target"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{attrs:{class:"token namespace"}},[t._v("aop:")]),t._v("aspect")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{attrs:{class:"token namespace"}},[t._v("aop:")]),t._v("config")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("h2",{attrs:{id:"强制使用cglib"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强制使用cglib","aria-hidden":"true"}},[t._v("#")]),t._v(" 强制使用cglib")]),s("p",[t._v("To force the use of CGLIB proxies set the value of the proxy-target-class attribute of the "),s("a",{attrs:{href:"aop:config"}},[t._v("aop:config")]),t._v(" element to true:")]),s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("aop:")]),t._v("config")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("proxy-target-class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- other beans defined here... --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{attrs:{class:"token namespace"}},[t._v("aop:")]),t._v("config")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("h2",{attrs:{id:"java代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java代码","aria-hidden":"true"}},[t._v("#")]),t._v(" java代码")]),s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ControllerAOP")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" ResultBean"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("handlerControllerMethod")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ProceedingJoinPoint pjp"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);a.default=e.exports}}]);