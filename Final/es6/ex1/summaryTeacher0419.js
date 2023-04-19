//---- promise 콜백의 중첩을 줄이는 도구-------------------------
{
  // 이 함수는 우리가 만든 함수가 아니라고 가정하자.
  // function download(){
  //     // 다운로드 완료
  //     // 오랜 시간...이..흐..른뒤
  //     return [2,4,3];
  // }
  let url = "http://..";
  function download(url,callback){
      // 다운로드 완료
      // 오랜 시간...이..흐..른뒤
      callback([2,4,3]);
  }

  
  

  // -------------------------------------
  // 여기는 download 라이브러리를 사용하는 내 코드
  // let result = download(); // 오랜 시간을 잡아먹는 코드
  // console.log(result);    // 먹통 언제 오지??....ㅜㅜ

  // 내가 그랬지..오래 걸린다고..그니까.. 이따 완료되면 알려줄거니까
  // 네 코드를 부를 수 있게 함수를 알려줘~~
  function downloadHandler(result){
      console.log(result);    // 우앗..데이터가 왔다.
  }
  // 미리 함수를 만들어서 나중에 이 함수를 호출해서 다운로드 완료를 알려달라고 함수를 위임 함.
  /* let result = */ download(url,downloadHandler); 

  // 그런데 일반적으로는 함수를 미리 만들지 않고 넘겨주면서 정의한다.
  download(url,function(result){
      console.log(result);    // 우앗..데이터가 왔다.
  }); 

  // 위의 방식이 다음처럼 바뀌는 것을 바란다.
  // 1. 서비스 함수가 인자로 직접 콜백을 받지않고, 콜백을 받는 도구를 따로 두도록 하자.
  // 2. 콜백을 직접 받지 않음으로써 중첩을 줄이자.
  // 이런 것들을 위한 도구가 Promise 객체인가지유~
  console.log("--------promise ---------------")
  function downloadPromise(url){
      // 다운로드 완료
      // 오랜 시간...이..흐..른뒤
      return new Promise(function(resolve){            
          resolve([2,4,3]);            
      })
  }

  let promise = downloadPromise(url);

  promise
  .then(function(result){
      console.log("pro1-----------------");
      console.log(result);
      return result[0];    // 우앗..데이터가 왔다.
  })
  .then(function(n){
      console.log("pro2-----------------");
      console.log(n);
  });

  console.log("/---------- promise -------------")

}


// ---- 문자 코드와 RegExp 검색
{
  console.log("abcd".length);
  console.log("안녕".length);
  console.log("𠮷".length == 2);

  let phone = "asdf010-1234-2321222"; // 패턴? 상수(*)?
  //let exp = "010-????-????";  // 패턴(*)을 만족하는 문자열
  //let exp = "010-[0123456789][][][]-[][][][]";  // 패턴(*)을 만족하는 문자열
  //let exp = "010-[0-9][][][]-[][][][]";  // 패턴(*)을 만족하는 문자열
  //let exp = "010-\d[][][]-[][][][]";  // 패턴(*)을 만족하는 문자열
  //let exp = "010-\d{4}-\d{4}";  // 패턴(*)을 만족하는 문자열
  //let exp = "01[016789]-\d{3,4}-\d{4}";  // 패턴(*)을 만족하는 문자열
  //const exp = new RegExp("01[016789]-\d{3,4}-\d{4}");
  // const exp = /^01[016789]-\d{3,4}-\d{4}$/;    
  // console.log(exp.test(콜));

  let html = `<div>
                  <h2>hello</h2>
                  <ul>
                      <li>okay</li>
                      <li>
                          <b>bye</b>
                      </li>                        
                  </ul>
              </div>`;

  //let exp = new RegExp("<.>", "i");
  //let exp = /<.>/;
  //let result = html.match(exp);
  //console.log(result);

  let st = `<hello> good </hello>hoho 3273
          haha <bye> 7821 </bye>
          nazzoo noohoo`;
  //let exp = /[a-o1-5]+/g;
  let exp = /<\w+>.+<\/\w+>+/g;
  let result = st.match(exp);
  console.log(result);

  // 1개 이상의 1~5까지의 숫자도 포함하게 해주세요. 다음처럼
  //['hello','good', 'hoho', '32', '3', ...]
  // 꺽음쇠를넣어서 다음처럼 검색되도록 해주세요.
  // ['<hello>', '32', '3',...


  console.log("---regexp----------------------")
}

