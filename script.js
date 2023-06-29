let bar=document.getElementById("bar");
let navbar=document.getElementById("navbar");
let cancel=document.getElementById("cancel")
let hero=document.getElementById("hero")

if(bar){
              bar.addEventListener("click",()=>{
                            navbar.classList.add("Active");
              })
}
if(cancel){
              cancel.addEventListener("click",()=>{
                            navbar.classList.remove("Active")
              })
}

document.onclick=function(e){
              if(e.target.id!=='navbar' && e.target.id!=='bar'){
                            navbar.classList.remove("Active")
              }
}

const change=document.getElementById("moon");
const header=document.getElementById("header");
change.addEventListener("click",()=>{
  document.body.classList.toggle("toggle");
  if(document.body.classList.contains("toggle")){
    change.innerHTML=`<i class="fa-solid fa-sun"></i>`
    document.getElementById("hero").style.color="black";
  }
  else{
    change.innerHTML=`<i class="fa-solid fa-moon"></i>`
  }
})