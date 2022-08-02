import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.5cad9535.js";const p={},e=t(`<h3 id="\u4E00-\u4EC0\u4E48\u662Fjsonp" tabindex="-1"><a class="header-anchor" href="#\u4E00-\u4EC0\u4E48\u662Fjsonp" aria-hidden="true">#</a> \u4E00\uFF0C\u4EC0\u4E48\u662FJSONP</h3><blockquote><p>Jsonp(JSON with Padding) \u662F json \u7684\u4E00\u79CD&quot;\u4F7F\u7528\u6A21\u5F0F&quot;\uFF0C\u53EF\u4EE5\u8BA9\u7F51\u9875\u4ECE\u522B\u7684\u57DF\u540D\uFF08\u7F51\u7AD9\uFF09\u90A3\u83B7\u53D6\u8D44\u6599\uFF0C\u5373\u8DE8\u57DF\u8BFB\u53D6\u6570\u636E\u3002</p></blockquote><p>\u4E3A\u4EC0\u4E48\u6211\u4EEC\u4ECE\u4E0D\u540C\u7684\u57DF\uFF08\u7F51\u7AD9\uFF09\u8BBF\u95EE\u6570\u636E\u9700\u8981\u4E00\u4E2A\u7279\u6B8A\u7684\u6280\u672F( JSONP )\u5462\uFF1F\u8FD9\u662F\u56E0\u4E3A\u540C\u6E90\u7B56\u7565\u3002 \u540C\u6E90\u7B56\u7565\uFF0C\u5B83\u662F\u7531 Netscape \u63D0\u51FA\u7684\u4E00\u4E2A\u8457\u540D\u7684\u5B89\u5168\u7B56\u7565\uFF0C\u73B0\u5728\u6240\u6709\u652F\u6301 JavaScript \u7684\u6D4F\u89C8\u5668\u90FD\u4F1A\u4F7F\u7528\u8FD9\u4E2A\u7B56\u7565\u3002</p><h3 id="\u4E8C-jsonp\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8C-jsonp\u7684\u539F\u7406" aria-hidden="true">#</a> \u4E8C\uFF0CJSONP\u7684\u539F\u7406</h3><p>\u6211\u4EEC\u77E5\u9053\uFF0C\u5728\u9875\u9762\u4E0A\u6709\u4E09\u79CD\u8D44\u6E90\u662F\u53EF\u4EE5\u4E0E\u9875\u9762\u672C\u8EAB\u4E0D\u540C\u6E90\u7684\u3002\u5B83\u4EEC\u662F\uFF1Ajs\u811A\u672C\uFF0Ccss\u6837\u5F0F\u6587\u4EF6\uFF0C\u56FE\u7247\u3002\u50CFtaobao\u7B49\u5927\u578B\u7F51\u7AD9\uFF0C\u5F88\u5B9A\u4F1A\u5C06\u8FD9\u4E9B\u9759\u6001\u8D44\u6E90\u653E\u5165cdn\u4E2D\uFF0C\u7136\u540E\u5728\u9875\u9762\u4E0A\u94FE\u63A5\u3002\u800Cjsonp\u5C31\u662F\u5229\u7528\u4E86script\u6807\u7B7E\u53EF\u4EE5\u94FE\u63A5\u5230\u4E0D\u540C\u6E90\u7684js\u811A\u672C\uFF0C\u6765\u5230\u8FBE\u8DE8\u57DF\u76EE\u7684\u3002 \u4E8E\u662F\u53EF\u4EE5\u5224\u65AD\uFF0C\u5F53\u524D\u9636\u6BB5\u5982\u679C\u60F3\u901A\u8FC7\u7EAFweb\u7AEF\uFF08ActiveX\u63A7\u4EF6\u3001\u670D\u52A1\u7AEF\u4EE3\u7406\u3001Web socket\u7B49\u65B9\u5F0F\u4E0D\u7B97\uFF09\u8DE8\u57DF\u8BBF\u95EE\u6570\u636E\u5C31\u53EA\u6709\u4E00\u79CD\u53EF\u80FD\uFF0C\u90A3\u5C31\u662F\u5728\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u8BBE\u6CD5\u628A\u6570\u636E\u88C5\u8FDBjs\u683C\u5F0F\u7684\u6587\u4EF6\u91CC\uFF0C\u4F9B\u5BA2\u6237\u7AEF\u8C03\u7528\u548C\u8FDB\u4E00\u6B65\u5904\u7406\uFF1B</p><h3 id="\u4E09-jsonp\u7684\u5177\u4F53\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4E09-jsonp\u7684\u5177\u4F53\u5B9E\u73B0" aria-hidden="true">#</a> \u4E09,JSONP\u7684\u5177\u4F53\u5B9E\u73B0</h3><p>JSONP\u5B9E\u73B0\u8DE8\u57DF\u8BF7\u6C42\u7684\u5177\u4F53\u5B9E\u73B0\u5C31\u662F\u52A8\u6001\u521B\u5EFAscript\u6807\u7B7E\uFF0C\u5229\u7528\u201Csrc\u201D\u4E0D\u53D7\u540C\u6E90\u7B56\u7565\u7EA6\u675F\u7684\u6027\u8D28\u6765\u5B9E\u73B0\u8DE8\u57DF\u83B7\u53D6\u6570\u636E\u3002</p><h4 id="_1-\u670D\u52A1\u7AEFjsonp\u683C\u5F0F\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_1-\u670D\u52A1\u7AEFjsonp\u683C\u5F0F\u6570\u636E" aria-hidden="true">#</a> 1\uFF0C\u670D\u52A1\u7AEFJSONP\u683C\u5F0F\u6570\u636E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5982\u5BA2\u6237\u60F3\u8BBF\u95EE : https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction\u3002

