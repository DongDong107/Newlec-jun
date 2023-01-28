# 03회 콤비네이션 연산자

10강 콤비네이션 연산자

- 빈 공백도 연산자.

1. 수직 방향 (자손, 자식)

- Descendant selector
- A B
- A의 자손 중에서 B를 찾아라

- Child selector
- A > B
- A의 자식 중에서 B를 찾아라

2. 수평 방향 (형제, 쓰여진 순서대로 형이 됨.)

- Adjacent sibling selector
- A+B
- A 바로 밑 동생인 B를 찾는다.

- General sibling selector
- A~B
- A 동생들 중 B인 애들을 다 찾음.

11강 콤비네이션 연산자 확인문제

12강 Selectors 우선순위

1.

```css
.h1 {
  color: green;
}
.h1 {
  color: orange;
}
.h1 {
  color: red;
} /* 얘가 짱 뒤에 친구가*/
```

2. tag < class < id

```css
#h2 {
  color: green;
}
h1 {
  color: orange;
}
.h1 {
  color: red;
}
```

3. 콤비네이션 연산자가 들어가면 우선순위 무조건 이기게 됨.

4. 기본 연산자 < 속성 연산자
