---
title : "TypeScript로 바꿔보자5"
date : 2021-01-01 00:00:00
category : "Study"
draft : false
tag : "TypeScript"
sidebar : 
  - title : 'TypeScript'
  - nav : TypeScript
--- 
# Loa-Hands
* `userDetail`컴포넌트부터, `@Shared`까지 모두 변경해보았다.
* 지금까지 올린 포스트와 비슷한 구성으로 만들어져서, 별다른 사진을 찍진 않았다.
* 디스트럭쳐링과정에서 불편함을 느꼈었지만, 해당 컴포넌트가 사용한는 `props`의 내부 속성까지 모두 인터페이스에 포함시키면 원활히 작동되었다.
  <div style="text-align : center">
    <img src="/img/2021/01/01/1.PNG?raw=true" alt="1">
  </div>
* 마찬가지로, 외부에서 가져오기 때문에, 정확한 구조를 알 수 없는 데이터이지만 필수적으로 갖고있는 속성이거나, 혹은 그렇지 않더라도 `Nullable`기능으로 데이터 생성단계에서 인터페이스를 만들어 내보내준다면 각 컴포넌트에 전달되는 속성들의 타입을 정의해주는데 편리함을 느꼈다.
  <div style="text-align : center">
    <img src="/img/2021/01/01/2.PNG?raw=true" alt="2">
  </div>

## 느낀점
### 편했던 점
* 확실히 컴포넌트든, 데이터든 속성들의 타입으로 예상가능한 값의 범위를 확 줄일수 있고, 구조를 보는데 가시성이 좋았다. 
> 자바스크립트 보다는 좀 더 내가 예상하는 범위 안에서만 작동되는 느낌?
* 함수 변수의 타입을 지정해주기때문에, 해당 함수에 보내지는 인자들을 예상할 수 있어, 잘못된 경로의 함수를 찾기 용이했다.
* 종종, 타입스크립트에서 제공하는 유틸리티를 사용하여 직접 타입을 지정해주지 않아서 좋은점도 있었다.

### 불편했던 점
> 솔직히 초보라 그런지 불편한점을 더 많이 느꼈다..  

* 일단 코드가 너 - 무 길어진다. 리팩토링을 하여 정리했었는데, 뭔가 더 장황해진 느낌이다..
* 리팩토링을 통해 비즈니스로직을 갖고있는 컴포넌트와 뷰 구성을 담당하는 컴포넌트를 분리하였는데, 서로 내보내기 받아오기로 인해 뭔가 컴포넌트간 연결되는 부분이 많아 독립성이 떨어진 느낌이다..
> 위의 두 문제를 생각해보았는데, 아예 차라리 하나의 파일에 인터페이스들을 관리하는것이 더 효율적이려나..?
* 장점에서 어느정도 해결방법을 찾긴 했지만, http통신으로 데이터를 가져올 때에는, 타입을 예상할 수 없어 곤란한점이 많았다. 그렇다고 `any`나 `object` 타입을 쓰는것은.. 타입스크립트를 사용한다는것의 의미가 많이 퇴색된다는 느낌이 들어서..

## 결론
* 예~에전에 `Angular`를 사용하면서 타입스크립트를 잠깐 접해보았는데, 정말 일부분이였던것 같다.
* 그래도 앞으로 `React`프로젝트를 할 때에는 타입스크립트로 시작해보려 한다.
> 익숙해지면 더 나아지겠지