# 04회 CSS 스타일링 Part1

## 13강 CSS 구조화

1. Inline styles

- html 태그마다 style 작성해서 부여

2. Internal stylesheet

- 스타일 태그 안에서 정리해서 부여

3. External stylesheet

- 공통 스타일이거나 협업 또는 개별 유지보수를 위한 모델

```html
<link href="css/style.css" type="text/css" rel="stylesheet" />
```

## 14강 CSS를 링크하는 방법 2가지

1. html에서 css파일들을 다 링크 하는 방법

2. css 파일들끼리 임포트 하는 방법

3. 두 방법의 장단점.

- 1번의 경우 불러오는 경우 동시에 불러옴.
- 2번의 경우 나눠서 가져오기 때문에 네트워크 문제가 발생하면 못 불러오기도 함.
- 하지만, 성능만 생각하면 업무의 질이 너무 떨어진다. CSS들은 CSS끼리 해결을 보는 것이 좋다.

## 15강 스타일 링크에서의 CSS 우선순위

1. 그러면 방법에 따른 우선순위가 어떻게 될까.

2. 인라인 style 속성을 이길 우선순위는 없다.

3. External < Internal < Inline (오른쪽이 우선순위 짱)

## 16강 문서 로드와 스타일 적용시기

1. CSS가 적용되는 시기는 Html이 로드되고 파싱된 후에 DOM tree가 생기면 그때 적용된다.

2. CSS 파싱중에 잘못된 입력으로 오류가 발생하면 작동을 안한다. => 꼼꼼하게 스타일링해야한다.

## 17강 스타일 작성 순서

1. 컨텐츠 블록 스타일

2. 레이아웃 블록 스타일

3. 콘텐츠 레이아웃

4. 텍스트 스타일

5. 2 => 1 => 4 => 3 + (반응형)

## 18강 Top 레이아웃 Box 스타일

## 19강 Box모델과 CSS 디버깅

1. 빈 공백의 정체는 무엇일까?

- 경계선과 컨텐츠 사이에 패딩이 있음.
- 박스들 사이의 간격은 마진.
- body태그에 기본적으로 마진이 존재.

## 20강 Top 섹션에 이름 짓기

1. CSS 관련 이름은 class 이름으로.

## 21강 배경색을 칠하기 위한 값의 형태

1. Color 값

