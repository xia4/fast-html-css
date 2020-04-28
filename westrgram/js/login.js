const inputId = document.querySelector("#id");
const inputPassword = document.querySelector("#password");
const button = document.querySelector(".btn");

//event
inputId.addEventListener('keyup', function(e){
    let idValue = inputId.value;
    let passwordValue = inputPassword.value;

    if(idValue.length > 0 && passwordValue.length > 0) {
        button.disabled = false;
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#1c7ed6"; //0095F6
    }else {
        button.disabled = true;
        button.style.cursor = "default";
        button.style.backgroundColor = "#bfdffd";
    }
});

inputPassword.addEventListener('keyup', function(e){
    let idValue = inputId.value;
    let passwordValue = inputPassword.value;

    if(idValue.length > 0 && passwordValue.length > 0 ) {
        button.disabled = false;
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#1c7ed6"; //0095F6
    }else {
        button.disabled = true;
        button.style.cursor = "default";
        button.style.backgroundColor = "#bfdffd";
    }
});


