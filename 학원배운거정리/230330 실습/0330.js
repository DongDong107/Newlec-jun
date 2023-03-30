
(async () => {
  console.log("click");
  let data = await load(2);
  console.log("도착한 데이터 : "+data.name);   
})();

      
function load(cid){
    return new Promise(resolve=>{
      setTimeout(() => {
          console.log("데이터가 도착하였습니다.");
          //return {name:"hello"}; ??
          resolve({name:"hello"});
      }, 2000);
    })
      
}