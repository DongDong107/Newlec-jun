# CSS 06회 Flex 레이아웃

## 53강 Flex Layout

1. Flex Display

1) Flex Termnology

   > - container
   > - flex item

2) Flex Lines (줄세우기)

   > - flex-direction
   > - flex-wrap
   > - flex-flow

3) Ordering (순서)

   > - order

4) Flexibility (크기)

   > - flex
   > - flex-grow
   > - flex-shrink
   > - flex-basis

5) Alignment (정렬)
   > - justify-content
   > - align-items
   > - align-self

2. Flex 컨테이너와 용어

1) main axis, cross axis

2) 크기정할 때 width, height 잘 안씀

3) 메인 축을 기준으로 정해짐.

4) 메인 축과 크로스 축을 기준으로 말해야 함. (너비, 수평 수직 정렬 ㄴㄴ)

5) flex 안의 아이템들은 display 속성 상관없이 flex의 기준으로

3. 목록의 방향을 원하는대로 바꿀 수 있다.

1) 수평 메인 축에 대한 이름이 있지만 flex로 그냥 사용한다.

## 54강 Flex Lines

(flex-direction / flex-wrap / flex-flow)

1. flex-direction

- row : 수평 방향
- column : 수직 방향
- rowm column-reverse : 각자 방향을 거꾸로

2. 지정할때 수도클래스를 잘 활용해보자.(mdn 열검색)

- :nth-child(2n) : 2번째애들마다

3. !! 자동모드로 바꾸면 너비가 컨텐츠크기를 따라가게 된다!

4. flex-wrap

- default = nowrap
- flex-wrap: wrap;
- wrap-reverse 속성도 있다.

## 54-2. 55강 Flexibility (크기)

1. flex-grow : 여백을 나누어 가짐.

```css
body {
  flex-grow: 1;
  flex-grow: 2;
  /* 나눠가지는 여백 크기의 비율을 1:2 이런식으로 나눠가짐 */
}
```

- 여백을 몰아가지라고 할 때 유용함.
- min-width, max-width

- flex-basis:100px : 기본으로 100px씩 가짐

- 메인축을 방향으로 크기를 정한다고 생각해야 함. (단순 width, height를 flex에서는 안쓰는 이유)

2. flex-shrink : 공간이 줄어들면?

- flex는 각 박스마다 여유공간을 두는 크기가 줄어들면 여유공간을 소비하게 된다.

- shrink는 각각의 아이템 공간의 여백을 쓰게 할거냐 말거냐

- 따라서 flex 아이템 박스들의 공간을 고정 시킬 수 있다.

- shrink 수치에 따라 달라지는 것 : 내 아이템박스의 여백을 몇 배나 더 내주어줄 것이냐. 따라서 0을주면 난 절대 안줘! 가 됨.

- 수치를 0,1 말고는 많이는 건들지 않음.

## 56강 Flex Lines 축약표현

1. flex 축약표현은 순서가 중요함

- flex : (grow) (shrink) (basis)

2. 축약 값

- flex: none; -> flex: 0 0 auto;
- flex: auto; -> flex: 1 1 auto;
- flex: inital; -> flex: 0 1 auto; (default)
- flex: 100px; -> flex: 1 1 100px;

3. flex가 가지는 영향권은 바로 아래 자식들만.

4. Ordering

- 순서바꾸기
- 다 기본으로 0 이고 -1로 설정하면 맨앞으로 감
- 대신 인덱스를 다 설정을 해줘야 한다.

```css
body {
  display: flex;
  order: 1;
}
```

## 57강 Box Alignment 1 (정렬)

- justify-content : 메인 축 정렬
- align-items : 크로스 축 정렬
- align-self : 각각의 아이템 정렬을 바꿀때 본인을 가리키는
- aligin-content : 컨텐츠를 한꺼번에 묶어서 정렬하고 싶을때 (패키징)

- 여유 공간이 없으면 정렬이 아무 의미가 없음.

1. 메인 축 정렬 옵션

- flex-start, end, center
- space-between(아이템 사이의 거리), space-around(아이템좌우 간격 유지)

2. 크로스 축 정렬 옵션

- 옵션을 주게 되면 아이템 크기를 따라가게 됨.

3. align을 부여하지 않았다고 정렬되고 있지 않은 상태가 아니라 aling-items: stretch 상태였던것!

4. stretch 하면 다 채움

5. flex 마무리

- flex-basis와 width가 서로 다른 값으로 사용되면?
- 둘이 같은 곳을 가르키면 해당 박스가 flex면 flex속성이 이김

- 메인 축 정렬
- flex는 특정 위치로 여백을 몰아넣는게 안되는데 어떻게 해야할까? => margin을 이용하자!
- 다만 여백이 있을 때 해야겠다

## 58강 header 스타일주기

1. 절대배치는 나중에 고려하는게 좋다.

2. 기억하자. flex의 영향권은 직속자식들뿐.
