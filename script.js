let count=0;

const value=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const style=e.currentTarget;
        if(style.classList.contains('increase')){
            count++;
        }
        else if(style.classList.contains("decrease")){
            count--;
        }
        else{
            count=0;
        }
        value.textContent=count;
        if(count>0){
            value.style.color="green"
        }
        else if(count<0){
            value.style.color="red"
        }
        else{
            value.style.color="black"
        }
    }
    )
})