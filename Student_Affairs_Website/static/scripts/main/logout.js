const logout = document.getElementById("logout");
logout.addEventListener("click",()=>{
    sessionStorage.loggedin = 'false';
    if(window.location.pathname.includes('index.html')){

        location.reload();
    }
    else{

        window.location.pathname = '../index.html'
        // window.location.pathname = '../index.html'
        window.location.href = '../index.html'
    }
})