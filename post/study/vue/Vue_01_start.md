---
title : "Vue ์์"
date : 2020-08-31 00:00:00
category : "Study"
draft : false
tag : "Vue.js"
toc: true
toc_label: "Vue ํน์ง"
sidebar : 
  - title : 'Vue.js'
  - nav : Vue    
--- 
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

## ๐ง ์์ํ๊ฒ ๋ ๊ณ๊ธฐ
* ์ด๋ฒ์ ํ๊ต์์ ๋ฐฑ์๋ ์ ๊ณต์ ํ๊ณ  ์๋ ์น๊ตฌ๊ฐ ์์งค์ ์๊ธฐ๋ผ๋ ์น ์ดํ๋ฆฌ์ผ์ด์์ ๋ง๋๋๋ฐ, ํ๋ก ํธ๋ ์์ ๋ฐฑ์ง์ธ ์ํ์์ ๋์์ ์งํํ๋ ค๋ค๋ณด๋ ๊ณ ์ถฉ์ ๋๊ปด ๋์์ฃผ๊ฒ ๋์๋ค.  
* ์ด์ ํ๋๊ฑฐ, ์๋ก์ด ํ๋ ์์ํฌ๋ ๊ณต๋ถํด๋ณผ ๊ฒธ Vue๋ก ์ ์ํ๊ฒ ๋์๋ค.

## Vue ์คํ
* ํฐ ๊ท๋ชจ์ ์น์ดํ๋ฆฌ์ผ์ด์์ด๋ผ๋ฉด Vue-cli๋ฅผ ํตํด , create-react-app์ฒ๋ผ ๊ธฐ๋ณธ์ ์ธ๊ฒ๋ค์ด ์ค์น๋ npm vue ์ฑ๋ ์์ง๋ง, ๊ทธ๋ ์ง ์๋ค๋ฉด CDN์๋ ฅ์ ํตํด ์คํ์ํฌ ์ ์๋ค.
> `<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`

## ๊ฐ ๋ฐ์ธ๋ฉ
### delimiters
* Vue Instance์์ฑ์ ํตํด, ํ๊ฒ์ด ๋๋ ํ๊ทธ๋ฅผ ์ง์ ํ๊ณ  data๊ฐ์ฒด๋ฅผ ํตํด HTML์์ ๊ธฐ๋ณธ์ ์ผ๋ก ์ค๊ดํธ(`{}`)๋ก ์ ๊ทผ์ ํ  ์ ์๋ค.
* delimiters ๋ณ๊ฒฝ์ ํตํด, ์ค๊ดํธ๋ฅผ ๋ค๋ฅธ๊ฒ์ผ๋ก ๋ฐ๊ฟ ์ ๋ ์๋ค.

```javascript
// HTML
<div>
  <div id="app1">
  <%message%>
  </div>
</div>

// Script
new Vue({
  el : '#app1',
  delimiters : ['<%', '%>'],
  data : { 
    message : '์๋ํ์ธ์ Vue!'
  }
})
```
### ๊ฒฐ๊ณผ๊ฐ
{::nomarkdown}
<div style="width : 80%; margin : 0 auto; border : 1px solid #999; border-radius : 1em; padding : 1em;">
  <div id="app1">
    <%message%>
  </div>
</div>
{:/}

## Directive
### v-bind
* Vue์์ ์ ๊ณตํ๋ ํน์์์ฑ์ธ v-์ ๋์ด๊ฐ ๋ถ์ด์๊ณ , ๋ ๋๋ง ๋ DOM์ ํน์ํ ๋ฐ์ํ ๋์์ ํ๋ค.
* HTML ํ๊ทธ์ ์์ฑ์ ์ ๊ทผํ์ฌ ๋์ ์ผ๋ก ๊ฐ์ ์ง์ ํด ์ค ์ ์๋ค.

```javascript
// HTML
<div id="app2">
  <span v-bind:title="message">
    ๋ง์ฐ์ค๋ฅผ ์ฌ๋ฆฌ๋ฉด ๋ฐ์ธ๋ฉ๋ message๋ฅผ ๋ณผ ์ ์์ต๋๋ค. 
  </span>
</div>
// Script
new Vue({
  el : '#app2',
  data : {
    message : `์ด ํ์ด์ง๋ ${new Date}์ ๋ก๋๋์์ต๋๋ค.`
  }
})
```
### ๊ฒฐ๊ณผ๊ฐ
{::nomarkdown}
<div style="width : 80%; margin : 0 auto; border : 1px solid #999; border-radius : 1em; padding : 1em;">
  <div id="app2">
    <span v-bind:title="message">
      ๋ง์ฐ์ค๋ฅผ ์ฌ๋ฆฌ๋ฉด ๋ฐ์ธ๋ฉ๋ message๋ฅผ ๋ณผ ์ ์์ต๋๋ค. 
    </span>
  </div>
