window.addEventListener('load', function () {
  //.s4 drag and drop api
  {
    let s = this.document.querySelector('.s4')
    let dropzone = s.querySelector('.drop-zone')

    dropzone.ondragenter = function (e) {
      console.log('enter')
    }
    dropzone.ondragover = function (e) {
      e.preventDefault()

      if (e.dataTransfer.types[0] == 'Files') {
        //여기서 s는 배열의미함
        dropzone.classList.add('valid')
        dropzone.classList.remove('invalid')
      } else {
        dropzone.classList.add('invalid')
        dropzone.classList.remove('valid')
      }

      // if(e.dataTransfer.files.length != 1)
      //     console.log("둘 이상의 파일 업로드 불가");

      console.log('over')
    }
    dropzone.ondragleave = function (e) {
      dropzone.classList.remove('invalid')
      dropzone.classList.remove('valid')

      console.log('leave')
    }
    dropzone.ondrop = function (e) {
      e.preventDefault()
      console.log(e.dataTransfer.types)

      if (e.dataTransfer.files.length > 1)
        console.log('둘 이상의 파일 업로드 불가')
      let files = e.dataTransfer.files[0]

      // FormData 가 multipartfile 함유
      let formData = new FormData();
      formData.append("file",files);
      formData.append("test","hehe");

      //XHR로 업로드 진행하기
      let request = new XMLHttpRequest();
      request.onload = function(){
        console.log("done");
      }
      
      // 단위가 보내질 때마다 발동
      request.upload.onprogress = function(){
        console.log("progress");
      }

      request.open("POST","http://localhost:8080/upload");
      // request.setRequestHeader("Content-Type", "multipart/form-data");
      request.send(formData);

      console.log('drop')
    }
  }

  // .s3 목록을 키보드로 관리
  {
    let s3 = document.querySelector('.s3')
    let ul = s3.querySelector('ul')
    let current = null // ul.querySelector("li.current");
    let lis = ul.querySelectorAll('li')

    let delButton = s3.querySelector('.btn-del')

    s3.focus() //처음에 포커스 되게

    //키보드 del 눌렀 을 때

    s3.onkeydown = function (e) {
      console.log(`code: ${e.code} key: ${e.key} keycode: ${e.keyCode}`)

      const event = new Event('click') //클릭 이벤트 인스턴스를 만든다.
      console.log(event)
      delButton.dispatchEvent(event) // del버튼에 click관련 이벤트가 있는곳으로 보낸다.
      // delButton.onclick = function(){} 로 감
      console.log(delButton.dispatchEvent(event)) //있으므로 true가 출력된다.

      //나의 방식
      // if((e.code) !== 'Delete')
      //     return;

      // let selectedButtons = [...ul.querySelectorAll("input:checked")]
      // .map(a => a.parentElement);

      // for(let li of selectedButtons)
      // li.remove();
    }

    delButton.onclick = function () {
      //수업에서
      //클릭시
      // let selectedButtons = ul.querySelectorAll(".selected");

      // for(let li of selectedButtons)
      //     li.remove();

      //내가 만든 클릭시 지우기
      // let current = ul.querySelector("li.selected");
      // let btnsSelected = current
      // console.log(btnsSelected);

      // btnsSelected.remove();

      //체크 할 때
      //나의방식
      // let selectedButtons = ul.querySelectorAll("input:checked");

      // for(let pa of selectedButtons){
      //     let paA= pa.parentElement;
      //     paA.remove();
      // }

      //map 사용해보기
      // //for-each
      // let arr = [1,2,3];
      // arr.forEach(a=>console.log(a+1));

      // //MAP()
      // let arr1 = arr.map(a => `<a id=${a}>`);
      // console.log(arr1);

      let selectedButtons = [...ul.querySelectorAll('input:checked')].map(
        (a) => a.parentElement
      )

      for (let li of selectedButtons) li.remove()
    }

    ul.onclick = function (e) {
      console.log(`click target: ${e.target}`) //이 클릭의 주체가 과연 누구?
      console.log(`click currentTarget: ${e.currentTarget}`) //이 클릭의 주체가 과연 누구?
      //span 클릭이 아니면 작동 안되게
      if (e.target.tagName !== 'SPAN') return

      console.log(e)

      let selected = e.target.parentElement
      while (selected.tagName !== 'LI') selected = selected.parentElement

      selected.classList.toggle('selected')
    }
  }

  // 4. 이벤트 객체
  {
    let s1 = document.querySelector('.s2')
    let ul = s1.querySelector('ul')
    let current = ul.querySelector('li.current')
    let lis = ul.querySelectorAll('li')

    for (let li of lis)
      li.onclick = function (e) {
        //이전에 current로 선택된 li가 있는지를 알아보는 코드

        //다음처럼 for문을 사용하는 코드는 바람직하지 않다
        // {
        //     let lis = ul.querySelectorAll("li");
        //     let hasCurrent = false;
        //     for(let li of lis){
        //         if(li.classList.contains("current")){
        //             hasCurrent = true;
        //             console.log()
        //         }
        //         break;

        //     }
        // }

        //위의 방법보다 다음처럼 그냥 있는지 쉽게 확인할 수 있다
        // let selected = ul.querySelector("li.current");
        // console.log(selected)
        //append
        //prepand
        //replace
        //after

        if (current) {
          console.log('두번째 선택')

          // // current <-> selected
          // let sel_content= selected.textContent;

          //공식!!!
          let selected = e.target.parentElement
          while (selected.tagName !== 'LI') selected = selected.parentElement
          console.log(current)

          selected.classList.add('selected')

          // 이거는 추가가 아니라 대체
          selected.onanimationend = function () {
            selected.classList.remove('selected')

            let selectedBefore = selected.previousElementSibling
            current.replaceWith(selected)

            if (selectedBefore) selectedBefore.after(current)
            else ul.prepend(current)

            //null 이 되어야 이전것이 없어져!
            current.classList.remove('current')
            current = null
          }

          // //이거는 추기
          // selected.addEventListener("animationend",function(){
          //     console.log("test1");
          // })

          // selected.addEventListener("animationend",function(){
          //     console.log("test2");
          // })

          // selected.addEventListener("animationend",function(){
          //     console.log("test3");
          // })

          // let cur_content = current.textContent;

          // selected.textContent = cur_content;
          // cur_content.textContent = sel_content;

          // selected.appendChild(current);

          // //두번째 누른애의 바로 앞친구 선택
          // current1= current.previousSibling;

          // current1.appendChild(selected);

          return
        }

        //* 현재 선택된 노드를 찾고
        current = e.target.parentElement
        while (current.tagName !== 'LI') current = current.parentElement
        //* 선택된 노드임을 표시하는 스타일 변경
        current.classList.toggle('current')

        console.log(current)
      }
  }

  //위가 복사본 아래는 이전
  // {
  //     //이벤트 종류
  //     // Event 객체의 속성
  //     // target / currentTarget
  //     // ┌─────────┐
  //     // │   A     │
  //     // │ ┌─────┐ │
  //     // │ │ B   │ │
  //     // │ │     │ │

  //     let section = this.document.getElementsByTagName("section")[0];
  //     let ul  = section.querySelector("ul");
  //     let current = ul.querySelector("li.current");
  //     let lis = ul.querySelectorAll("li");

  //     // let lis = ?;
  //     for(let li of lis)
  //         li.onclick = function(e){
  //             // current = e.target;

  //             // 뭘하는거임??
  //             current = e.target.parentElement;
  //             while(current.tagName !== "LI") //대문자로!
  //             current = current.firstElementChild;

  //             //while문으로 이용방법
  //             let span = current.firstElementChild;
  //             while(span.tagName !== "SPAN") //대문자로!
  //                 span = span.firstElementChild;
  //             console.log(span);

  //             // 이렇게 스타일을 적용하는 것은 바람직하지 않다.
  //             // 왜냐 나중에 생각이 바뀌어서 다양하게 하고싶은데, 스타일을 코드로 하면안된다
  //             //js로 한다는거는 동적인것인데, 시작할 때 거는 미리 준비하게 해야한다
  //             span.style.backgroundColor = "red";

  //             // 2. 구조의 중첩에서 태그명이 고정이 아닌경우는?
  //             //li 도 span도 다른 태그로 변경이 될 수 있다면?

  //         }
  // }

  //3. 노드조작을 위한 예제1
  {
    //섹션얻기!

    let btnUp = this.document.querySelector('.btn-up')
    let btnDown = this.document.querySelector('.bnt-down')
    console.log(btnDown)

    let ul = this.document.querySelector('ul')
    let current = ul.querySelector('li:first-child')

    btnUp.onclick = function () {
      let next = current.previousElementSibling
      next.insertAdjacentElement('beforebegin', current)
    }

    btnDown.onclick = function () {
      //current 항목을 밑으로 내리는것

      // current.nextSibling //모든 노드를 대상으로 함
      // current.nextElementSibling; //다음
      // current.parentElement; //부모
      // current.previousElementSibling;
      // current.firstElementChild;
      // current.lastElementChild;

      // console.log(current); //a
      let next = current.nextElementSibling
      // console.log(next); //b

      // //새로운놈, 여기에 (b에다가 a를 넣음)
      // let oldone = ul.replaceChild(next, current);

      // // let next2 = current.nextElementSibling;
      // ul.appendChild(oldone); //

      // 다음늘 내리는 코드 1
      //after() /append() / prepend() / append()

      // current.nextElementSibling.after(current);

      // 다음을 내리는코드2
      // insertAdjacentElement() / replaceChildren()
      // 부모.replaceChild() / 자식.replaceWith(자식)

      next.insertAdjacentElement('beforeend', current)

      // current = next; // b를 a에 넣음 현재갱신
    }
  }

  //2. 노드 조작
  {
    let s3 = document.querySelector('#s1')
    let first = s3.querySelector('li:first-child')

    console.log(first)

    //1 삭제

    // first.parentNode.remove(first); //Node인터페이스에 있는기능
    // first.remove(); // Element 인터페이스에 있는 기능
    // console.log(first);

    //2 추가
    {
      //붙이는건 도큐먼트로
      let li = this.document.createElement('li') //태그 만들기
      let txt = this.document.createTextNode('c') //텍스트 만들기
      let ul = s3.querySelector('ul')

      // ul.appendChild(li);
      // li.appendChild(txt);

      //붙여주기 Element 인터페이스
      // ul.append(li); //잠깐 없애기
      li.append(txt)
    }

    //3 변경
    {
      //사실 그렇게 바람직한 방법은 아님
      //첫번째것 한번에 얻어오는 방법
      // let li = s3.querySelector("ul>li:first-child");
      // let last = s3.querySelector("ul>li:last-child");

      //ul 얻은 다음에 얻은 것 가지고 하는것이 바람직함
      let ul = s3.querySelector('ul')
      let li = ul.querySelector('li:first-child')
      let newOne = ul.querySelector('li:last-child')

      // li -> last 위치로 옮기는 코드
      // ul.replaceChild(여기에, 새로운놈);
      // ul.replaceChild(li, last);
      // let oldone = ul.replaceChild(newOne, li);
      // ul.appendChild(oldone);
    }
  }

  //1. 노드 선택
  {
    // Slectiors API -> 선택자 이용하는것 -> 가져오면 뭐해 활용해야지!! 조작!
    // let s3 = document.querySelector("#s1");
    // let li = document.querySelectorAll("li");
    // 울타리 찾을 때
    // let s1 = document.getElementById("s1");
    // let els = document.getElementsByTagName("section");
    // let s2= document.body.getElementsByClassName("section1");
    // //울타리 안쪽 찾을 떄
    // // document.getElementsByClassName
    // // document.getElementsByTagName
    // s2.getElementsByClassName("aaa");
    // console.log(s2[0]);
    // console.log(s1);
    // console.log(els[0]);
    // console.log(els[1]);
  }

  // 0. 노드생성
  {
    // let node = document.createTextNode("hello");
    // document.body.append(node);
  }
})
