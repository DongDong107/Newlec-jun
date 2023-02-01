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

60 20
61 28
62 21
63 12
64 26
65 28
66 8
67 11
68 13
69 33
70 41
71 23
72 12
