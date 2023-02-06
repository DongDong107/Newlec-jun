# CSS 07회 Grid 레이아웃

## 59강 Grid 레이아웃 학습 개요

1. Grid는 상용화 된지 얼마 안됐고, 기능이 워낙 많아서 조금은 깊은 이해가 필요하다.

2. 손쉬운 격자형 레이아웃

- 격자형 레이아웃을 할 수 없어서 선형배치를 중첩햇어야 했다.

- 반복적으로 격자형 배치를 할 수 있다.

- 그리드 시스템을 이용할 수 있다.

- 모바일 퍼스트 디자인과 브레이크 포인트

- 반응형을 하지만 그리드 시스템까지 신경쓰지는 않는다.

- Fixed and flexible track sizes

3. Grid 용어

- Track, Gutter(gap), Cell, Area
- 줄, 간격, 칸, 칸들의 모임

4. 고정 크기 track 만들기

- Fixed
- grid-template-columns: 100px 100px 100px;
- grid-template-rows: 100px 100px;

## 60 고정 크기 Track 만들기

1. Grid에 아이템 추가하기

2. gutter (gap) 설정하기

- 칸 사이의 간격이 벌어짐
- gap을 설정하면 그리드 전체 열행 길이가 늘어난다. -> 생각하면서 개발.

- 모바일은 폭에 대해서 가변적으로 만들어야 한다.

## 61강 가변 크기 트랙 만들기

1. 가변 크기 Unit : %, auto, fr(fraction)

- 너비를 동일한 크기로 설정하기

- fr은 그리드 박스 크기를 나눔
- auto 는 박스 여백을 나눔
- 위 두개는 엄연히 다름. auto는 여백이 있어야 나눔. 트랙의 크기가 아니라 여백을 나눠가진다.
- 크기를 나눌때는 fraction.
- fr과 auto를 함께 사용하면 auto는 여백을 가질 수 없다.

2. repeat()를 이용해 트랙만들기

- grid-template-columns: repeat(3, 33%);
- grid-template-columns: 60px repeat(2, 1fr 2fr);
- minmax(60px, auto) : 최소와 최대 공간 정하기

## 62강 줄번호로 아이템 배치하기

1. 줄 번호로 배치하기

- grid-column-start: 2;
- grid-column-end: 3;
- grid-row-start: 2;
- grid-row-end: 2;

2. 간편식

- grid-column: 1/3;
- grid-row: 2/3;
- grid-column: 2 / span 3; (2번째부터 3칸 쓰겠다는 뜻)
- grid-column: -1/-3; (음수는 오른쪽을 기준으로, 여기선 span 안먹음)

3. 명식적으로 시작지점을 정해줘야 겹치게 만들 수 있다. (span 3) 으로만 지정하면 안겹치려고 도망다님.

## 63강 알랜드 영역의 레이아웃

1. object-fit : cover;

## 64강 영역이름으로 아이템 배치하기

1. 라인번호로 영역을 잡을 수도 있다.

- gird-area

2. 영역에 이름을 정할 수 있다.

- grid-template-areas : "header header"
  "aside main"
  "footer footer";

3. 고정 크기인 공간에 아이템이 초과 되면?

- 초과될때 방향을 정할수는 없ㄷ나?
- columns, row쪽에 방향에 auto-fill
- auto-fit 딱 아이템만큼만 만들어줌
- 여백이 생기면? minmax(, auto) 해줌.

- 자동으로 만들기 (auto-fill 이랑 비슷함)
- grid-auto-rows:100px;

4. 짧음 표현

```css
body {
  display: grid;
  grid-template:
    'hd hd hd hd' 100px
    'sd main main main' 100px
    'ft ft ft ft' 100px
    / 100px 100px 100px 100px;
  /* grid-template: repeat(3,100px)
                  / repeat(3,100px) 위는 row 아래는 column 이런식으로도 표혀 ㄴ가능*/
}
```

5. 자동 아이템 배치 (grid-auto-flow)

```css
body {
  display: grid;
  grid-auto-flow: column; /*아래방향으로 채워짐 row는 오른쪽으로*/
}
```

## 65강 줄 이름으로 아이템 배치하기

1. 영역이름이 아닌 라인 이름을 정할 수 있다.

```css
body {
  display: grid;
  grid-template-columns: [aside-start] 250px [main-start] 1fr;
}
```

2. 선 하나에 이름이 2개일 수도 있다.

- [aside-end main-start]

3. 영역 이름이 부여되면 묵시적으로 라인 이름이 붙는다.

4. Alignment Control

- row, 수평 : justify
- 수직, block : align

- place: align justify

## 66강 multiple column layout

- 텍스트 단 나누기
- column-count: 3; : 단 수
- column-gap: 10px; : 단 사이 간격
- column-rule: 2px solid; : 단 선 표시, 스타일링
- 더 필요한 기능들은 mdn 찾아보기

## 67강 CSS3를 이용한 트랜지션

- 애니메이션
- css 트랜지션, 애니메이션, JS의 협업이 필요
- 트랜지션 : 시간을 지정해주고 그 시간동안 동작하도록
- 코드 자체는 단순하다.

```css
body {
  transition: 1s;
}
```

## 68강 CSS3에서 확장된 변형 속성 1

- www.css3maker.com/

1. Transform

- Scale
- Translate
- 위의 두 속성은 전에도 구현이 가능했지만, 초기값을 구현해야 하는 불편함, 다른 속성과 엘리먼트에 영향을 주는 문제가 있었다.
- Rotation
- Skew
- 위의 두 속성은 새로 나온 기능들.

## 69강 알랜드 소개 섹션 스타일링

- 인라인은 블럭태그를 감쌀 수 있는 친구가 아니다.
- padding 값을 잘 주어야 한다.

## 70강 CSS3에서 확장된 변형 속성 2

- transform - mdn 사이트 참고
- 트랜지션 속성을 부여해야 움직임이 발생한다. (트랜스폼이 움직임을 부여해주는 것은 아님.)
- transition : width 1s, transform 2s 1s; (마지막 초는 delay)
- transform-origin: 0 0;(좌상단이 기준점)
- transition-duration:
- transition-property:
- transition-timingfunction:;
- transition-delay: ;

- margin은 박스 크기가 커진다.

- 이름을 다 지정하는 이유: 구조 추가에서 자유롭다.
- 단점: 이름 중복이 일어날 수 있다. 이름 구조를 잘 잡아서 사용해야 한다. (단점이라기 보다는 유의해야할 점.)

## 71강 Timing Function

1. Easing Function

- 움직이게 되는 구간마다의 속도에 대한 종류가 많다.
- linear

2. 계단식 Transition

- steps(6,end);

## 72강 애니메이션

1. 트랜지션과 애니메이션

- 트랜지션 : 시작과 끝이 있고 쭈욱 재생되는 것
- 애니메이션 : 중간중간 지점이 있어서 프레임마다 다르게 재생될 수 있는 것.

2. 애니메이션

- animation

```css
@keyframes rotate-out {
  from {
    transform: ;
  }
  20% {
    height: 2px;
  }

  to {
    height: 2px;
    transform: rotate(360deg) translate;
  }
}
```
