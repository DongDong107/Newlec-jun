// ---- promise 콜백의 중첩을 줄이는 도구 ---------------

{

  // 우리가 만든 함수가 아니라고 가정!
  function download(){
     return [2,4,3];
  }

  //여기는 download 라이브러리를 사용하는 내 코드
  let result = download(); // 오랜 시간을 잡아먹는 코드.
  console.log(result);

  let promise = download(url);

  promise
  .then(function(result){
      console.log(result);
  });
}

// RegExp
{
console.log("dlwowns".length);
console.log("이재준".length);
console.log("ㅕ요열ㅇ룰볎룺숣".length);
console.log("李宰準".length);

let phone = "010-1234-5678564545456564";

const exp = /^01[012789]-\d{3,4}-\d{3,4}$/;

console.log(phone.match(exp));
console.log(exp.test(phone));

let html = `<div>
              <h2>hello</h2>
              <ul>
                <li>okay</li>
                <li>
                  <b>bye</b>
                </li>
              </ul>
            </div>`;

let st = `<hello> good </hello> hoho 3273
          haha <bye> 7821 </bye>
          nazzoo noohoo`;
// let exp1 = /[a-o,1-5]+/g;
// let exp1 = /[a-o]+|[1-5]+/g;
// let exp1 = /^<\w+>|[1-5]+>$/g;
// let exp1 = /<\w+> \w+ <\/\w+>/g;
let exp1 = /<\w+> .+ <\/\w+>+ /g;
let result = st.match(exp1);
console.log(result);
}

// ---- Iterator 구현을 쉽게 해주는 생성기 (Generators) ----
{ 
  let exam = {
    kor:10,
    eng:39,
    math:60,
    *[Symbol.iterator](){
      yield this.kor;      
      yield this.eng;
      yield this.math;
    }
  };

  for (let n of exam)
    console.log(n);

  console.log("===================");

  let lotto = {
    
    *[Symbol.iterator](){
      let nums = [2,13,24,21];
      // let index = 0;
      //pose의 의미
      for(let i=0; i<nums.length; i++)
        yield nums[i];
      
    }
  };

  for(let n of lotto)
    console.log(n);

  console.log("=================");
}

// Symbol을 이용한 Iterator 인터페이스 구현하기 (??????)

{
  let lotto = {
    
    [Symbol.iterator](){
      let nums = [2,13,24,21];
      let index = 0;
      return{
          next(){
              return{
                done:index==4?true:false,
                value: nums[index++]
              }
          }
      }
    }
  };

  {
    // let it = lotto.values();
      
    // console.log(it.next().value);
    // console.log(it.next().value);
    // console.log(it.next().value);
    // console.log(it.next().value);
    
    for(let n of lotto)
      console.log(n);
  }


  let ar = [12,13,14,15,16];
  {
    let it = ar.values();
    for(let n of it)
      console.log(n);
  }

}

// --- 심볼을 이용한 인터페이스 정의

{
  let examInterface = {
    total : Symbol(),
    avg : Symbol()
  };

  class Exam{
    constructor(){
      this.kor = 20;
      this.eng = 39;
      this.math = 45;      
    }

    [examInterface.total](){
      return this.kor + this.eng + this.math;
    }

    avg(){
      return this.total() / 3;
    }
  }

  let exam = new Exam();
  // exam.total(); // (X)
  let rs = exam[examInterface.total]();
  console.log(rs);
}



//--------Symbols-------
/* 
  구현해야 할 함수에 대한 약속 == 인터페이스.
  자바스크립트에서는 자료형 정의가 불가능해서 그 약속으로
  심볼을 이용한다.
*/


{
  let s = Symbol();

  let aa = {
    a:20,
    b:30,
    [s](){
      return this.a + this.b;
    }
  }
  console.log(aa[s]());
  let bb = {
    a:20,
    b:30,
    total(){
      console.log("haha");
    }
  }
  bb.total();
  // function iterator(){
  //   console.log("아히유~");
  // }

  // function iterator(){
  //   return [2,3,4];
  // }

  // function print(it){
  //   for(let n of it)
  //     console.log(n);
  // }

  // print(iterator());

}

// --- for of 문 열거 원해여어어어어

