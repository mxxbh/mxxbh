import{_ as e,c as o,o as c,a2 as d}from"./chunks/framework.CMEibtfH.js";const p=JSON.parse('{"title":"严格模式","description":"","frontmatter":{},"headers":[],"relativePath":"技术笔记/网络开发/js/严格模式.md","filePath":"技术笔记/网络开发/js/严格模式.md","lastUpdated":1713098747000}'),l={name:"技术笔记/网络开发/js/严格模式.md"},a=d('<h1 id="严格模式" tabindex="-1">严格模式 <a class="header-anchor" href="#严格模式" aria-label="Permalink to &quot;严格模式&quot;">​</a></h1><p>使用 <code>use strict</code> 语句启动严格模式。</p><h2 id="严格模式和宽松模式对比" tabindex="-1">严格模式和宽松模式对比 <a class="header-anchor" href="#严格模式和宽松模式对比" aria-label="Permalink to &quot;严格模式和宽松模式对比&quot;">​</a></h2><ul><li>严格模式禁止使用 <code>with</code> 语句，非严格模式允许。</li><li>严格模式中给未声明的元素赋值 (包括变量、函数、函数参数、catch 从句参数或全局对象的属性) 将抛出引用错误，非严格模式允许。</li><li>严格模式中函数调用的 <code>this</code> 值为 <code>undefined</code>，非严格模式中是全局对象。</li><li>严格模式中通过 <code>call()</code> 或 <code>apply()</code> 调用函数且第一个参数设为 <code>null</code> 或 <code>undefined</code> 将会报错，非严格模式中会默认指定全局对象。</li><li>严格模式中给只读属性赋值和给不可扩展的对象创建新成员将会报错，非严格模式会静默失败，不报错。</li><li>严格模式中使用 <code>eval()</code> 函数不能调用程序所在上下文中声明的变量或函数，非严格模式中可以。</li><li>严格模式中函数 <code>arguments</code> 对象是传入参数的静态副本，非严格模式中 <code>arguments</code> 里的数组元素和函数都指向实参值的引用。</li><li>严格模式中 <code>delete</code> 运算符后跟随非法的标识符，比如变量、函数、函数参数时会抛出语法错误，非严格模式中会静默失败，并返回 <code>false</code>。</li><li>严格模式中删除不可配置属性时会抛出类型错误，非严格模式中会静默失败，并返回 <code>false</code>。</li><li>严格模式中对象定义两个或多个同名属性会报错，非严格模式中不会报错。</li><li>严格模式中函数存在两个或多个同名的参数会报错，非严格模式中不会报错。</li><li>严格模式中使用 <code>0</code> 为前缀定义八进制整数是不允许的，非严格模式中某些实现是允许的。</li><li>严格模式中的 <code>eval</code> 和 <code>arguments</code> 被当做关键字，不能更改，不能被赋值，不能声明为其他变量，非严格模式中可以。</li><li>严格模式中使用 <code>arguments.caller</code> 和 <code>arguments.callee</code> 会报错，非严格模式中不会。</li></ul>',4),i=[a];function t(s,r,n,_,u,h){return c(),o("div",null,i)}const f=e(l,[["render",t]]);export{p as __pageData,f as default};
