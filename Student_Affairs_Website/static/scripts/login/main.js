const form = document.querySelector('.login');
const child = document.createElement('p');
const btn = document.getElementById('btn');
const username = document.getElementById('username');
const password = document.getElementById('password');
child.className = 'wrong';
let status;
//
//
//

//
//
//
btn.addEventListener('click', () => {
    username.style.backgroundColor = '#edf2f5';
    password.style.backgroundColor = '#edf2f5';
    const csrftoken = document.getElementsByName('csrfmiddlewaretoken')[0].value;
    // const csrftoken = document.cookie.split('csrftoken=').join('');
    console.log(csrftoken);
    const req = new XMLHttpRequest();
    req.open('POST', 'go', false);
    req.setRequestHeader('X-CSRFToken', csrftoken);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(`username=${username.value}&password=${password.value}`);
    const response = req.responseText;
    if (response == 'username') {
        username.style.backgroundColor = '#f3aeaec7';
        child.innerHTML = "The Username that you've entered is incorrect";
    } else if (response == 'password') {
        password.style.backgroundColor = '#f3aeaec7';
        child.innerHTML = "The password that you've entered is incorrect";
    } else if (response == '200') {
        window.location = '../home';
    }
    // second
    // second
    // second
    // second
    // const xhttp = new XMLHttpRequest()
    // xhttp.open('GET', 'go');
    //   xhttp.send();
    //   xhttp.onload = () => {
    //     status = xhttp.responseText
    //     console.log(status)
    //   }
});
form.appendChild(child);
