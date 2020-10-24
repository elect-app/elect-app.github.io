/* password */
let hashedPassword = -1410716041;

function stringToHash(string) { 
                  
    var hash = 0; 
      
    if (string.length == 0) return hash; 
      
    for (i = 0; i < string.length; i++) { 
        char = string.charCodeAt(i); 
        hash = ((hash << 5) - hash) + char; 
        hash = hash & hash; 
    } 
      
    return hash; 
}

async function loginAnimation() {
    var id = setInterval(animate, 0.5);

    var size = parseInt(document.getElementById('loginWindowInfo').style.fontSize);

    function animate() {
      if (document.getElementById('loginWindowInfo').style.fontSize === '40px') {
        clearInterval(id);
      } else {
        size -= 0.01;
        console.log(size);
        document.getElementById('loginWindowInfo').style.fontSize = size + 'px'; 
      }
    }}

let passwordInput = document.getElementById('user-password');

let passwordProceedBtn = document.getElementById('ask-password-proceed');

let loginWin = document.getElementById('ask-password-page');
let mainWin = document.getElementById('secret-info')

setTimeout(loginAnimation, 2000);


function showMainWindow() {
    //the js of the main window
    alert('You have sucessfully logged in');
}

function proceedLogin() {
    passwordEnteredByUser = passwordInput.value;

    hashedUserPassword = stringToHash(passwordEnteredByUser);

    if (hashedUserPassword === hashedPassword) {
        mainWin.style.display = 'block';
        loginWin.style.display = 'none';
        showMainWindow();
    }
    //the user password is wrong
    else {
        document.getElementById('loginWindowHeading').innerHTML = "ERROR: Please enter the correct password";
        passwordInput.value = "";
        alert(`Wrong password !`);
    }
}

passwordProceedBtn.onclick = proceedLogin;
