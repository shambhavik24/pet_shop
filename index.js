const lengthslider = document.querySelector(".pass-length input"),
options = document.querySelectorAll(".option input"),
copyIcon = document.querySelector(".input-box span")
passwordInput = document.querySelector(".input-box input"),
passIndicator = document.querySelector(".pass-indicator"),
generateBtn = document.querySelector(".generate-btn");

const characters = {

    lowercase: "jhwiwqhdbkwdmsfduh",
    uppercase:"KSWUNSIDMIHIWDKCKJSD",
    numbers:"0123456789",
    symbols:"!@#$%^&*[](){}:;<>?",

}

const generatePassword = () => {
    let staticPassword = "";
    randomPassword ="",
    excludeDuplicate =false,
    passLength = lengthslider.value;

    options.forEach(option => {  
        if(option.checked){

            if(option.id !=="exc-duplicate" && option.id !== "spaces"){
                staticPassword += characters[option.id];
            }
            else if(option.id === "spaces"){
                staticPassword += `  ${staticPassword}`;
            }
            else{
                excludeDuplicate=true;
            }
            // staticPassword += characters[option.id];
            // console.log(option);
        }
    });
    for (let i = 0; i< passLength; i++) {
           let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
           if(excludeDuplicate){
            !randomPassword.includes(randomChar) || randomChar == " "? randomPassword += randomChar : i--;
           }
           else{
            randomPassword += randomChar;
           }
        
    }
    // console.log(randomPassword);
    passwordInput.value = randomPassword;
}
const updatePassIndicator = () =>{
    passIndicator.id = lengthslider.value <= 8 ? "weak" : lengthslider.value <=16 ? "medium" : "strong";
}

const updateSilder = () => {
    document.querySelector(".pass-length span").innerText = lengthslider.value;
    generatePassword();
}
updateSilder();

const copyPassword = () =>{
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.innerText = "check";
}

copyIcon.addEventListener("click", copyPassword);
lengthslider.addEventListener("input", updateSilder);
generateBtn.addEventListener("click", generatePassword);