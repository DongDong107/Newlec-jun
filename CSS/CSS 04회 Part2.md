# 04회 CSS 스타일링 Part2

## 38강 폰트 스타일링

1. 폰트 패밀리 속성

- font-size : 12px;
- color
- font-weight : bold;
- bold 대신 700 수치로 표현할 수도 있다.
- font-family : "굴림", "고딕", Verdana;(대체 순서)

2. 컨텐츠 블럭, 레이아웃 블럭 주석으로 구분해주면 편하다.

3. font의 five generic names

- serif
- sans-serif (sans가 부정의 뜻)
- monospace
- cursive
- fantasy : 그림인지 글인지 모를.

4. font-style, font-stretch

- font-style : normal, italic(기울임체), oblique 60deg(기울임 각도를 조절할 수 있지만 폰트 안에 기울임정도가 다양하지 않으면 쓸모가 없음.)

- font-stretch : 지원되는 브라우저가 많지 않으므로 패스
- 지원되는 폰트도 많지 않음.
- 글자자체의 품 크기 변화에 따라 자간이 달라지는

## 39강 무료 폰트 다운로드

1. 웹 폰트를 통해서 받을 수 있다.

2. Google Font

- 폰트 선택하고 import 구문을 복사해서 쓸 수 있다.

3. 시스템폰트 ttf를 웹폰트 woff2 로 변환하기

```css
@font-face {
  font-family: 'newlec';
  src: url('../font.aa.woff2');
}
```

## 40강 Border 스타일링

1. border-width, style, color

- style = none, hidden, dotted, dashed, solid, inset, outset, groove...

2. border-top-width...

3. border-radius, border-top-right-radius (모서리)

- 맨위왼 맨위오른 아래오른 아래왼

## 41강 Text 정렬

1. CSS 1~2에서 자주 쓰던 방법

- text-align : 수평 정렬
- line-height : 수직 정렬

  > text-align : center; (가운데정렬)
  > line-height : 25px;

## 42강 텍스트에 아이콘 붙이기

1. 약식표현은 디버깅때 조절해볼 수 없다.

2. 배경 포지션 15px 앞에 left 디폴트 값 생략된 것을 알아야한다.

3. 이상한 박스의 크기 : 패딩 준 만큼 박스가 늘어났다.

## 43강 Box Sizing

1. 우리가 여태 지정한 width 는 박스가 아니라 컨텐츠이다.

2. 그래서 패딩 지정하면 컨텐츠 크기는 변하지 않으니까 박스 크기가 커져버린다.

3. box-sizing: border-box; 설정

## 44강 SVG 아이콘

1. 벡터이미지(데이터를 넘겨줘서 매끄럽게 확대 축소 되도록), 비트맵이미지 (화소, 각 픽셀에 색을 넣어서 표현한거라 확대하면 각 픽셀들이 커지면서 깨진 것처럼 표현된다.)

2. svg 코드 복사 후에, <svg> 태그 이용

- 편집도가 높은 경우에는 툴을 이용하고, 간단하게는 수동으로.
- CSS에서는 직접 이용할 수 없고, 변형을 해서 이용해야 한다.
- 변형하는 툴을 이용하자.

3. 페이지 로딩 속도도 빨라지고, JS로도 다룰 수 있다.

## 45강 Box의 크기 고려사항 1

1. class 선언을 방(block)과 컨텐츠를 구분해서 해당 컨텐츠에 부여해주자.

2. 방에 대한 건 방에, 컨텐츠에 해당하는건 컨텐츠 자체에

## 46강 Box Layout Modes

1. box display 속성

- display-block : 수직으로
- display-inline : 수평으로
- display-inline-block : 수평을 유지하면서

2. a 태그 밑줄 없애기

- text-decoration : none;

## 47강 Box의 크기 고려사항 2

1. 고려사항 : 텍스트가 달라질 경우에 박스의 크기

- width를 조절하는게 아니라 패딩으로 위치를 조절하자.
- 그러면 텍스트가 달라져도 텍스트에 따른 패딩이 조절되어 달라진다.

2. 고려사항 : 텍스트의 길이뿐만 아니라 사이즈가 달라지면?

- em이라던지 텍스트에 따른 비율이 달라지는 단위를 이용하자.

## 48강 텍스트를 아이콘 버튼으로

1. a 태그 텍스트 대신 아이콘으로 대체하고 싶다.

2. 배경으로 하면 배경도 나오고 위에 텍스트도 겹쳐서 나온다.

3. inline-block

- block : 한 줄을 차지해버림
- inline : 나란히 차곡차곡 옆으로

4. overflow가 발생한 콘텐츠 가리기

- overflow: hidden;

5. 그래도 글자가 남는다!!

- text-indent : -999px; (첫 여백)
