# 02회 선택자, Selecters.

07강 기본 선택자

- 태그명, 클래스명, ID명, 전체
- 셀렉터를 이용한 엘리먼트 선택
- .h1 이면 앞에 \* 이 생략된 것.
- 태그명은 그냥 태그명
- 클래스명은 앞에 .클래스명
- ID명은 앞에 #ID명
- 전체는 Any뜻하는 \*

08강 id와 class의 차이점

- 분업화 되어있다고 생각하자
- id : html을 다루는 사람이 정의
- class : css를 다루는 사람이 정의
- class를 정의한다 = 스타일을 정의한다.

09강 속성 선택자

- h1이라는 태그를 가지고 있으면서 class 속성을 가지고 있는 모든 속성.

```css
h1[class] {
  color: red;
}
```

- h1 태그중에 class 가 h1 인 속성

```css
h1[class='h1'] {
  color: red;
}
```

- 속성을 이용한 셀렉팅

- ~= : contains the word
- |= : exactly or followed by a hyphen

  > zh, zh-CN, zh-OH 등등

- ^은 보통 시작, $는 끝을 의미.

```css
/* href 주소 끝이 .cn*/
a[href$='.cn'] {
}
```

- \*=

- [value i] : 대소문자 구별 X (i= ignore)

- ~= \*= 의 차이
  > ~= 선택자는 띄어쓰기를 기준으로 단어를 인식.
  > 따라서 하이픈(-)으로 연결된 단어는 전부 하나의 단어로 인식하고 별도의 단어라고 인식하지 않음.
  > en-us이면 title~="en" 이라했을때 선택되지않음.
  > \*= 는 있기만 하면 다 포함.
