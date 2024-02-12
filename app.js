const [start,stop,reset]=document.querySelectorAll("button")
const [hr,min,sec]=document.querySelectorAll("span")

function clear()
{
    clearInterval(set)
}
let set;

let h;
let m;
let s;
let isTrue=true

start.addEventListener('click',function(){

   if(isTrue){
    h=0
    m=0
    s=0
   }
   else{
    h=hr.innerText
    m=min.innerText
    s=sec.innerText
   }
    set=setInterval(function(){
        
        if(s<=60) s++
    
        if(s==60&&m>=0)
        {
            s=0
            m++
        }
        if(m==60&&h>=0)
        {
            m=0
            h++
        }
        sec.innerText=String(s).padStart(2,"0")
        min.innerText=String(m).padStart(2,"0")
        hr.innerText=String(h).padStart(2,"0")

    },1000)

})

stop.addEventListener('click',function()
{
    clearInterval(set)
    isTrue=false
    start.innerText="Restart"  
})

reset.addEventListener('click',function(){
    clear()
    hr.innerText="00"
    min.innerText="00"
    sec.innerText="00"
    start.innerText="Start"
})
