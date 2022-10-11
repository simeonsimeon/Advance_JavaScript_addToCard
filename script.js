let add=document.getElementById("add");
var GiveValue;
var Empty=[];
var Count=1;
var Qt;
var Data = [{Id:1,Brand:"Iphone",Prices:50000},{Id:2,Brand:"Samsung",Prices:40000},{Id:3,Brand:"Vivo",Prices:30000},{Id:4,Brand:"Oppo",Prices:25000}]
function aDDToCard(){
  GiveValue = parseInt(prompt("Give the Id Value Of Items"));
  var FindId = Data.find(find => find.Id === GiveValue);
  var EmptyFind = Empty.some(some => some.Id === GiveValue);
  if(EmptyFind){
        Empty.find(find  =>{ 
          if(find.Id === GiveValue){
            find.Qt++
          }
         } );
      
  }else{
    if(FindId){
        Empty.push({...FindId,Qt:Count})
    }else{
      console.log("Please Give Valid Id");
    }
  }
  console.log(Empty);
}
add.addEventListener("click",aDDToCard);


let incr = document.getElementById("increase");

function increase(){
  GiveValue = parseInt(prompt("Give the Id Value Of Items"));
  FindId = Data.find(find => find.Id === GiveValue);
  if(FindId){
    Empty.find(find  =>{ 
      if(find.Id === GiveValue){
        find.Qt++
      }
     } );
  }
  console.log(Empty);
}
incr.addEventListener("click",increase);
let decr = document.getElementById("decrease");

function decrease(){
  GiveValue = parseInt(prompt("Give the Id Value Of Items"));
  FindId = Empty.find(find => find.Id === GiveValue);
  ind = Empty.findIndex(ind => ind === GiveValue)
  console.log(ind);
  if(FindId){
    Empty.find(find  =>{ 
      if(find.Id === GiveValue){
        find.Qt--
        
        if(find.Qt === 0){
         Empty.splice(ind,1);
        
        }
      }
     } );
}
console.log(Empty);
}
decr.addEventListener("click",decrease);
let Delete = document.getElementById("delete");
function Del(){
  GiveValue = parseInt(prompt("Give the Id Value Of Items"));
  FindId = Empty.find(find => find.Id === GiveValue);
  
  if(FindId){
    ind = Empty.findIndex(ind => ind.Id === GiveValue);
    console.log(ind);
    Empty.splice(ind,1)
   
}
console.log(Empty);
}
Delete.addEventListener("click",Del)

 























































































































//  
