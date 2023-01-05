let year = 2023;
let month = 01;
let day = 4;

let regdate = year + "-" + month + "-" + day;
console.log(regdate);

let template = `${year}-${month}-${day}`;
console.log(template);

let className = 'p=elect';
let title = '스마트 폰';

let product = String.raw`<section class=${className}">\n\n\n
                <h1>${title}</h1>
                </section>`;

console.log(product);

let attName = "kor";

let exam = {
    [attName]: 10,
    eng: 20,
    math: 30,
    student:{
        name: 'newlec',
        phone: '010-2222-3333'
    }

};

console.log(`kor:${exam.kor}`);

let {kor,eng:english, ma=0, student:{name, phone}} = exam;

console.log(english);
console.log(phone);

/* 20230105 */

let std1 = {name:'dragon', phone:'010'};
({name, phone} = std1); 
console.log(phone);

//Array Destructuring
let kors = [1,2,3];
let [kor1, kor2, kor3] = kors;
console.log(kor1);

let kors2 = [4,5,6];
[kor1, kor2, kor3] = kors2; // 같은 변수에 다른 값 넣고싶을때
console.log(kor1);

let a,b;
[a,b] = kors2;
console.log(a);

a = 20;
b = 30;
[a,b] = [b,a];
console.log(a);

[,,kor3] = kors2;
console.log(kor3);

let nums = [1,2,3,4,5,6,7,8,9,10];
let [n1,n2,...rest] = nums; //나머지연산자
console.log(rest);

let set = new Set([2,2,3,4,4,5,234,234,3,24,24,2,424,34,334,2,3]);
// set.add(5);
// set.add("5");
// set.add(3);
// set.add(5);

console.log(`size : ${set.size}`);

set.forEach((v,key)=>{
    console.log(`${v} : ${key}`);
})
// forEach => for of
for(let n of set)
    console.log(n);

for(let k in set)
    console.log(k);

let map = new Map();
map.set("id",1);
map.set("name","이재준");

console.log("foreach-------");
map.forEach((value,key)=>{
    console.log(`${value} : ${key}`);
})
console.log("/foreach-------");

for(let i of map)
    console.log(i);

let notice = new Map();
notice.set("id", 1);
notice.set("title","map is ,,,");
notice.set("writer","newlec");

console.log(notice.get("title"));

notice.forEach((v,k)=>{
    console.log(`key:${k} value:${v}`);
})

// key만
for(let key of notice.keys())
    console.log(key);
// value만
for(let value of notice.values())
    console.log(value);
// key,value 둘다
for(let [,v] of notice.entries())
    console.log(`key :  , value : ${v}`);

let exam3 = {
    kor:10,
    eng:20,
    math:30
};

for(let [k,v] of Object.entries(exam3)){
    console.log(`key : ${k}, value : ${v}`);
}
    

let obj = Object.create(null);

let list = [
    {id:1, title:"jsp", writerId:"01"},
    {id:2, title:"jS", writerId:"02"},
    {id:3, title:"java", writerId:"03"},
    {id:4, title:"python", writerId:"04"}
]

let ar2 = list.forEach((n)=>{return `<span>${n.title}</span>`});//void
console.log(ar2);
let ar = list.map((n)=>{return `<span>${n.title}</span>`});//[]
console.log(ar);