</div>
{:/}

### v-on
* ์ฌ์ฉ์๊ฐ ์ฑ๊ณผ ์ํธ์์ฉํ  ์ ์๊ฒ ํ๊ธฐ ์ํด v-on ๋๋ ํฐ๋ธ๋ฅผ ์ฌ์ฉํ์ฌ Vue์ธ์คํด์ค์์ ๋ฉ์๋๋ฅผ ํธ์ถํ๋ ์ด๋ฒคํธ๋ฅผ ์ถ๊ฐํ  ์ ์๋ค.
* ๊ฐ๋จํ๋ค๋ฉด, DOM์ ์ง์  ๋ฉ์๋๋ฅผ ์ถ๊ฐํ๋๊ฒ๋ ๊ฐ๋ฅํ๋ค.

```javascript
// HTML
<div id="app5">
  <p v-on:mouseover="alertMessage"><%message%></p>
  <div>
    <p v-if="seen">์ ๊ฐ ๋ณด์ด๋์?</p>
    <button v-on:click="seen = !seen">ํ ๊ธ๋ฒํผ</button>
  </div>
</div>
// Script
new Vue({
  el : '#app5',
  delimiters : ['<%', '%>'],
  data : {
    message : '๋ณด์ฌ์!',
    seen : true
  },
  methods : {
    alertMessage(){
      this.seen = !this.seen;
      this.message = this.message === '๋ณด์ฌ์!' ? '์๋ณด์ฌ์!' : '๋ณด์ฌ์!';
    }
  }
})
```
### ๊ฒฐ๊ณผ๊ฐ
{::nomarkdown}
<div style="width : 80%; margin : 0 auto; border : 1px solid #999; border-radius : 1em; padding : 1em;">
  <div id="app5">
    <p><%message%></p>
    <div>
      <p v-if="seen">์ ๊ฐ ๋ณด์ด๋์?</p>
      <button v-on:click="alertMessage">ํ ๊ธ๋ฒํผ</button>
    </div>
  </div>
</div>
{:/}

### v-model
* input ์์์ ๋ํ ์๋ ฅ๊ณผ ์ฑ ์ํ๋ฅผ ์๋ฐฉํฅ์ผ๋ก ๋ฐ์ธ๋ฉํ๋ v-model ๋๋ ํฐ๋ธ๋ฅผ ๊ฐ์ง๊ณ  ์๋ค.

```javascript
// HTML
<div id="app6">
  <input v-model="message">
  <div><%message%></div>
</div>
// Script
new Vue({
  el : '#app6',
  delimiters : ['<%', '%>']
  data : {
    message : '์๋ ฅํด๋ณด์ธ์',
  },
})
```
### ๊ฒฐ๊ณผ๊ฐ
{::nomarkdown}
<div style="width : 80%; margin : 0 auto; border : 1px solid #999; border-radius : 1em; padding : 1em;">
  <div id="app6">
    <input v-model="message">
    <div><%message%></div>
  </div>
</div>
{:/}

## ์กฐ๊ฑด๋ฌธ๊ณผ ๋ฐ๋ณต๋ฌธ
### ์กฐ๊ฑด๋ฌธ
* ํ์คํธ๋ฟ๋ง ์๋๋ผ, DOM ๊ตฌ์กฐ ์์ฒด์๋ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์ธ๋ฉ ํ  ์ ์์ผ๋ฉฐ, ํด๋น ๋ฐ์ดํฐ๋ฅผ ํตํด DOM ๊ตฌ์กฐ ๋ณ๊ฒฝ ๋ฐ ํธ๋์ง์ ํจ๊ณผ๋ฅผ ์ ์ฉ์ํฌ ์ ์๋ค.(์ดํ ๋ค๋ฃฐ ์์ )

```javascript
// HTML
<div id="app3">
  <p v-if="seen">์ด์  ๋๋ฅผ ๋ณผ ์ ์์ด์</p>
</div>
// Script
new Vue({
  el : '#app3',
  data : {
    seen : true // false ํ๋ฉด ์๋ณด์
  }
})
```
### ๊ฒฐ๊ณผ๊ฐ
{::nomarkdown}
<div style="width : 80%; margin : 0 auto; border : 1px solid #999; border-radius : 1em; padding : 1em;">
  <div id="app3">
    <div v-if="seen">์ด์  ๋๋ฅผ ๋ณผ ์ ์์ด์</div>
  </div>
</div>
{:/}

### ๋ฐ๋ณต๋ฌธ
* ๋ฐฐ์ด์ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์ธ๋ฉํ์ฌ, ์ํ - ํ์ํ  ์ ์๋ค.

