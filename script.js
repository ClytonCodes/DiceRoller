const btn = document.getElementById("roll");
const sum_label = document.getElementById("sum");
const images = document.getElementById("images");

btn.onclick = function(){
    const in_value = document.getElementById("input").value;
    let randNum;
    let sum=0;
    let imgs = [];

    if(in_value==""){
        sum_label.textContent = `Enter the number of dices`;
    }
    else{
        for(let i=0; i<in_value; i++){
            randNum = Math.floor(Math.random()*6) + 1;
            sum += randNum;
            imgs.push(`<img src="images/${randNum}.svg">`);
        }
        images.innerHTML = imgs.join("");
        sum_label.textContent = sum;
    }
}