---
title : "Closure, ํด๋ก์ "
date : 2020-07-14 00:00:00
category : "Study"
draft : false
tag : "Think"
---   

๐ ํด๋น ์ค์ฝํ(์์ญ)์์, ์์ ์ด ์ฐธ์กฐํ  ์ ์๋ ๋ณ์๋ฅผ ํด๋ก์ ๋ผํ๋๊ฒ ๊ฐ๋๋ผ.

## Closure(ํด๋ก์ )
`Scope`๋ ํจ์๊ฐ ํธ์ถ๋  ๋๊ฐ ์๋๋ผ, ์ ์ธํ์ ๋ ์ ํด์ง๋ค๊ณ  ํ์์.

### ๋ ์์ปฌ ์ค์ฝํ
์ค์ฝํ๋ ํจ์๋ฅผ ํธ์ถํ  ๋๊ฐ ์๋๋ผ, ํจ์๋ฅผ ์ด๋์ ์ ์ธํ๋์ง์ ๋ฐ๋ผ ๊ฒฐ์ ๋๋ค.
```javascript
// 1๋ฒ
function outerFunc(){
  var x = 10;
  var innerFunc = function(){console.log(x)}
  innerFunc();
}
// innerFunc๋ ํจ์์ ์์น๊ฐ outerFunc์ ๋ด๋ถ์ด๊ธฐ ๋๋ฌธ์, outerFunc์ ๋ณ์ x๋ฅผ ํด๋ก์ ๋ก ๊ฐ์ ธ์ฌ ์์์ผ๋ฉฐ, innerFunc์์ ์ ์ฐธ์กฐํ  ์ ์๋ค.
outerFunc();
```
### ํด๋ก์ ์ ์ฅ์ 
1. ์ํ์ ์ง : ํ์ฌ ์ํ๋ฅผ ๊ธฐ์ตํ๊ณ , ๋ณ๊ฒฝ๋ ์ต์  ์ํ๋ฅผ ์ ์งํ  ์ ์๋ค.
2. ์ ์ญ ๋ณ์์ ์ฌ์ฉ ์ต์  : ์ ์ญ๋ณ์๊ฐ ์๋, ์ฆ์์คํํจ์์ ์ง์ญ๋ณ์๋ฅผ ํด๋ก์ ๋ฅผ ์ฐธ์กฐํ  ์ ์๊ฒ ํ์ฌ, ๋ค์ํ ์ค๋ฅ๋ฅผ ์ฌ์ ์ ๋ฐฉ์งํ  ์ ์๋ค.

### ์์ 
<div style="
  width : 30%;
  margin : 0 auto;
  display : flex;
  flex-direction : column;
  align-items : center;
  border : 1px solid #666666; 
  border-radius : 5px;
  padding : 0.5em 0;"
>
  <button class="toggle">toggle</button>
  <div class="box" style="width: 100px; height: 100px; background: red;"></div>
</div>
<br>
<script>
var box = document.querySelector('.box');
var toggleBtn = document.querySelector('.toggle');
var toggle = (function () {
  var color = false;
  // โ  ํด๋ก์ ๋ฅผ ๋ฐํ
  return function () {
    box.style.background = color ? 'red' : 'blue';
    // โข ์ํ ๋ณ๊ฒฝ
    color = !color;
  };
})();
toggleBtn.onclick = toggle;
</script>

```javascript
var box = document.querySelector('.box');
var toggleBtn = document.querySelector('.toggle');

var toggle = (function () {
  var color = false;
  // โ  ํด๋ก์ ๋ฅผ ๋ฐํ
  return function () {
    box.style.background = color ? 'red' : 'blue';
    // โข ์ํ ๋ณ๊ฒฝ
    color = !color;
  };
})();

// ์ฆ์์คํํจ์๋ก, ์๊ตฌ์ ์ผ๋ก toggle ์ด๋ฒคํธ๋ return ๋ ํจ์์.
// ํ์ง๋ง, closure ์์ฑ์, color๋ผ๋ ๋ณ์๋ ์กด์ฌํ๊ณ  ์์.

// โก ์ด๋ฒคํธ ํ๋กํผํฐ์ ํด๋ก์ ๋ฅผ ํ ๋น
// console.dir(toggle) // closure๋ก color์ ๊ฐ ๊ฐ๊ณ ์์
toggleBtn.onclick = toggle;
```
์ถ์ฒ : [ํด๋ก์ , ์ค์ฝํ ์์ง๊ท๋ ๋ธ๋ก๊ทธ](https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-33%EA%B0%80%EC%A7%80-%EA%B0%9C%EB%85%90-6-%ED%95%A8%EC%88%98%EC%99%80-%EB%B8%94%EB%A1%9D-%EC%8A%A4%EC%BD%94%ED%94%84-%EB%B2%88%EC%97%AD-dijuhrub1x)