- Keywords : 정해진 색에 대한 키워드
- Hex (#000000) : RGB 값
- rgb -> #FF0000, rgba -> #ff000020, a : 밝기
- Decimal

2. color functions

- RGB decimal values
- rgb(255,0,0);
- 10진수 값, 실수 안됨, %인지 10진수값인지 통일해야함.
- rgba 에서 밝기는 0~1, 여기는 실수 가능.

## 22강 HSL과 System 색상 값

1. HSL

- hue, saturation, lightness
- 원형의 테이블에 색이 있고 각도를 이용해서 색 지정.

2. System 색상

- 운영체제 디스플레이의 색상에 따라 바꿀수도 있음.

## 23강 크기 또는 거리를 나타내는 값의 단위, & 24강 vmin, vmax 크기 단위

1. 가변 크기

- 최근에 실험실 딱지를 땐 단위들
- v : view port, 볼 수 있는 화면 크기
- vw : 너비
- vh : 높이
- vmin : 화면 크기가 좁은 쪽
- vmax : 화면 크기가 긴 쪽

- 그냥 크기 50%를 하면 부모의 크기의 50%
- 기본 너비는 100%, 높이는 0.

2. 고정 크기

## 25강 font size와 가변크기

1. em, rem, ex

- 폰트 크기에 따라 달라지는 가변 크기.
- 해당 영역에 font-size가 지정이 안되어 있다면 부모의 폰트 사이즈를 따라감.
- 5em : 해당 영역 폰트 사이즈의 5배.

## 26강 rem root em 크기

1. rem에서 r : root

- html에서 지정한 폰트 사이즈 따라감.

2. ex는 영문같은 경우 작게 폰트가 지정되는 경우가 있어서 쓰는데 한글은 필요가 없을 것이다.

## 27강 배경 이미지

1. background images

- background-image : url(star.png);
- background-repeat : repeat-x; (x방향으로만)
- background-repeat : repeat-y; (y방향으로만)
- background-repeat : repeat-xy; : default
- background-repeat : no-repeat;

2. 위치

- background-position : 10px 10px;
- background-position : right bottom;
- (left right, top bottom center...)
- background-position : top 10px right 10px;

## 28강 배경 이미지 크기 설정

- CSS3에서 속성이 추가됨.
- background-size: 50% 50%;
- 비율이 유지되지않아 많이 쓰진 않음.

1. 사진이 다 들어가야한다. 비율 유지하면서.

- background-size: contain;

2. 비율은 맞추지만 다 채우게 (안 나오는 부분이 생길 수 있음)

- background-size: cover;

## 29강 배경 속성 약식표현

1. 약식표현하면 디버깅하기 어려움.

2. 코드량이 줄어든다는 장점도 큼.

3. 취향.

```css
.spot {
  background: url('//') no-repeat center/cover;
}
```

## 30강 알랜드 카페 영역 배경 이미지

1. 추후 수정을 고려해서 새 영역을 만들어서 합치거나 나누자.

## 31강 배경이미지의 여백 색칠하기

```css
.class {
  background: url('//') no-repeat center/cover;
  background-color: brown;
}
```

1. 여백을 채우기 위해서 컬러를 지정해서 채우게 되는데 이때 코드작성 순서를 컬러를 위에 쓰게 되면 약식표현으로 된 형식으로 지정이 되어버려 적용이 안된다.
2. 그래서 약식표현을 먼저쓰면 컬러가 디폴트값으로 되어있다가 그 후에 다시 지정을 해줬다는 식으로 생각하고 작성해야한다.

## 32강 그라디언트 배경색

1. 그라데이션 종류 크게 5가지 지원

2. Linear, Radial, Repeating Linear, Repeating Radial, Conic

```css
body {
  background: linear-gradient(#000000, #000001);
  background: repeating-linear-gradient(#000000, #000001);
  background: conic-gradient(#000000, #000001);
}
```

## 33강 리니어 그라데이션

1. 진행되는 방향 설정 가능

```css
body {
  background: linear-gradient(to right, #000000 50%, #000001 50% 100%);
}
```

2. 각도 설정도 가능(angle)

- rotate(45deg) : 45도
- rotate(3.1416rad) : 라디안
- rotate(-50grad) : 각 90도 지점마다 100 200 300 400
- rotate(1.75turn) : 바퀴, 90도 = 0.25turn

- deg 많이 씀.

3. 색 양 조절

- 합쳐서 100이 되게 하는게 아니라 끝나는 지점을 찍는 것.
- 이걸 이용해서 red 20% green 20% 50% blue 50% 100% 이렇게 끝나는 지점을 설정하면 그라데이션 대신 단색으로 여러색을 표현할 수도 있다.

## 34강 Radial 그라데이션

1. 원형으로 퍼지는 그라데이션

2. circle or eclipse (원 또는 타원)

3. at <position>

4. size : closest-side, -corner, farthest-side, -corner

- closest : 가장 가까운
- farthest : 가장 먼
- side : 면
- corner : 모서리

- at 100px 0px 지점을 표시하면 그 지점에서의 거리를 기준으로 표현한다.
- 지점에서 가장 가까운 모서리 혹은 면까지의 퍼센테이지를 따져서 색이 바뀐다고 이해하자.

## 36강 실습

1. 컨텐츠가 없으면 기본 높이는 0이므로 항상 지정해야한다.

2. transparent : 투명색

## 37강 background 옵션

1. background-attachment : scroll, fixed, local

2. scroll : element에 따라서 움직임

3. fixed : 화면 영역 viewport에 붙음

4. local : 컨텐츠(element's contents)에 따라서 움직임.