//---- Iterator 구현을 쉽게 해주는 생성기(Generators)----------
{
  let exam = {
      kor:10,
      eng:39,
      math:20,
      *[Symbol.iterator](){
          yield this.kor;
          yield this.eng;
          yield this.math;
      }
  };

  for(let n of exam)
      console.log(n);

  console.log("----------------------")

  let lotto = {
      *[Symbol.iterator](){
          let nums = [2,13,24,21];
          //let index=0;
          for(let i=0; i<nums.length; i++)
              yield nums[i];
      }
  };

  for(let n of lotto)
      console.log(n);

  console.log("----------------------")
}

//---- Symbol을 이용한 Iterator인터페이스 구현하기
{
  let lotto = {
      [Symbol.iterator](){
          let nums = [2,13,24,21];
          let index=0;
          return{
              next(){
                  return {
                      done:index==4?true:false,
                      value:nums[index++]
                  }
              }
          }
      }
  };

  {
      //let it = lotto.values();
      // console.log(it.next().value);
      // console.log(it.next().value);
      // console.log(it.next().value);
      // console.log(it.next().value);
      for(let n of lotto)
          console.log(n);
  }
  console.log("---ar------------------")
  let ar = [12,13,14,15,16];
  {
      // let it = ar.values();
      // console.log(it.next().value);
      // console.log(it.next().value);
      // console.log(it.next().value);
      // console.log(it.next().value);
      for(let n of ar)
          console.log(n);
  }


  //for(let n of lotto.values()) //{ next(){ return{done,value} } }
  //    console.log(n);
  
  console.log("---------------------------");
}


//---- Symbol을 이용한 인터페이스 정의 -------
{
  let examSymbol = {
      total : Symbol(),
      avg : Symbol()
  };

  class Exam{
      constructor(){
          this.kor = 20;
          this.eng = 30;
          this.math = 40;
      }

      [examSymbol.total](){
          return this.kor+this.eng+this.math;
      }

      avg(){
          return this.total()/3;
      }
  }

  let exam = new Exam();
  //exam.total(); // (x)
  let result = exam[examSymbol.total]();
  console.log(result);

}

// ---- Symbol ---------------
/**
구현해야 할 함수에 대한 약속 == 인터페이스
자료형 정의가 불가능한 자바스크립트는 그 약속을 심볼을 이용하여 정의한다.
*/
{

  let s = Symbol();

  console.log(s);

  let exam = {
      kor:10,
      eng:20,
      [s](){
          return this.kor+this.eng;
      }
  };

  let aa = {
      a:20,
      b:30,
      total(){
          console.log("hehe 속았지로~~ㅇ");
      }
  };

  console.log(exam[s]());

  console.log("---------------------------");
  
  
}


// ---- 나도 for of 문에서 열거하고 싶다~~~
{
  // let exam = {
  //     kor:10,
  //     eng:20,
  //     math:30,
  //     values(){
  //         return{
  //             next(){
  //                 return {
  //                     done:false,
  //                     value:this.kor
  //                 }
  //             }
  //         }
  //     }
  // };

  // for(let n of exam.values()) //{ next(){ return{done,value} } }
  //     console.log(n);
  
  // console.log("---------------------------");
  
  // let lotto = [3,6,8,29,33,34];

  // for(let n of lotto)
  //     console.log(n);

  // console.log("---------------------------");
}

