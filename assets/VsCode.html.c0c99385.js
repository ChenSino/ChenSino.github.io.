import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as l,b as n,a as t,d as s,e,r as i}from"./app.015ff25d.js";const c={},r=n("blockquote",null,[n("p",null,"\u7248\u672C: 1.69.1 (user setup) \u63D0\u4EA4: b06ae3b2d2dbfe28bca3134cc6be65935cdfea6a \u65E5\u671F: 2022-07-12T08:21:24.514Z Electron: 18.3.5 Chromium: 100.0.4896.160 Node.js: 16.13.2 V8: 10.0.139.17-electron.0 OS: Windows_NT x64 6.1.7601")],-1),u=n("h3",{id:"_1-vscode\u7EC8\u7AEF\u65E0\u6CD5\u6253\u5F00",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-vscode\u7EC8\u7AEF\u65E0\u6CD5\u6253\u5F00","aria-hidden":"true"},"#"),s(" 1. vscode\u7EC8\u7AEF\u65E0\u6CD5\u6253\u5F00")],-1),d=n("blockquote",null,[n("p",null,"\u73B0\u8C61\uFF0C\u4F7F\u7528vscod\u6253\u5F00\u7EC8\u7AEF\u4E00\u76F4\u5361\u7740\u3002"),n("p",null,"\u89E3\u51B3\u65B9\u6CD5\u662F\u7981\u7528GPU\u52A0\u901F\uFF0C\u731C\u6D4B\u662F\u56E0\u4E3A\u516C\u53F8\u7535\u8111\u6CA1\u6709\u72EC\u663E\u7684\u539F\u56E0")],-1),k=s("1\u3001\u53D6\u6D88win7\u7684\u517C\u5BB9\u6A21\u5F0F 2\u3001\u542F\u52A8\u65B9\u5F0F\u540E\u52A0 --disable-"),v={href:"https://so.csdn.net/so/search?q=gpu&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},m=s("gpu"),q=s("\uFF0C\u4F3C\u4E4E\u662F\u7981\u7528 GPU \u786C\u4EF6\u52A0\u901F \u627E\u5176\u4ED6\u5404\u79CD\u65B9\u6CD5\u90FD\u65E0\u6548\uFF0C\u7BA1\u7406\u5458\u3001\u517C\u5BB9\u3001\u6539setting.json\u90FD\u6CA1\u7528\u3002"),h=e(`<p><img src="https://afatpig.oss-cn-chengdu.aliyuncs.com/blog/202207151112664.png" alt="1" loading="lazy"></p><h3 id="_2\u3001\u5728vscode\u4E2D\u4F7F\u7528git-bash\u4F5C\u4E3A\u9ED8\u8BA4\u7EC8\u7AEF" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u5728vscode\u4E2D\u4F7F\u7528git-bash\u4F5C\u4E3A\u9ED8\u8BA4\u7EC8\u7AEF" aria-hidden="true">#</a> 2\u3001\u5728vscode\u4E2D\u4F7F\u7528git-bash\u4F5C\u4E3A\u9ED8\u8BA4\u7EC8\u7AEF</h3><ol><li>\u7ED9vscode\u8BBE\u7F6E\u4EE5\u7BA1\u7406\u5458\u65B9\u5F0F\u8FD0\u884C\uFF0C</li><li>\u5728\u914D\u7F6E\u6587\u4EF6\u52A0\u5165\u4EE5\u4E0B\u914D\u7F6E\uFF0C\u628Agit\u7684path\u6539\u6210\u81EA\u5DF1\u7684</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>  <span class="token property">&quot;terminal.integrated.defaultProfile.windows&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GitBash&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.profiles.windows&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;PowerShell&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PowerShell&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;terminal-powershell&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Command Prompt&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;\${env:windir}\\\\Sysnative\\\\cmd.exe&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;\${env:windir}\\\\System32\\\\cmd.exe&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;terminal-cmd&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;GitBash&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;D:\\\\ProgramFiles\\\\Git\\\\bin\\\\bash.exe&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Windows PowerShell&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://afatpig.oss-cn-chengdu.aliyuncs.com/blog/202207151115182.png" alt="2" loading="lazy"></p><h3 id="_3-vscode\u4EE3\u7801\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#_3-vscode\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a> 3. vscode\u4EE3\u7801\u7247\u6BB5</h3>`,6),b={href:"https://juejin.cn/post/6844903869424599053",target:"_blank",rel:"noopener noreferrer"},g=s("\u53C2\u8003"),_=s("\u8BBE\u7F6E\u7247\u6BB5\u683C\u5F0F\u53EF\u4EE5\u4F7F\u7528"),f={href:"https://snippet-generator.app/",target:"_blank",rel:"noopener noreferrer"},y=s("\u5728\u7EBF\u751F\u6210\u5DE5\u5177"),j=e(`<h3 id="_4-\u8BBE\u7F6Ejdk\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_4-\u8BBE\u7F6Ejdk\u73AF\u5883" aria-hidden="true">#</a> 4. \u8BBE\u7F6Ejdk\u73AF\u5883</h3><p>vscode\u8981\u6C42<code>java.jdt.ls.java.home</code>\u81F3\u5C11\u4E3Ajdk17\uFF0Cruntime\u53EF\u8BBE\u7F6E\u591A\u4E2A\uFF0C\u628A\u5176\u4E2D\u4E00\u4E2A\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;java.jdt.ls.java.home&quot;</span><span class="token operator">:</span> <span class="token string">&quot;D:\\\\Program Files\\\\jdk-17&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;java.configuration.runtimes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JavaSE-1.8&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;D:\\\\Program Files\\\\jdk-1.8&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JavaSE-11&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;D:\\\\Program Files\\\\jdk-11&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JavaSE-17&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;D:\\\\Program Files\\\\jdk-17&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function w(x,P){const a=i("ExternalLinkIcon");return p(),l("div",null,[r,u,d,n("p",null,[k,n("a",v,[m,t(a)]),q]),h,n("p",null,[n("a",b,[g,t(a)])]),n("p",null,[_,n("a",f,[y,t(a)])]),j])}var V=o(c,[["render",w],["__file","VsCode.html.vue"]]);export{V as default};
