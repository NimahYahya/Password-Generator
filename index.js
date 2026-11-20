const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordContainer1 = document.getElementById("password-container1");
let passwordContainer2 = document.getElementById("password-container2");

function generatePassword() {
    let password1 = "";
    let password2 = "";
    for (let i = 0; i < 15; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length);
        let randomIndex2 = Math.floor(Math.random() * characters.length);
        password1 += characters[randomIndex1];
        password2 += characters[randomIndex2];
    }
    passwordContainer1.textContent = password1;
    passwordContainer2.textContent = password2;
}
async function copyDivText() {
  const text = this.innerText; // Use 'this' to refer to the clicked element

  try {
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

document.getElementById("generate").addEventListener("click", generatePassword);
document.getElementById("password-container1").addEventListener("click", copyDivText);
document.getElementById("password-container2").addEventListener("click", copyDivText);

