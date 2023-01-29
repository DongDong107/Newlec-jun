# CSS 05회 레이아웃

## 50강 Layout 스타일

1. Outside 블록과 Inside 블록의 분리

2. 블록 조립을 위한 배치(레이아웃) 방식

3. CSS Layout

(1) 수동모드

- absolute, realtive, fixed, sticky

(2) 자동모드

- display : inline...
- block, inline, inline-block, list-item, table
- flex(list-item), grid(table) : 애플리케이션 제작 형식이 들어온 형태.

4. 레이아웃과 display의 관계

1) 콘텐츠를 감싸는 inline 블록
2) inside 블록
3) internal 블록
4) outside 블록

5. position : static - 자동 조절되는 위치

1) display: block
   > 한 칸씩 차지해서 아래로 정렬이 되는
2) display: inline
   > 컨텐츠끼리 옆으로 수평 정렬이 되는

## 51강 position 속성 1

1. 수동모드

1) absolute -> 영역의 크기가 고정일 경우
   > 문서의 좌상단을 기준으로 고정됨.
2) fixed
   > 화면의 좌상단을 기준으로 고정됨.
3) relative
   > 상대위치, 원래 위치를 기준으로

## 52강 position 속성 2

1. 부모 영역의 포지션이 relative가 되면 자식 영역이 포지션 absolute는 화면이 아니라 부모영역을 기준으로 잡힌다.

2. 자동에서 수동 모드로 바꿀 때 컨텐츠 크기만큼 영역의 크기가 조정되므로 생각해야한다.

3. sticky는 fixed와 달리 자신의 위치는 지키면서 고정이 됨.

4. 하지만 부모영역이 사라지면 같이 사라진다.

## 추후 정리

1. 수동

- position: absolute, fixed, relative, sticky

2. 자동

- display: block, inline, inline-block, list-tiem, table, flex, grid

3. 좀 더 찾아보고 자세한 정리와 이해가 필요한 부분들. (중요한 부분들)
