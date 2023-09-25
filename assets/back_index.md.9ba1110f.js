import{_ as s,o as n,c as a,U as l}from"./chunks/framework.76b79cb5.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"back/index.md","filePath":"back/index.md","lastUpdated":1695625267000}'),e={name:"back/index.md"},p=l(`<h2 id="身份认证" tabindex="-1">身份认证 <a class="header-anchor" href="#身份认证" aria-label="Permalink to &quot;身份认证&quot;">​</a></h2><ul><li>session <ul><li>Session Cookies 是存储在服务器内存中，耗费大量的资源</li><li>cookie 默认情况下，跨域是不会携带cookie的，需要修改请求 <code>xhrFields: { withCredentials: true }</code></li></ul></li><li>jwt <ul><li>Header.payload.signature</li><li>认证信息不存在后端，后端只做身份验证，通过则返回数据，降低服务器查询次数</li></ul><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki monokai"><code><span class="line"><span style="color:#88846F;">// Header 标头</span></span>
<span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">&quot;alg&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;HS256&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">&quot;typ&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;JWT&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#88846F;">// payload 有效载荷</span></span>
<span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">&quot;id&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;1234567890&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">&quot;exp&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;1234567890&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">&quot;name&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;name&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">&quot;admin&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#88846F;">// signature 签名</span></span>
<span class="line"><span style="color:#F8F8F2;">HMACSHA</span><span style="color:#AE81FF;">256</span><span style="color:#F8F8F2;">(base</span><span style="color:#AE81FF;">64</span><span style="color:#F8F8F2;">UrlEncode(Header) + </span><span style="color:#E6DB74;">&quot;.&quot;</span><span style="color:#F8F8F2;"> + base</span><span style="color:#AE81FF;">64</span><span style="color:#F8F8F2;">UrlEncode(payload), secret)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 把 Header、Payload、Signature 三个部分拼成一个字符串，每个部分之间用&quot;点&quot;（.）分隔</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// request 请求</span></span>
<span class="line"><span style="color:#F8F8F2;">Authorization: Bearer &lt;token&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li></ul>`,2),o=[p];function t(r,c,i,F,u,y){return n(),a("div",null,o)}const m=s(e,[["render",t]]);export{d as __pageData,m as default};
