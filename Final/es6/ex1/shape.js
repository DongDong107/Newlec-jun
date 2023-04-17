let canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 400;
canvas.style.border = "solid 1px";
// canvas.style.borderColor = "blue";
canvas.style["border-color"] = "blue";
// canvas.style.borderRadius = "60px";
document.body.append(canvas);

let ctx = canvas.getContext("2d");

// let boxes = [
//   new Box(10,10,50,50,"yellow"),
//   new Box(10,10,50,50,"yellowgreen"),
//   new Box(10,10,50,50,"blue"),
//   new Box(10,10,50,50,"red"),
// ]

let gap = 20;
let sideLen = 50;
let colorArr = ["yellow", "green", "blue", "red"];
let boxes = [];
for(let i=0; i<4; i++){
  boxes.push(new Box(i*(sideLen + gap),0,50,50,colorArr[i]));
}

for(let box of boxes){
  box.draw(ctx);
}

console.log(boxes[0].kor);
console.log(Object.hasOwn(boxes[0], 'draw'));
console.log(typeof Box);

// function 이름으로 prototype 얻기
// let proto = Box.prototype;

// function object로 prototype 얻기
let proto = Object.getPrototypeOf(boxes[0]);

console.log(Object.hasOwn(proto, 'draw'));

let obj = {x:1, y:2};

Object.preventExtensions(obj);

Object.defineProperty(obj,'z', {
  value: 5,
  writable: false
})
obj.y = 5;
obj.z = 10;



// for(let box of boxes){
//   // let x = box.x;
//   // let y = box.y;
//   // let width = box.width;
//   // let height = box.height;
//   // let color = box.color;

//   let {x, y, width:w, height:h, color} = box;

//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, w, h, color) ;
// }

let kors = [30, 20, 30, 40];
let [kor1, kor2, kor3] = kors;
// console.log(kor1);

[kor1, kor2] = [kor2, kor1];

let both = [
    new Box(),
    new Box(30,40,50,50,"red")
];

{
  let [{color,width},b2] = both;

  // console.log(color);
}

// for(let i of boxes){
//   ctx.fillStyle = i;
//   ctx.fillRect(x,y,sideLen,sideLen);

//   x += sideLen + gap ;
// }


// ctx.fillStyle = "red";
// ctx.fillRect(10,10,50,50);
// ctx.fillStyle = "yellow";
// ctx.fillRect(70,10,50,50);

// let x = 10;
// let y = 10;
// let gap = 20;
// let sideLen = 50;

// let colorArr = ["yellow", "green", "blue", "red"];
// for(let i of colorArr){
//   ctx.fillStyle = i;
//   ctx.fillRect(x,y,sideLen,sideLen);

//   x += sideLen + gap ;
// }