```javascript
// HTML
<div id="app4">
  <ol>
    <li v-for="todo in todos">
      <%todo.text%>
    </li>
  </ol>
</div>
// Script
new Vue({
  el : '#app4',
  data : {
    todos : [
      { text: 'JavaScript ๋ฐฐ์ฐ๊ธฐ' },
      { text: 'Vue ๋ฐฐ์ฐ๊ธฐ' },
      { text: '๋ฌด์ธ๊ฐ ๋ฉ์ง ๊ฒ์ ๋ง๋ค๊ธฐ' }
    ]
  }
})
```
### ๊ฒฐ๊ณผ๊ฐ
{::nomarkdown}
<div style="width : 80%; margin : 0 auto; border : 1px solid #999; border-radius : 1em; padding : 1em;">
  <div id="app4">
    <ol>
      <li v-for="todo in todos">
        <%todo.text%>
      </li>
    </ol>
  </div>
</div>
{:/}

## ์ปดํฌ๋ํธ ํ์ฉํ๊ธฐ
### Component
* Vue์์ ์ปดํฌ๋ํธ๋ ๋ฏธ๋ฆฌ ์ ์๋ ์ต์์ ๊ฐ์ง Vue ์ธ์คํด์ค์ด๋ค.
* CDN์ด ์๋ Vue cli๋ฅผ ์ฌ์ฉํ๋ฉด ์ปดํฌ๋ํธ๋ก ๊ตฌ์ฑ๋ Vue์ฑ์ ์ ์ํ๊ฒ ๋๋ค.

```javascript
// HTML
<div id="app7">
  <todo-item
    v-for="item in groceryList"
    v-bind:text="item.text"
    v-bind:id="item.id"
    v-bind:key="item.id"
  ></todo-item>
</div>
// Script
Vue.component('todo-item', {
  props : ['text', 'id'],
  delimiters : ['<%', '%>'],
  template : `<p>No<%id%>. <%text%></p>`
})
new Vue({
  el : '#app7',
  delimiters : ['<%', '%>'],
  data : {
    groceryList : [
      {id : 0, text : 'Vegetables'},
      {id : 1, text : 'Cheese'},
      {id : 2, text : 'Porkbelly'}
    ]
  }
})
```

### ๊ฒฐ๊ณผ๊ฐ
{::nomarkdown}
<div style="width : 80%; margin : 0 auto; border : 1px solid #999; border-radius : 1em; padding : 1em;">
  <div id="app7">
    <todo-item
      v-for="item in groceryList"
      v-bind:text="item.text"
      v-bind:id="item.id"
      v-bind:key="item.id"
    ></todo-item>
  </div>
</div>
{:/}


<script>
new Vue({
  el : '#app1',
  delimiters : ['<%', '%>'],
  data : { 
    message : '์๋ํ์ธ์ Vue!'
  }
})

new Vue({
  el : '#app2',
  data : {
    message : `์ด ํ์ด์ง๋ ${new Date}์ ๋ก๋๋์์ต๋๋ค.`
  }
})

new Vue({
  el : '#app3',
  data : {
    seen : true
  }
})

new Vue({
  el : '#app4',
  delimiters : ['<%', '%>'],
  data : {
    todos : [
      { text: 'JavaScript ๋ฐฐ์ฐ๊ธฐ' },
      { text: 'Vue ๋ฐฐ์ฐ๊ธฐ' },
      { text: '๋ฌด์ธ๊ฐ ๋ฉ์ง ๊ฒ์ ๋ง๋ค๊ธฐ' }
    ]
  }
})

new Vue({
  el : '#app5',
  delimiters : ['<%', '%>'],
  data : {
    message : '๋ณด์ฌ์!',
    seen : true
  },
  methods : {
    alertMessage(){
      this.seen = !this.seen;
      this.message = this.message === '๋ณด์ฌ์!' ? '์๋ณด์ฌ์!' : '๋ณด์ฌ์!';
    }
  }
})

new Vue({
  el : '#app6',
  delimiters : ['<%', '%>'],
  data : {
    message : '์๋ ฅํด๋ณด์ธ์',
  },
})

Vue.component('todo-item', {
  props : ['text', 'id'],
  delimiters : ['<%', '%>'],
  template : `<p>No<%id%>. <%text%></p>`
})
new Vue({
  el : '#app7',
  delimiters : ['<%', '%>'],
  data : {
    groceryList : [
      {id : 0, text : 'Vegetables'},
      {id : 1, text : 'Cheese'},
      {id : 2, text : 'Porkbelly'}
    ]
  }
})
</script>


## ์ฐธ์กฐ
[Vue.js ๊ณต์๊ฐ์ด๋ ์๊ฐ](https://vuejs.org/v2/guide/)