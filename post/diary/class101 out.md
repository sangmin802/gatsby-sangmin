---
title : "Class101 불합격"
date: 2020-11-24
category: 'Diary'
draft: false
---   
<div style="margin : 0 auto; text-align : center">
  <img src="https://t1.daumcdn.net/cfile/tistory/999727385D5220230E" alt="class101">
</div>

## 불합격!
11월 16일 class101 프론트엔드 개발 서류전형 통과.
<br>
10월 20일 과제제출
<br>
10월 24일 불합격 통보.

> Class101에서 요구하는 역량과 다르다는 결과가 나왔다.

<br>
어렵지 않은 과제였다. 짜투리시간을 내어 했었고, 기업에서 제시했던 조건을 모두 충족시켰고, 기능들은 모두 원활히 잘 작동되었다.
<br>
우대사항에 타입스크립트 사용이 있었는데.. 이것때문인가..?
<br>
아니면 코드 퀄리티때문일수도

### 혼자하는건 참 힘들어
현재 할 수 있는 최선의 코드를 짰다고 생각했는데.. 다른사람들 기준에서의 <b>신입</b>에는 못미쳤나보다.
<br>
참 어렵구만~


### 피드백을 받았다
해당 과제 관련 깃허브 디렉토리를 삭제후, 회신해달라는 메일에 혹시 너무나도 죄송하지만 무엇이 문제였는지 알려줄수 있냐는 질문을 던졌다..
<br>
솔직히 기대안했다.. 기업에서 떨어진 사람에게 시간을 쓸 의무는 없으니깐

<div style="margin : 0 auto; text-align : center">
  <img src="/img/2020/11/24/class101.PNG?raw=true" alt="class101_feedback">
</div>

이렇게 길게 피드백을 보내주셨다.
<br>
진짜 너무나도 감사합니다. 

### 피드백 정리
1. 코드의 가독성문제
  * 상대방이 보았을 때 더 직관적으로 이해될수 있도록 간결해야함
	* if else 안에 조건문이 들어가는것은 매우 안좋은 습관이라고 한다. 그것보다는, `early return`을 통해 종료시켜 if문 탈출이 좋다고한다.

2. 기능에 따라서 컴포넌트를 좀 더 나누기
  * 충분히 더 쪼갤 수 있었다.

3. 컴포넌트의 역할과 책임에 대해 좀더 고려해보기
  * 뷰와 비즈니스 로직이 혼재되어있어, 추후에 기능 변경등으로 인한 보수가 어려움

4. 렌더링 최적화측면의 문제
  * 인라인으로 함수를 작성하거나, memoizaition이 되지 않아 리렌더를 일으키는 경우가 있음

* 1, 2는 나도 프로그래밍을 하면서, 애매하다고 생각했었는데 3, 4는 예상못했던 부분이라 좀 더 깊이있게 알아봐야겠다.