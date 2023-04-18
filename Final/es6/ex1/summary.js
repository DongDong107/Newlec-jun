//--------Symbols-------
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