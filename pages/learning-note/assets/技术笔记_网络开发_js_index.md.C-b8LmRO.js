import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.CMEibtfH.js";const c=JSON.parse('{"title":"JavaScript","description":"","frontmatter":{},"headers":[],"relativePath":"技术笔记/网络开发/js/index.md","filePath":"技术笔记/网络开发/js/index.md","lastUpdated":1714483350000}'),n={name:"技术笔记/网络开发/js/index.md"},l=t(`<h1 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h1><h2 id="知识点" tabindex="-1">知识点 <a class="header-anchor" href="#知识点" aria-label="Permalink to &quot;知识点&quot;">​</a></h2><ul><li>数值是用 4 个字节表示的，整数 (不使用小数点或指数计数法) 最多为 15 位。小数的最大位数是 17。</li><li>非严格模式中，undefined 可作为标识符（能被当作变量名来使用和赋值）。</li><li>比较运算符（&gt;、&gt;=、&lt;、&lt;=）做判断时，有一个操作数为 NaN，则结果返回 false。</li><li>位运算符会自动将数值类型的操作数转换成整数。</li><li>可以用取反运算符（~）判断变量值是否等于 -1，例如 ~x === -(x + 1)、~-1 === 0。</li><li>对于 null、undefined、字符串、对象等操作数进行取反时，返回结果都是 -1。</li><li>for/in 语句可以遍历出对象及其原型上可枚举的方法及属性。</li><li>使用 Array.protoType.fill() 方法填充复杂类型变量时，数组每一项会指向同一个变量。</li><li>使用 Number() 方法转换数值时，undefined 转成 NaN，null 转成 0。</li><li>Object.is() 方法判断两变量相等，不会强制转换两边的值，+0 与 -0 判为不等，NaN 与 NaN 判为相等。</li><li>Set 对象允许存储任何类型的唯一值，无论是原始值或者是对象引用，判断类似于恒等 ===，但 NaN 只能存一个。</li><li>不要在 script 标签内直接使用 await，有些环境支持，有些环境不支持。</li></ul><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures" target="_blank" rel="noreferrer">JS 数据类型</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy" target="_blank" rel="noreferrer">假值</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#%E6%B1%87%E6%80%BB%E8%A1%A8" target="_blank" rel="noreferrer">算符优先级列表</a> 👍</li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes" target="_blank" rel="noreferrer">正则表达式转义字符</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions" target="_blank" rel="noreferrer">正则表达式断言</a> 👍</li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new#%E6%8F%8F%E8%BF%B0" target="_blank" rel="noreferrer">new 运算符创建对象过程</a> 👍</li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators#iterables" target="_blank" rel="noreferrer">迭代器与生成器</a></li><li><a href="https://irian.to/blogs/what-are-cjs-amd-umd-and-esm-in-javascript/" target="_blank" rel="noreferrer">对比 CJS/AMD/UMD/ESM 模块</a></li><li><a href="https://github.com/isLishude/blog/issues/179" target="_blank" rel="noreferrer">指定 console 内容文字颜色</a></li></ul><h2 id="归纳" tabindex="-1">归纳 <a class="header-anchor" href="#归纳" aria-label="Permalink to &quot;归纳&quot;">​</a></h2><p>判断属性存在的方式：</p><table><thead><tr><th>判断方式</th><th>描述</th></tr></thead><tbody><tr><td>in</td><td>判断属性是否存在指定对象中，不区分是否来自继承，是否可枚举</td></tr><tr><td>Object.hasOwnProperty</td><td>判断属性是自身的，而不是从原型链继承的</td></tr><tr><td>Object.propertyIsEnumerable</td><td>判断属性是自有的，且是可枚举的</td></tr></tbody></table><p>获取属性的方式：</p><table><thead><tr><th>获取方式</th><th style="text-align:center;">可枚举属性</th><th style="text-align:center;">不可枚举属性</th><th style="text-align:center;">symbol 属性</th><th style="text-align:center;">继承属性</th></tr></thead><tbody><tr><td>Object.keys</td><td style="text-align:center;">√</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td>Object.getOwnPropertyNames</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr><tr><td>Object.getOwnPropertySymbols</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td><td style="text-align:center;">√</td><td style="text-align:center;">×</td></tr><tr><td>Reflect.ownKeys</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">×</td></tr></tbody></table><p>变量声明方式对比：</p><table><thead><tr><th>声明方式</th><th style="text-align:center;">提升创建、初始化、赋值过程</th><th style="text-align:center;">可在声明前使用</th></tr></thead><tbody><tr><td>var</td><td style="text-align:center;">√ √ ×</td><td style="text-align:center;">可以，但为 undefined</td></tr><tr><td>let</td><td style="text-align:center;">√ × ×</td><td style="text-align:center;">不可以</td></tr><tr><td>const</td><td style="text-align:center;">√ × ×</td><td style="text-align:center;">不可以</td></tr><tr><td>function</td><td style="text-align:center;">√ √ √</td><td style="text-align:center;">可以</td></tr><tr><td>class</td><td style="text-align:center;">√ × ×</td><td style="text-align:center;">不可以</td></tr></tbody></table><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>隐式转换：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-4nxZw" id="tab-M8-IrX-" checked="checked"><label for="tab-M8-IrX-">判断相等</label><input type="radio" name="group-4nxZw" id="tab-HOxySLV"><label for="tab-HOxySLV">作加法</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出 true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 转换过程：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 首先执行取非运算（算符优先级 &#39;!&#39; &gt; &#39;==&#39;），得到 [] == false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 遇到布尔值先转换成数字（双等号运算规则），得到 [] == 0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3. 复杂类型需转换成基本类型（调用 toString() 方法），得到 &#39;&#39; == 0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 4. 再将字符串转换成数字，得到 0 == 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出 true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 也是左右转换成数字，得到 0 == 0</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`[] + {}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 结果为 &quot;[object Object]&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [] 转换为 &quot;&quot;，{} 转换为 &quot;[object Object]&quot;，相加为 &quot;[object Object]&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`{} + []\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 结果为 0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// {} 被解析为代码块，语句等价于 +[]，结果转换为 0</span></span></code></pre></div></div></div><p>使用生成器函数给对象提供 for/of 遍历方式：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> objectEntries</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> propKeys</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Reflect.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ownKeys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 返回对象所有的属性，不管属性是否可枚举，包括 Symbol</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> propKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> propKeys) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    yield</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [propKey, obj[propKey]];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> jane</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { first: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Jane&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, last: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Doe&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">of</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> objectEntries</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(jane)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出 &quot;first: Jane&quot;，&quot;last: Doe&quot;</span></span></code></pre></div><p>使用 Set 对象实现集合运算:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 数组去重</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a1)];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 求并集</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> union </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a1, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a2]); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Set {1, 2, 3, 4}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 求交集</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> intersect </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a2.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">has</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x))); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// set {2, 3}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 求差集</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> difference </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a2.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">has</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x))); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Set {1}</span></span></code></pre></div><p>不使用额外变量交换两个变量的值：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 加减法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 按位异或法，假设 a = 10010011, b = 01010110</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// a = 11000101</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// b = 10010011</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// a = 01010110</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用逗号运算符</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [b, (b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a)][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div>`,21),e=[l];function h(p,k,r,d,E,g){return a(),i("div",null,e)}const o=s(n,[["render",h]]);export{c as __pageData,o as default};
