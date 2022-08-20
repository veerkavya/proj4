const h1=document.getElementById("hh");
const scrolbtn=document.getElementsByClassName("ab")[1];
const scrolbtn1=document.getElementsByClassName("ab")[3];
const bt=document.getElementsByClassName("ab")[0];
const bt1=document.getElementsByClassName("ab")[2];
const pc2=document.getElementsByClassName("pc2")[0];
const pc21=document.getElementsByClassName("pc2")[1];
console.log(bt1,scrolbtn1);
{
let j=0;
scrolbtn.addEventListener("click",function(){
    pc2.scrollBy(100,0);
    console.log(0)
    j+=100;
   
    if(j>0){
        
        bt.classList.add("o1")
        bt.classList.remove("o0");
      
       
    }
     console.log(0)

})




bt.addEventListener("click",function(){
    pc2.scrollBy(-100,0);
    console.log(0)
    j-=100;
   
    if(j===100){
        
        bt.classList.add("o0")
        bt.classList.remove("o1");
        j=0;
    }
     console.log(0)

})

}
{
    let j=0;
scrolbtn1.addEventListener("click",function(){
    pc21.scrollBy(100,0);
    console.log(0)
    j+=100;
   
    if(j>0){
        
        bt1.classList.add("o1")
        bt1.classList.remove("o0");
      
       
    }
     console.log(0)

})




bt1.addEventListener("click",function(){
    pc21.scrollBy(-100,0);
    console.log(0)
    j-=100;
   
    if(j===100){
        
        bt1.classList.add("o0")
        bt1.classList.remove("o1");
        j=0;
    }
     console.log(0)

})

}

const scroll=["skills","passion","knowledge"];
var i=0;
setInterval(()=>{
   if(i==3){
       i=0;
   }
   h1.textContent=scroll[i];
   i+=1
  
        
    },1500)
    
