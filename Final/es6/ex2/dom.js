window.addEventListener('load', function () {

  // 4. 이벤트 객체
  {
    // 이벤트 종류
    // Event 객체의 속성
    // target / currentTarget
    
            // Event 객체의 속성
        // target / currentTarget
        // ┌─────────┐
        // │   A     │
        // │ ┌─────┐ │
        // │ │ B   │ │
        // │ │     │ │
        // 커서가 B를 클릭하면
        // 이벤트가 발생한 녀석은 B이다.
        
        // A.onclick = function(e){
        //    console.log(e.target); -> B
        //    console.log(e.currentTarget); -> A
        // B.onclick = function(e){
        //    console.log(e.target); -> B
        //    console.log(e.currentTarget); -> B
        //}

  }


  // 3. 노드 조작을 위한 예제1
  {
    let btnUp = this.document.querySelector('.btn-up')
    let btnDown = this.document.querySelector('.btn-down')
    let current = this.document.querySelector('.current')

    //previousSibling
    //nextSibling

    btnUp.onclick = function () {
      // current.previousElementSibling.before(current)
      // current.insertAdjacentElement("befor")
      current.previousElementSibling.insertAdjacentElement("beforebegin",current);
    }
    btnDown.onclick = function () {
      // current.nextElementSibling.after(current)
      // 
      current.nextElementSibling.insertAdjacentElement("afterend",current);
    }
  }

  // 2. 노드 조작
  {
    let s1 = document.querySelector('#s1')
    let first = s1.querySelector('li:first-child')
    console.log(first)

    // 삭제
    // first.parentNode.removeChild(first);
    // first.remove();

    // 추가
    {
      let li = document.createElement('li')
      let txt = document.createTextNode('c')
      let ul = s1.querySelector('ul')
      // let li = document.querySelector("li");

      // ul.appendChild(li);
      li.appendChild(txt)

      // ul.append(li);
      // li.append(txt);
    }

    //변경
    {
      let ul = s1.querySelector('ul')
      let li = ul.querySelector('li:first-child')
      let last = ul.querySelector('li:last-child')

      // li -> last 위치로 옮기는 코드

      // let oldOne = ul.replaceChild(newOne, li);
      // ul.replaceChild(li, last);
    }
  }

  // 1. 노드 선택
  {
    //node란? 문서를 구성하는 모든 객체
    // let s1 = document.querySelector("#s1");
    // let lis = s1.querySelectorAll("li");
    // let s1 = document.body.getElementsByClassName('section1');
    // s1.getElementsByClassName('aaa');
    // console.log(s1[0]);
  }

  // 0. 노드 생성
  {
  }
})
