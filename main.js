

let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
let result = document.getElementById("result")

function checkPassword(){
    result.innerText = pass1.value == pass2.value ? "Perfect" : "Nope Doesnt Match"
}

pass2.addEventListener("keyup", () =>{
    if(pass1.value.length != 0) checkPassword();
})

pass1.addEventListener("keyup", checkPassword())
