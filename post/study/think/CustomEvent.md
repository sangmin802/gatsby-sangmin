---
title : "CustomEvent"
date : 2020-07-08 00:00:00
category : "Study"
draft : false
tag : "Think"
---   
### ๐ ๊ฒฝํ
Vue๊ณต๋ถ์ค, Component๋ถ๋ถ์์ ๋ถ๋ชจ์ ์์Component๊ฐ์ ์ํต์ ๋ณด๊ณ ์์๋ค.  
React๋ฅผ ์ด๋ฏธ ์๊ณ  ์์๊ธฐ ๋๋ฌธ์ ์์ฑ์ ์ ๋ฌํ๊ณ , ์์ฑ์ผ๋ก ์ ๋ฌ๋ ๋ถ๋ชจ์ ์ด๋ฒคํธ๋ฅผ ํธ์ถํ๋ ๊ตฌ์กฐ๋ ๋น์ทํ๊ฒ ๊ฐ์ ๋ฌธ์ ๋ ์์๋ค.  
๊ทธ๋ฐ๋ฐ.. dispatchEvent๋ผ๋ ๋ฉ์๋๋ฅผ ์ฒ์๋ณด๊ฒ๋์๋ค.  

### ๐ค ์๋ฌธ  
Redux์ํ๊ด๋ฆฌ๋ฅผ ํ  ๋, ์ ๊ณต๋๋ dispatch๋ฉ์๋๋ฅผ ํ์ฉํ์ฌ state์ ๋ณ๊ฒฝ์์ผฐ๋๋ฐ ๋น์ทํ๊ฑด๊ฐ?   

### ๐ ์ปค์คํ ์ด๋ฒคํธ ์์ฑ ๋ฐ ํธ์ถ(?)!
<div style="
  width : 30%;
  margin : 0 auto;
  display : flex;
  flex-direction : column;
  align-items : center;
  border : 1px solid #666666; 
  border-radius : 5px;
  padding : 0.5em 0;
  "
>
  <p style="margin-bottom : 0.5em">์คํ์์ </p>
  <div class="event1">๋๊ฐ ๋์  ์คํํด์ค</div>
  <button class="support">๋์ ์คํ</button>
</div>
<script>
  const event = new CustomEvent('test', {detail : '์ฌ์ฉ์ ์ง์  ์ด๋ฒคํธ ์๋๋ค.'});
  const support = document.querySelector('.support');
  const elem1 = document.querySelector('.event1');
  elem1.addEventListener('test', (e) => {
    alert(e.detail)
  })
  support.addEventListener('click', () => {
    elem1.dispatchEvent(event);
  })
</script>

### HTML
```javascript
<div class="event1">๋๊ฐ ๋์  ์คํํด์ค</div>
<button class="support">๋์ ์คํ</button>
```
### JavaScript
```javascript
const event = new CustomEvent('test', {
  detail : '์ฌ์ฉ์ ์ง์  ์ด๋ฒคํธ ์๋๋ค.'
  // ์ปค์คํ์ด๋ฒคํธ ๋ฑ๋ก ๋ฐ, ๋๋ฒ์งธ ์ธ์๋ก data ์ค์  ๊ฐ๋ฅ
});
const support = document.querySelector('.support');
const elem1 = document.querySelector('.event1');

elem1.addEventListener('test', (e) => {
  alert(e.detail)
  // elem1์ ์ปค์คํ์ด๋ฒคํธ 'event' ๋ฑ๋ก
})
support.addEventListener('click', () => {
  elem1.dispatchEvent(event);
  // elem1์ ๋ฑ๋ก๋์ด์๋ ์ปค์คํ์ด๋ฒคํธ 'event'๋ฅผ ์คํ์์ผ์ค
})
```

### ๐ง๊ฒฐ๋ก 
  * `new CustomEvent()`๋ฅผ ์ฌ์ฉํ์ฌ, ์ฌ์ฉ์์ง์  ์ด๋ฒคํธ๋ฅผ ๋ง๋ค ์ ์์ผ๋ฉฐ, ๋ฐ์ดํฐ๊ฐ๋ ๋ฃ์ด์ค ์ ์๋ค.  
  * ํด๋น ์ด๋ฒคํธ๊ฐ ์ฐ๊ฒฐ๋ ์๋ฆฌ๋จผํธ์ ์ง์ ์ ์ผ๋ก ์ฌ์ฉ์์ ์์ฒญ? ํธ์ถ? ์ด ๊ฐ์ง ์๋๋ผ๋ `์๋ฆฌ๋จผํธ.dispatchEvent(์ด๋ฒคํธ๋ช)`๋ฅผ ํตํด, ์คํ์ํฌ ์ ์๋ค.
