let number = document.getElementById("number");
let counter = 0;

setInterval(() => {
    if(counter == 75){
        clearInterval();
    } else{
        counter += 1;
        number.innerHTML = counter + "%";
    }
    
}, 25)