\u5047\u8BBE\u5BA2\u6237\u671F\u671B\u8FD4\u56DE\u6570\u636E\uFF1A[&quot;customername1&quot;,&quot;customername2&quot;]\u3002

\u771F\u6B63\u8FD4\u56DE\u5230\u5BA2\u6237\u7AEF\u7684\u6570\u636E\u663E\u793A\u4E3A: callbackFunction([&quot;customername1&quot;,&quot;customername2&quot;])\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Content-type: application/json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u83B7\u53D6\u56DE\u8C03\u51FD\u6570\u540D</span>
<span class="token variable">$jsoncallback</span> <span class="token operator">=</span> <span class="token function">htmlspecialchars</span><span class="token punctuation">(</span><span class="token variable">$_REQUEST</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;jsoncallback&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//json\u6570\u636E</span>
<span class="token variable">$json_data</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;[&quot;customername1&quot;,&quot;customername2&quot;]&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//\u8F93\u51FAjsonp\u683C\u5F0F\u7684\u6570\u636E</span>
<span class="token keyword">echo</span> <span class="token variable">$jsoncallback</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;(&quot;</span> <span class="token operator">.</span> <span class="token variable">$json_data</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;)&quot;</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u5BA2\u6237\u7AEF\u63A5\u6536" tabindex="-1"><a class="header-anchor" href="#_2-\u5BA2\u6237\u7AEF\u63A5\u6536" aria-hidden="true">#</a> 2\uFF0C\u5BA2\u6237\u7AEF\u63A5\u6536</h4><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>JSONP \u5B9E\u4F8B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">callbackFunction</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;i got it&quot;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  window<span class="token punctuation">.</span><span class="token function-variable function">onload</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> script<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    script<span class="token punctuation">.</span>src<span class="token operator">=</span><span class="token string">&quot;https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction&quot;</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-\u7528jquery\u4E2D-getjson-\u5B9E\u73B0jsonp" tabindex="-1"><a class="header-anchor" href="#_2-2-\u7528jquery\u4E2D-getjson-\u5B9E\u73B0jsonp" aria-hidden="true">#</a> 2.2\uFF0C\u7528jQuery\u4E2D$.getJSON()\u5B9E\u73B0JSONP</h4><p>\u65B9\u6CD5\u5141\u8BB8\u901A\u8FC7\u4F7F\u7528JSONP\u5F62\u5F0F\u7684\u56DE\u8C03\u51FD\u6570\u6765\u52A0\u8F7D\u5176\u4ED6\u7F51\u57DF\u7684JSON\u6570\u636E. \u4F7F\u7528$.getJSON()\u65B9\u6CD5\u5B9E\u73B0\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u9700\u8981\u5728\u8BF7\u6C42\u8DEF\u5F84URL\u540E\u589E\u52A0callback\uFF1D?, jQuery\u5C06\u81EA\u52A8\u66FF\u6362\u201C\uFF1F\u201D\u4E3A\u6B63\u786E\u7684\u51FD\u6570\u540D\uFF0C\u4EE5\u6267\u884C\u56DE\u8C03\u51FD\u6570\u3002</p><p>\u6CE8\uFF1A\u4E0B\u9762\u4EE3\u7801\u4E2D\u8DEF\u5F84\u540E\u662Fjsoncallback=\uFF1F\uFF0C\u56E0\u4E3A\u670D\u52A1\u7AEF\u7684\u4EE3\u7801\u4E2D\u83B7\u53D6\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u540D\u4E3Ajsoncallback</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>JSONP \u5B9E\u4F8B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.static.runoob.com/libs/jquery/1.8.3/jquery.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
$<span class="token punctuation">.</span><span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=?&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-\u7528jquery\u4E2D-ajax-\u5B9E\u73B0jsonp" tabindex="-1"><a class="header-anchor" href="#_2-3-\u7528jquery\u4E2D-ajax-\u5B9E\u73B0jsonp" aria-hidden="true">#</a> 2.3 \u7528jQuery\u4E2D$.ajax()\u5B9E\u73B0JSONP</h4><p>$.ajax()\u65B9\u6CD5\u540C\u6837\u53EF\u4EE5\u5B9E\u73B0JSONP\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u6211\u4EEC\u4E3B\u8981\u6765\u770B\u770B\u5B83\u7684\u4E00\u4E9B\u9009\u9879\u53C2\u6570\uFF1A</p><ol><li><ul><li>url\uFF1A\u8BF7\u6C42\u5730\u5740</li></ul></li><li><ul><li>type\uFF1A\u8BF7\u6C42\u65B9\u5F0F</li></ul></li><li><ul><li>dataType\uFF1A\u201Cjsonp\u201D \u5FC5\u5199\uFF0C\u8BBE\u7F6E\u670D\u52A1\u5668\u7AEF\u8FD4\u56DE\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u8FD9\u91CC\u662F&quot;jsonp&quot;</li></ul></li><li><ul><li>jsonp\uFF1A\u83B7\u5F97jsonp\u56DE\u8C03\u51FD\u6570\u540D\u7684\u53C2\u6570\u540D\uFF08\u8DDF\u670D\u52A1\u7AEF\u4FDD\u6301\u4E00\u81F4\uFF09</li></ul></li><li><ul><li>success\uFF1A\u8BF7\u6C42\u6210\u529F\u540E\u7684\u56DE\u8C03\u51FD\u6570\u3002</li></ul></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://www.runoob.com/try/ajax/jsonp.php&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&quot;jsonp&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">jsonp</span><span class="token operator">:</span> <span class="token string">&quot;jsoncallback&quot;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[&quot;customername1&quot;,&quot;customername2&quot;]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u56DB-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u56DB-\u603B\u7ED3" aria-hidden="true">#</a> \u56DB,\u603B\u7ED3</h3><p>1\uFF0C\u6211\u4EEC\u77E5\u9053 script\uFF0Clink, img \u7B49\u7B49\u6807\u7B7E\u5F15\u5165\u5916\u90E8\u8D44\u6E90\uFF0C\u90FD\u662F get \u8BF7\u6C42\u7684\uFF0C\u90A3\u4E48\u5C31\u51B3\u5B9A\u4E86 jsonp \u4E00\u5B9A\u662F get\u8BF7\u6C42\u3002</p><p>2\uFF0Cjsonp\u662F\u4E00\u79CD\u65B9\u5F0F\u6216\u8005\u8BF4\u975E\u5F3A\u5236\u6027\u534F\u8BAE\uFF0C\u5982\u540Cajax\u4E00\u6837\uFF0C\u5B83\u4E5F\u4E0D\u4E00\u5B9A\u975E\u8981\u7528json\u683C\u5F0F\u6765\u4F20\u9012\u6570\u636E\uFF0C\u5982\u679C\u4F60\u613F\u610F\uFF0C\u5B57\u7B26\u4E32\u90FD\u884C\uFF0C\u53EA\u4E0D\u8FC7\u8FD9\u6837\u4E0D\u5229\u4E8E\u7528jsonp\u63D0\u4F9B\u516C\u5F00\u670D\u52A1\u3002</p><p><img src="https://afatpig.oss-cn-chengdu.aliyuncs.com/blog/1045378-20220426095036509-990636020.jpg" alt="jsonp\u56FE\u7247" loading="lazy"></p>`,24),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","crossDomain2.html.vue"]]);export{k as default};
