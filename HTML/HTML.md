1. 웹문서 = 웹 + 문서
2. 문서에 링크를 달자! 하이퍼텍스트 HT
3. 컨텐츠를 구분해주는 마크업렝귀지 ML
4. 문서는 컨텐츠 구조 스타일
5. HTML은 문서의 구조를 만들기 위한 태그
6. 제목 문장 목록 표 폼

콘텐츠 마크업을 위한 태그들
1. mdn 에서 보면 현재 안쓰는 태그들을 확인할 수 있다. (휴지통마크)
2. whatwg.org
3. developer.mozilla.org
4. 파이어폭스에서 html의 새로운 기능들을 먼저 확인하고 실행해볼 수 있다.

콘텐츠 제목과 문장 마크업
1. <html/>
2. <head/>
- 실제로 화면에 드러나지 않음.
- body 태그에 영향.
- 메타데이터 소유
- <meta> <title>

3. <body/>
- 화면에 드러나는 부분.
- 제목 태그 <h> 6단계까지 있음.
- 문장 <p> : 한 문장을 감싸주는 태그이지 문장들을 감싸주지는 못함.

범용적인 마크업 도구
1. 방을만드는태그, 컨텐츠설명태그(인라인태그)
2. <div> 영역을나누는태그 (divison)
3. 특별한의미없이 영역을 나눌땐 왠만하면 div

이미지컨텐츠

제목과 번호 정하기

1. header title main footer 

컨텐츠 목록 마크업

1. ol ul dl li 

2. ol : 순서가 있는 리스트

2. ul : 기본 리스트

3. dl : 정의 목록 (타이틀dt,내용dd)

문서 아웃라인 잡기

1. 제목 달아주기
- 제목 부제목 구조화

헤더 영역 콘텐츠와 구조화

콘텐츠와 제목을 묶는 구조화
<div> 태그를 이용한 구조화

흔히 사용하는 웹사이트는 잘되어있나
1. 리스트, 표, 폼 태그사이에는 그 구조를 깨는 태그가 사이에 들어서면 안된다.

시맨틱 섹션 태그
1. <header> <main> <footer> <aside> <article> <section> 등등

2. id로만 영역의 특징을 표시했던 HTML4와는 달리 핵심영역은 태그를 지정하여 사용한다.

3. <header> 꼭 하나만 사용하는 것은 아니다. 대신 주제를 꼭 가지고 있어야 할 것.

4. <main> 페이지에 단 한 영역만 사용.

5. <footer> 저작권 등을 담은 내용들.

6. <section> 같은 주제를 가지고 있는 태그들을 묶는 태그

7. <nav> 안에 내용들이 모두 링크일 경우 묶는 태그

8. <section> 

9. <article>

10. 위 처럼 큰 영역, 방을 지칭하는 듯한 태그들이 블록태그

11. 컨텐츠와 관련된 태그들 : 인라인 태그

인라인태그

1. 블록 태그와 인라인 태그의 가장 큰 차이점이라 하면 블록 태그가 쓰일 경우 페이지 내의 한 줄 전체를 자신의 영역으로 가지고 있고 다음 태그의 영역은 그 다음줄 부터 해당이 된다.

2. 인라인 태그의 경우는 해당 컨텐츠의 영역이 끝나고 바로 옆에 사용될 수 있다. (다음 줄부터 사용 X)

3. 대표적으로 많이 쓰이는 인라인 태그 <span>.