{
  let exam = {
      kor:10,
      eng:20,
      math:30,
      values(){
        return{
          next(){
            return{
              done:false,
              value:this.kor
            }
          }
        }
      }
    };

  // for(let n of exam.values()){
  //   console.log(i);
  // }

  let lotto = [3,6,8,29,33,34];

  for(let n of lotto)
    console.log(n);

  console.log("=======================");
}

// ---- Collection 이 없다가 있다.
{
  // 유일한 콜렉션 : Array
  // 일반적인 언어가 지원하는 컬렉션 : Array, set, Map

  // set 계열 : 키가 값과 같다. - 갑의 중복을 허용하지 않는다.
  // List 계열 : Array 는 값의 삽입 위치가 키가 된다. 위치(Index) 기반의 콜렉션
  // Map 게열 : 키를 따로 설정할 수 있다. 값에 키를 설정하기 위한 콜렉션으로 임시 객체를 대신해서 사용한다.
  // 콜렉션이 가져야 할 기능 -> 값들을 열거할 수 있느냐

  //let lotto = [2,4,6,29]

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
    console.log(`k : ${k}, v : ${v}`);
  
  
  // console.log(lotto);

  // console.log(lotto.entries().next());
  // console.log(lotto.keys().next());
  // console.log(lotto.values().next());

}
{
  let ar = [3,4,5,6,7];
  let kvit = ar.entries();
  for(let [k,v] of kvit)
    console.log(`k : ${k}, v : ${v}`);
  
}
{
  let map = new Map();
  map.set("id","1");
  map.set("title","Hello");
  map.set("writerId","50");

  let kvit = map.entries();
  for(let [k,v] of kvit)
    console.log(`k : ${k}, v : ${v}`);
  
  map.forEach((v, k, m)=>{
    console.log(`k : ${k}, v : ${v}, cols: ${m}`);
  });
}

// Spread Operator ----------
{
  function print(x, y, z){
    console.log(`x:${x}, y:${y}`);
  }

  let ar = [2,3,5];

  print(...ar);
}

// template string ------------------------
{
  let kor = 30;
  let eng = 40;
  let msg = String.raw` \<span>
                aaa\n
                </span>\ `;

  let template = `kor:${kor}, eng:${eng}, msg:${msg}`;
  console.log(template);
}

// // -------------Enhanced Object Literals ----------

// let kor = 3;
// let eng = 4;
// let math = 5;

// let obj = {
//   kor:kor,
//   eng:eng,
//   math:math,
//   total:function(){
//     return this.kor + this.eng + this.math;
//   },
//   "to-string":function(){
//     console.log("hello");
//   }
// };
// let colname = "haha";
// let enhObj = {
//   kor,
//   eng,
//   math,
//   total(){
//     return this.kor + this.eng + this.math;
//   },
//   "to-string":function(){
//     console.log("hello");
//   },
//   [colname]:function(){
//     console.log(colname);
//   }
// }

// enhObj.haha();


// class Exam{
//   #kor;
//   #eng;
//   #math;

//   constructor(kor=0, eng=0, math=0){
//     this.#kor = kor;
//     this.#eng = eng;
//     this.#math = math;
//   }

//   get kor(){
//     return this.#kor;
//   }

//   set kor(kor){
//     this.#kor = kor;
//   }

//   total(){
//     return this.#kor + this.#eng + this.#math;
//   }

//   avg(){
//     return this.total() / 3;
//   }
// }

// class NewExam extends Exam{
//   #com;
//   constructor(kor=0, eng=0, math=0, com = 0){
//     super(kor,eng,math);
//     this.#com = com;
//   }  

//   total(){
//     return super.total() + this.#com;
//   }

//   #test(){
//     console.log("gdgdgdgdgd");
//   }
// }

// let exam = new NewExam(1,1,1,1);
// console.log(exam.total());
// exam.#test();

// exam.kor = 30;
// console.log(exam.kor);
// console.log(exam.total());


// // "use strict";

// let f1 = function(){
//   console.log("test")
// };

// let f2 = ()=>{
//   console.log("test 2");
// }

// x=20;
// this.x = 30;


// setTimeout(()=>{
//   console.log(arguments.length);
//   console.log(this.x);
// },3000);

// setTimeout(function(){
//   console.log(arguments.length);
//   console.log(this.x);
// },3000);
  
// class Test{
//   constructor(){
//     this.x=10;

//     setTimeout(()=>{
//       console.log(this.x);
//     },3000);

//     setTimeout(function(){
//       console.log(this.x);
//     },3000);
//   }
// }

// new Test();