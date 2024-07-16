let bulb = document.querySelector("#bulb");
let btn = document.querySelector("button");

let flag = 0;

btn.addEventListener("click",function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow";
        btn.textContent = "OFF";
        flag = 1;
    }else{
        bulb.style.backgroundColor = "white";
        btn.textContent = "ON";
        flag = 0;
    }
})
