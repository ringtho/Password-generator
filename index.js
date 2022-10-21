const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let password1 = document.getElementById("password-1")
let password2 = document.querySelector("#password-2")

function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * characters.length)
    return randomNumber
}

function getRandomPassword(){
    let randomPassword = "" 
    for (let i = 0; i < 15; i++){
        randomPassword += characters[getRandomNumber()]
    }
    return randomPassword
}

function generatePassword(){
    password1.textContent = getRandomPassword()
    password2.textContent = getRandomPassword()
}

// function copyClipboard(){
//     password1.select()
//     // password1.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(password1.value)
//     alert("Copied the text: "+ password1.value)
// }

console.log(password1.innerText)