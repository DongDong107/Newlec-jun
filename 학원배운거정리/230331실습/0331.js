// strict mode

var x=33;
console.log(window.x);

var f1 = function(){
  console.log(this);
}

f1();

var obj = {x, f1};

obj.f1();

f1.call(obj);

function add(x, y){
  return x+y;
}


function createApp({data, mehtods}){
    let d = data();

    mehtods.f1.call(Object.assign(d,mehtods));
    // console.log(data.test);
};

createApp({
  data(){
    return {
      test:"hello"
    };
  },
  mehtods:{
    f1(){
      console.log(this.test);
    },
    f2(){
      console.log("hehe");
    }
  }
});
