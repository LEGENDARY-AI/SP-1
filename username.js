// how to accepts user inputs
// using Html text
// let username
// let password
// document.getElementById("Mybutton1").onclick=function(){
//    username=document.getElementById("Myinput").value
//    password=document.getElementById("Myinput1").value
//    console.log(username)
//    console.log(password)
//    document.getElementById("Mypage").textContent=`Hello ${username}`
//}

let username;
let password;

document.getElementById("Mybutton1").onclick = function () {
    username = document.getElementById("Myinput").value.trim();
    password = document.getElementById("Myinput1").value.trim();
    
    
    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    console.log("Username:", username);
    console.log("Password:", password);

    // Greet the user
    document.getElementById("Mypage").textContent = `Hello, ${username}!`;

    // Add a fade-out effect to the form
    const form = document.querySelector(".user1");
    form.style.transition = "opacity 0.5s";
    form.style.opacity = 0;

    setTimeout(() => {
        form.style.display = "none"; // Hide the form completely
    }, 500);

    // Show a welcome message after login
    const welcomeMessage = document.createElement("div");
    welcomeMessage.style.marginTop = "20px";
    welcomeMessage.style.fontSize = "18px";
    welcomeMessage.style.color = "#4a90e2";
    welcomeMessage.textContent = "Welcome to your dashboard!";
    document.body.appendChild(welcomeMessage);
};
document.getElementById("togglePassword").onclick = function () {
    const passwordInput = document.getElementById("Myinput1");
    if (this.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
};

