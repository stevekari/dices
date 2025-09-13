const btn = document.querySelector("button");
const sms = document.getElementById("inn");
const txt = document.createElement("p");
const reset = document.getElementById("reset")
sms.appendChild(txt)

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    DiceRoll()
    
   reset
});
function DiceRoll(){
   const rand = Math.floor(Math.random() * 6 +1);
   if(rand === 4){
    txt.innerText = ("Congrat!!!!!")
    
   }
    txt.classList.add("txt")
    txt.innerText = rand;

   
}


reset.addEventListener("click", ()=>{
    txt.innerText =""
})