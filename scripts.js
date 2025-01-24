function login(username, passwordHash) {
    var XHR = new XMLHttpRequest();
    XHR.open("POST", "phpScripts/loginScript.php", true);
    XHR.onreadystatechange = () => {
        if (XHR.readyState === 4 && XHR.status === 200) {
            var response = JSON.parse(XHR.responseText);
            if (response.success) {
                console.log("Login successful!");
            } else {
                console.error("Login failed:", response.error);
            }
        }                                                   
    }
}

function logout(username, passwordHash) {

}

function register(formData) {

}

function fetchPageData(username, passwordHash, ) {
}