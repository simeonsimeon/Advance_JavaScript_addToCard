let idd;
var Empty=[];
let FindId;
var Count=1;
var Qut;
Qut=Count;
var Products = [
    {id:1,Name:"Iphone",Price:50000,Ram:"4GB"},
    {id:2,Name:"Samsung",Price:40000,Ram:"4GB"},
    {id:3,Name:"Oppo",Price:35000,Ram:"4GB"},
    {id:4,Name:"Vivo",Price:30000,Ram:"4GB"}
]
let select=function(){
idd =0;
  idd+=parseInt(prompt("Give Value"));
  // console.log(idd);
//  document.getElementById("show").style.display="block"
    Callback(idd);
 }
 function Callback(idd){
    Qut=Count;
  FindId=Products.find(find=>find.id === idd);

  if(Empty.find(obj=> obj.id === idd)){
    Empty.find(find => {
       if(find.id === idd){
        find.Qut++
        console.log("flag");
       }
    }); 
  }else{
    if(FindId){
        Empty.push({...FindId,Qut:Count});
        // console.log("hello");
       
    }else{
        console.log("Easy");
    }
  
   
  }
 
  console.log(Empty);
 }
 document.getElementById("add").addEventListener("click",function(){
  select()
});
let Input=document.getElementById("Easy").value;
// console.log(Input);
function Remo(){
  let INput=parseInt(prompt("GIVE"));
  let FindREmove = Empty.find(find => find.id === INput);
   if(FindREmove){
      if(Empty.some(some => some.id === INput)){
          Empty.find(find => {find.Qut--

            if(find.Qut <= 0){
              let Wow = Empty.findIndex(item => item.id === INput);
              console.log(Wow);
               Empty.splice(Wow,1)
             }
          
          });
      }
   }
   console.log(Empty);
}
let Remove=document.getElementById("remove");
Remove.addEventListener("click",function(){
 Remo()
})

document.getElementById("show").addEventListener("click",function(){
  let Ii=parseInt(prompt("GIVE"));
  let FindREmov = Empty.find(find => find.id === Ii);
  console.log(FindREmov); 
   if(FindREmov){
      if(Empty.some(some => some.id === Ii)){
        Empty.find((find) => {find.Qut++})
      }
      console.log(Empty)
    }
    }
          
)
document.getElementById("del").addEventListener("click",function(){
  let del=parseInt(prompt("del"));
  let FindREmove = Empty.find(find => find.id === del);
  if(FindREmove){
    let dele= Empty.findIndex(find => find.id === del);
    Empty.splice(dele,1);
    console.log(Empty)
  }
})



 























































































































//  
