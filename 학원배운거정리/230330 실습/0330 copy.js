console.log("click");
let data = load(2,function(data){
    console.log("도착한 데이터 : "+data.name);   
});

      
function load(cid,callback){
    
    setTimeout(() => {
        console.log("데이터가 도착하였습니다.");
        callback({name:"hello"});
    }, 2000);
      
}