window.addEventListener('load', function () {



     // 4. 이벤트 객체
     {
      let s1 = document.querySelector(".s2");
      let ul = s1.querySelector("ul");
      let current = ul.querySelector("li.current");
      let lis = ul.querySelectorAll("li");

      for(let li of lis)
          li.onclick = function(e){            

              //* 현재 선택된 노드를 찾고
              current = e.target.parentElement;
              while(current.tagName !== "LI")
                  current = current.parentElement;
              
              let selected = ul.querySelector("li.current");
              if(selected){
                console.log("2 번째 선택입니다.");
                
                // let temp = current;
                
                //   let tempNext = temp.nextElementSibling;
                //   selected.insertAdjacentElement("afterend",temp);                
                //   tempNext.insertAdjacentElement("beforebegin",selected);
                

                let temp = current;
                if(temp.nextElementSibling){
                  let tempNext = temp.nextElementSibling;
                  selected.insertAdjacentElement("afterend",temp);                
                  tempNext.insertAdjacentElement("beforebegin",selected);
                }
                else{
                  ul.append(selected);
                  ul.prepend(current);
                }
                
                // selected.replaceWith(current, selected);

                // current = selected;
                // selected = temp;
                // current <=> selected;  
                // return;
              }

              // if(current){
              //   console.log("두 번째 선택입니다.");

              //   let selected = e.target.parentElement;
              //   while(selected.tagName !== 'LI')
              //     selected.e.parentElement;

              //   let selectedBefore = selected.previousElementSibling;
              //   current.replaceWith(selected);
              //   selectedBefore.after(current);

              // }
                  
              current.classList.toggle("current");
              //* 선택된 노드임을 표시하는 스타일 변경
              // let span = current.firstElementChild;
              // while(span.tagName !== "SPAN")
              //     span = span.firstElementChild;                 
              // // 이렇게 스타일을 적용하는 것은 바람직하지 않다.
              // span.style.backgroundColor = "red";
              // console.log(current);
          }
  }

    

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

  // }


  // {

  //   let current = null;
  //   let s2 = this.document.querySelector(".s2");

  //   let lis = this.document.querySelectorAll(".s2 > ul > li");

  //   for(let li of lis)
  //     li.onclick = function(e){
  //       // current = e.target;
  //       current = e.target.parentElement;        
  //       while(current.tagName !== "LI"){
  //         current = current.parentElement;
  //       }  

  //       let span = current.firstElementChild;
  //       while(span.tagName !== "SPAN")
  //         span = span.firstElementChild;
        
  //       // for(let span = current.firstElementChild;
  //       //   span.tagName !== "SPAN";
  //       //   span = span.firstElementChild;)

  //       // if(span.tagName !== "SPAN")

  //       // span.style.backgroundColor = "red";

  //       // 과연 current는 우리가 생각하듯이 li 일까?

  //       console.log(current);

  //       // 아니다. span이 나온다.
  //       // 내가 생각한 이벤트 대상과 실제 이벤트 대상이 같은지 알고 진행해야 한다.

  //     }

    

  //   // 이벤트 종류
  //   // Event 객체의 속성
  //   // target / currentTarget
    
  //           // Event 객체의 속성
  //       // target / currentTarget
  //       // ┌─────────┐
  //       // │   A     │
  //       // │ ┌─────┐ │
  //       // │ │ B   │ │
  //       // │ │     │ │
  //       // 커서가 B를 클릭하면
  //       // 이벤트가 발생한 녀석은 B이다.
        
  //       // A.onclick = function(e){
  //       //    console.log(e.target); -> B
  //       //    console.log(e.currentTarget); -> A
  //       // B.onclick = function(e){
  //       //    console.log(e.target); -> B
  //       //    console.log(e.currentTarget); -> B
  //       //}

  // }


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
