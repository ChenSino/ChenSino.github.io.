import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.6aa624c4.js";const p={},e=t(`<h2 id="ts\u5728\u8868\u5355\u4E2D\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#ts\u5728\u8868\u5355\u4E2D\u7684\u5E94\u7528" aria-hidden="true">#</a> ts\u5728\u8868\u5355\u4E2D\u7684\u5E94\u7528</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ruleFormRef<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ruleForm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">status-icon</span> <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rules<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>70px<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u7528\u6237\u540D:<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ruleForm.username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>off<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5BC6\u7801:<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ruleForm.password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>off<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>login-btn<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submitForm(ruleFormRef)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u767B\u5F55<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>login-btn<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>resetForm(ruleFormRef)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u91CD\u7F6E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LoginData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/type/login&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FormInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;element-plus&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//\u8868\u5355\u54CD\u5E94\u5F0F\u7684\u6570\u636E\u653E\u5165reactive\u4E2D</span>
 <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LoginData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u8868\u5355\u8F93\u5165\u89C4\u5219 --\u4E0D\u662F\u54CD\u5E94\u5F0F\u7684</span>
<span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u662F\u5426\u5FC5\u987B\u5B57\u6BB5</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u89E6\u53D1\u7684\u63D0\u793A\u4FE1\u606F</span>
            <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&quot;blur&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u89E6\u53D1\u65F6\u673A: \u5F53\u5931\u53BB\u7126\u70B9\u65F6\uFF08\u5149\u6807\u4E0D\u663E\u793A\u7684\u65F6\u5019\uFF09\uFF0C\u89E6\u53D1\u6B64\u63D0\u793A</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// \u6700\u5C0F\u5B57\u7B26\u4E66</span>
            <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// \u6700\u5927\u5B57\u7B26\u6570</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;\u7528\u6237\u540D\u957F\u5EA6\u9700\u8981\u57283-5\u4E2A\u5B57\u7B26\u4E4B\u95F4&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u89E6\u53D1\u7684\u63D0\u793A\u4FE1\u606F</span>
            <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&quot;blur&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u662F\u5426\u5FC5\u987B\u5B57\u6BB5</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;\u8BF7\u8F93\u5165\u5BC6\u7801&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u89E6\u53D1\u7684\u63D0\u793A\u4FE1\u606F</span>
            <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&quot;blur&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u89E6\u53D1\u65F6\u673A: \u5F53\u5931\u53BB\u7126\u70B9\u65F6\uFF08\u5149\u6807\u4E0D\u663E\u793A\u7684\u65F6\u5019\uFF09\uFF0C\u89E6\u53D1\u6B64\u63D0\u793A</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// \u6700\u5C0F\u5B57\u7B26\u4E66</span>
            <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token comment">// \u6700\u5927\u5B57\u7B26\u6570</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;\u5BC6\u7801\u957F\u5EA6\u9700\u8981\u57283-5\u4E2A\u5B57\u7B26\u4E4B\u95F4&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u89E6\u53D1\u7684\u63D0\u793A\u4FE1\u606F</span>
            <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&quot;blur&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//\u8868\u5355\u5B9E\u4F8B\u5316</span>
 <span class="token keyword">const</span> ruleFormRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>FormInstance<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token keyword">const</span> <span class="token function-variable function">submitForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">formEl</span><span class="token operator">:</span> FormInstance <span class="token operator">|</span> <span class="token keyword">undefined</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5BF9\u8868\u5355\u5185\u5BB9\u8FDB\u884C\u9A8C\u8BC1</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>formEl<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
      formEl<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">valid</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>valid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">login</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>ruleForm<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u5C06token\u8FDB\u884C\u4FDD\u5B58</span>
            localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u8DF3\u8F6C\u9875\u9762</span>
            router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;error submit!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//\u91CD\u7F6E</span>
<span class="token keyword">const</span> <span class="token function-variable function">resetForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">formEl</span><span class="token operator">:</span> FormInstance <span class="token operator">|</span> <span class="token keyword">undefined</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>formEl<span class="token punctuation">)</span> <span class="token keyword">return</span>
  formEl<span class="token punctuation">.</span><span class="token function">resetFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u5BF9reactive\u4E2D\u6570\u636E\u8FDB\u884C\u7C7B\u578B\u663E\u793A\u6CE8\u89E3\uFF0C\u8FD9\u4E2A\u535A\u4E3B\u7528\u7684\u65B9\u5F0F\uFF0C\u65B0\u5EFA\u4E86\u4E00\u4E2Atypes\u6587\u4EF6login.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u8868\u5355\u6570\u636E\u63A5\u53E3
 */</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ILoginData</span><span class="token punctuation">{</span>
    username<span class="token operator">:</span> <span class="token builtin">string</span>
    password<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LoginData</span> <span class="token punctuation">{</span>
    ruleForm<span class="token operator">:</span> ILoginData <span class="token operator">=</span> <span class="token punctuation">{</span>
        username<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        password<span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> 
 <span class="token keyword">import</span> <span class="token punctuation">{</span> LoginData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/type/login&quot;</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LoginData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E8C\uFF0C\u4F7F\u7528\u6CDB\u578B\u6765\u6CE8\u89E3reactive\u4E2D\u7684\u6570\u636E\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token keyword">interface</span> <span class="token class-name">DomainItem</span> <span class="token punctuation">{</span>
  key<span class="token operator">:</span> <span class="token builtin">number</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dynamicValidateForm <span class="token operator">=</span> <span class="token generic-function"><span class="token function">reactive</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span>
  domains<span class="token operator">:</span> DomainItem<span class="token punctuation">[</span><span class="token punctuation">]</span>
  email<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  domains<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>value<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  email<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(l,u){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","tsAndvue3.html.vue"]]);export{k as default};