// ---- Collection이 없다가 있다
{
  // 유일한 콜렉션 : Array
  // 일반적인 언어에서 지원하는 콜렉션 : Set, Array, Map
  // Set 계열 : 키가 값과 같다. - 값의 중복을 허용하지 않는다.
  // List 계열 : Array 는 값의 삽입 위치가 키가 된다. 위치(Index) 기반의 콜렉션
  // Map 계열 : 키를 따로 설정할 수 있다. 값에 키를 설정하기 위한 콜렉션으로 임시 객체를 대신해서 사용한다.
  // 콜렉션이 가져야 할 기능 -> 값들을 열거할 수 있느냐
  // 

  //let lotto = [2,4,6,29,];
  let lotto = new Set();
  lotto.add(Math.floor(Math.random()*45)+1);
  lotto.add(Math.floor(Math.random()*45)+1);
  lotto.add(Math.floor(Math.random()*45)+1);
  lotto.add(Math.floor(Math.random()*45)+1);
  lotto.add(Math.floor(Math.random()*45)+1);
  lotto.add(Math.floor(Math.random()*45)+1);

  let it = lotto.values();
  for(let n of it)
      console.log(n);

  let kvit = lotto.entries();
  for(let [k,v] of kvit)
      console.log(`key:${k}, value:${v}`);
}
{
  let ar = [3,4,2,6,7];

  let kvit = ar.entries();
  for(let entry of kvit)
      console.log(`key:${entry[0]}, value:${entry[1]}`);


  // console.log(lotto);

  // console.log(lotto.entries().next());
  // console.log(lotto.values().next());
  // console.log(lotto.keys().next());

}

{
  let map = new Map();
  map.set("id", 1);
  map.set("title", "Hello");
  map.set("writerId", "newlec");

  let kvit = map.entries();
  for(let [k,v] of kvit)
      console.log(`key:${k}, value:${v}`);

  map.forEach((v,k,m)=>{
      console.log(`key:${k}, value:${v}, cols:${m}`);
  });
}


//---- Spread Operator ----------
{
  function print(x, y, z){
      console.log(`x:${x},y:${y}`);
  }

  let ar = [2,3,5];

  //print(ar[0], ar[1], ar[2]);
  print(...ar);
}

//---- template string -------------
{
  let kor=30;
  let eng = 40;
  let msg = String.raw`\<span>
                  yay~\n
              </span>\ `;

  let template = `kor:${kor}, eng:${eng}, msg:${msg}`;
  console.log(template);
}




// ----- Enhanced Object Literals ----------
// let kor = 3;
// let eng = 4;
// let math = 5;


// let obj = {
//     kor:kor,
//     eng:eng,
//     math:math,
//     total:function(){
//         return this.kor + this.eng + this.math;
//     },
//     "to-string":function(){
//         console.log("hello");
//     }
// }; // normal object

// // enhanced object
// // 1. 변수를 이용해 속성을 정의할 경우 변수명과 키가 같은 이름일 경우에는 키를 별도로 설정할 필요가 없다.
// // 2. 함수를 정의할 때 : function 키워드를 사용할 필요가 없다.
// // 3. 속성으로 변수가 올 수 있다. ??? 이 기능이 향상?
// let colname = "okay";
// let enObj = {
//     kor,
//     eng,
//     math,
//     total(){
//         return this.kor + this.eng + this.math;
//     },
//     "to-string":function(){
//         console.log("hello");
//     },
//     [colname]:function(){
//         console.log("울라라?");
//     }
// };

// enObj.okay();

//----- class --------------------
// class Exam{
//     #kor;
//     #eng;
//     #math;
//     constructor(kor=0, eng=0, math=0){
//         this.#kor = kor;
//         this.#eng = eng;
//         this.#math = math;
//     }

//     get kor(){
//         return this.#kor;
//     }

//     set kor(value){
//         this.#kor = value;
//     }

//     total(){
//         return this.#kor + this.#eng + this.#math;
//     }
  
//     avg(){
//         return this.total()/3;
//     }
// }

// class NewExam extends Exam{
//     #com;
//     constructor(kor=0, eng=0, math=0, com=0){
//         super(kor, eng, math);
//         this.#com = com;
//     }

//     total(){
//         return super.total() + this.#com;
//     }
  
//     #test(){
//         console.log("hehehe");
//     }
// }

// let exam = new NewExam(1,1,1,1);
// console.log(exam.total());

// exam.kor = 30;
// console.log(exam.kor);
// console.log(exam.total());




//"use strict";

// this.x = 30;
// x = 20;


// setTimeout(() => {
//     //console.log(arguments.length);
//     console.log(this.x);
// }, 3000);

// setTimeout(function(){
//     console.log(arguments.length);
//     console.log(this.x);
// }, 3000);

// class Test{
//     constructor(){
//         this.x = 10;

//         setTimeout(() => {
//             console.log(this.x);
//         }, 3000);

//         setTimeout(function(){
//             console.log(this.x);
//         }, 3000);
//     }
// }

// new Test();