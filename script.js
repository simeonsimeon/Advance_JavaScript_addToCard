let idd;
var Empty=[];
let FindId;
var Count=1;
// var Qut;
var Products = [
    {id:1,Name:"Iphone",Price:50000,Ram:"4GB"},
    {id:2,Name:"Samsung",Price:40000,Ram:"4GB"},
    {id:3,Name:"Oppo",Price:35000,Ram:"4GB"},
    {id:4,Name:"Vivo",Price:30000,Ram:"4GB"}
]
 let select=function(){
     idd=parseInt(prompt("Give Value"));
     FindId=Products.find(find=>find.id === idd);
    let  Qut=Count;
    document.getElementById("show").style.display="block"
    // console.log(FindId);
    document.getElementById("show").addEventListener("click",function(){
        if(Empty.some(obj=> obj.id === idd)){
            Empty.find(find => {
               if(find.id === idd){
                find.Qut++
               }
            }); 
         }else{
            if(FindId){
                Empty.push({...FindId,Qut:Count});
               
            }else{
                console.log("Easy");
            }
           
         }
         let p=  document.createElement("p")
         p.innerText=JSON.stringify(Empty);
         document.body.appendChild(p);
    })
 
    }
    console.log(Empty);
document.getElementById("add").addEventListener("click",function(){
    select()
});
let Input=document.getElementById("Easy").value;
console.log(Input);
  function Remo(){
    let INput=parseInt(prompt("GIVE"));
    let FindREmove = Empty.find(find => find.id === INput);
     if(FindREmove){
        if(Empty.some(some => some.id === INput)){
            Empty.find(find => find.Qut--);
            if(find.Qut >= 0){
             let Wow = Empty.findindex(item => item.id === INput);
              Empty.splice(Wow,1)
            }
        }else{
          if(Empty.some(some => some.id === INput)){
            Empty.find(find => find.pop());
          }
        }
     }
  }
let Remove=document.getElementById("remove");
Remove.addEventListener("click",function(){
   Remo()
})

