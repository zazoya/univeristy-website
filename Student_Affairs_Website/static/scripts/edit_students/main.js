const xhttp = new XMLHttpRequest();
xhttp.open('get', 'data', true);
xhttp.send();
let data = [];
let updateButton;
xhttp.addEventListener('load', () => {
    data = JSON.parse(xhttp.responseText);
    console.log(1);
    for (let i = 0; i < data.length; i++) {
        body.innerHTML += `<tr class="data${i}"> 
        <td class="id${i}">${data[i].id}</td>
        <td class="name${i}">${data[i].name}</td>
        <td class="gpa${i}">${data[i].gpa}</td>
        <td class="gender${i}">${data[i].gender}</td>
        <td class="level${i}">${data[i].level}</td>
        <td class="status${i} status" id="${i}">Active</td>
        <td class="dep${i}">${data[i].Department}</td>
        <td class="email${i}">${data[i].email}</td>
        <td class="birth${i}">${data[i].date_of_birth}</td>
        <td class="number${i}">${data[i].mobile_number}</td>
        <td class="edit${i}"><i class="fa-solid fa-pen update" id="${i}"></i></td>
        <td ><i class="fa-solid fa-trash delete" id="${i}"></i></td>
        </tr>`;
    }
    deleteButton = document.querySelectorAll('.delete');
    updateButton = document.querySelectorAll('.update');
    // // select delete button
    deleteButton.forEach((del) => {
        del.addEventListener('click', () => {
            if (confirm('Are You Sure To Delete this Student!')) {
                Delete(del.id);
            }
        });
    });
    updateButton.forEach((up) => {
        up.addEventListener('click', update);
    });
});
const body = document.getElementById('body');
const search = document.getElementById('search');
const text = document.getElementById('text');
const annEditStatus = document.getElementById('annStatus');
// let color = getComputedStyle(document.documentElement).getPropertyValue('--pop');
// let icon = document.querySelector('.icon');
const btn = document.querySelector('.okay');
btn.addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('active');
});
let deleteButton, submit;

search.addEventListener('keyup', () => {
    // for (let i = 0; i < data.length; i++) {
    body.innerHTML = '';
    // }
    for (let i = 0; i < data.length; i++) {
        if (data[i].name.toLowerCase().includes(search.value.toLowerCase())) {
            body.innerHTML += `<tr class="data${i}">
            <td class="id${i}">${data[i].id}</td>
            <td class="name${i}">${data[i].name}</td>
            <td class="gpa${i}">${data[i].gpa}</td>
            <td class="gender${i}">${data[i].gender}</td>
            <td class="level${i}">${data[i].level}</td>
            <td class="status${i} status" id="${i}">Active</td>
            <td class="dep${i}">${data[i].Department}</td>
            <td class="email${i}">${data[i].email}</td>
            <td class="birth${i}">${data[i].date_of_birth}</td>
            <td class="number${i}">${data[i].mobile_number}</td>
            <td class="edit${i}"><i class="fa-solid fa-pen update" id="${i}"></i></td>
            <td ><i class="fa-solid fa-trash delete" id="${i}"></i></td>
            </tr>`;
        }
    }
    deleteButton = document.querySelectorAll('.delete');
    deleteButton.forEach((del) => {
        del.addEventListener('click', () => {
            if (confirm('Are You Sure To Delete this Student!')) {
                // console.log(del.id);
                Delete(del.id);
            }
        });
    });
});

// const student = data[1].id;
// csrfToken = document.cookie.split('csrftoken=').join('');
// const req = new XMLHttpRequest();
// req.open('POST', 'delete-student', true);
// req.setRequestHeader('X-CSRFToken', csrfToken);
// req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// req.send(`id=${student}`);
const update = function () {
    const id = this.id;
    console.log(id);
    document.querySelector(`.data${id}`).childNodes.forEach((e) => {
        if (e.nodeName == 'TD') e.classList.add('editing');
    });
    // document.querySelector(`.id${id}`).innerHTML = `<input type="text" placeholder="" id="id" value=${data[id].id}></input>`;
    document.querySelector(`.name${id}`).innerHTML = `<input data-id='${id}' type="text" placeholder="" id="name" value="${data[id].name}"></input>`;
    document.querySelector(`.gpa${id}`).innerHTML = `<input  type="text" placeholder="" id="gpa" value=${data[id].gpa}></input>`;
    document.querySelector(`.gender${id}`).innerHTML = `<input  type="text" placeholder="" id="gender" value=${data[id].gender}></input>`;
    document.querySelector(`.level${id}`).innerHTML = `<input  type="text" placeholder="" id="level" value=${data[id].level}></input>`;
    document.querySelector(`.status${id}`).innerHTML = `<input  type="text" placeholder="" id="status" value=Active></input>`;
    document.querySelector(`.email${id}`).innerHTML = `<input  type="text" placeholder="" id="email" value=${data[id].email}></input>`;
    // document.querySelector(`.birth${id}`).innerHTML = `<input  type="text" placeholder="" id="date_of_birth" value=${data[id].date_of_birth}></input>`;
    document.querySelector(`.number${id}`).innerHTML = `<input  type="text" placeholder="" id="mobile_number" value=${data[id].mobile_number}></input>`;
    document.querySelector(`.edit${id}`).innerHTML = `<i id="submit" class="fa-solid fa-check"></i>`;
    console.log(0);
    submit = document.getElementById('submit');
    submit.addEventListener('click', validate);
    updateButton.forEach((btn) => {
        btn.removeEventListener('click', update);
    });
};
const validate = () => {
    console.log('validate');
    const inputs = document.getElementsByTagName('input');
    // const id = document.getElementById('id');
    const name = document.getElementById('name');
    const gpa = document.getElementById('gpa');
    const gender = document.getElementById('gender');
    const level = document.getElementById('level');
    const Status = document.getElementById('status');
    // const dep = document.getElementById('dep');
    const email = document.getElementById('email');
    // const birth = document.getElementById('date_of_birth');
    const number = document.getElementById('mobile_number');
    const check = true;
    // console.log(gpa);
    for (let i = 1; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            inputs[i].style.color = '#000000';
            inputs[i].placeholder = 'Required*';
            inputs[i].style.backgroundColor = '#f3aeaec7';
            check = false;
        }
    }
    // if (id.value.length != 8 && id.value != '') {
    //     id.placeholder = 'ID';
    //     id.style.backgroundColor = '#f3aeaec7';
    //     alert('ID Must Equal 8 Numbers');
    //     check = false;
    //     // id.value = '';
    // }
    if ((+gpa.value < 0 || +gpa.value > 4) && gpa.value != '') {
        gpa.placeholder = 'GPA';
        gpa.style.backgroundColor = '#f3aeaec7';
        alert('GPA Must Be Between 0 and 4');
        check = false;
        // gpa.value = '';
    }
    if (check) {
        index = +name.dataset['id'];
        console.log(index);
        const obj = {
            id: data[index].id,
            name: name.value,
            gpa: gpa.value,
            gender: gender.value,
            level: level.value,
            status: Status.value.toLowerCase() == 'active' ? 'True' : 'False',
            Department: data[index].Department,
            email: email.value,
            date_of_birth: data[index].date_of_birth,
            mobile_number: number.value,
        };
        data[index] = obj;
        updateDB(obj);
        // changeView();
    }
};
const updateDB = (data) => {
    annEditStatus.innerHTML = 'Success';
    document.documentElement.style.setProperty('--pop', '#2196f3');
    icon.innerHTML = '<i class="fa fa-check"></i>';
    // const id = +del;
    // const student = data[id].id;
    csrftoken = document.cookie.split('csrftoken=').join('');
    const req = new XMLHttpRequest();
    req.open('POST', 'update', true);
    req.setRequestHeader('X-CSRFToken', csrftoken);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // req.send('name=hamed');
    req.send(
        `id=${data.id}&name=${data.name}&gpa=${data.gpa}&gender=${data.gender}&level=${data.level}&status=${data.status}&Department=${data.Department}&email=${data.email}&date_of_birth=${data.date_of_birth}&mobile_number=${data.mobile_number}`
    );
    req.onload = () => {
        if (req.responseText == '200') {
            changeView();
            text.innerHTML = '<p>Student Data Updated Successfully</p>';
            document.querySelector('.popup').classList.add('active');
        } else {
            annEditStatus.innerHTML = 'Failed';
            text.innerHTML = "<p>Error Can't update Student Data,</p><p>Please Try Again!!!</p>";
            icon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            document.documentElement.style.setProperty('--pop', '#ff3821');
            // color = '#ff3821';
            document.querySelector('.popup').classList.add('active');
            // alert('Error Please Try Again!!!');
        }
    };

    // console.log(id);
    // console.log(student);
    // document.querySelector(`.data${id}`).innerHTML = '';
};
const Delete = (del) => {
    // color = ' #2196f3';
    document.documentElement.style.setProperty('--pop', '#2196f3');
    icon.innerHTML = '<i class="fa fa-check"></i>';
    const id = +del;
    const student = data[id].id;
    const csrftoken = document.cookie.split('csrftoken=').join('');
    console.log(csrftoken);
    const req = new XMLHttpRequest();
    req.open('POST', 'delete-student', true);
    req.setRequestHeader('X-CSRFToken', csrftoken);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(`id=${student}`);
    req.addEventListener('load', () => {
        if (req.responseText.toLowerCase() == 'deleted') {
            text.innerHTML = '<p>Student Deleted Successfully</p>';
            document.querySelector('.popup').classList.add('active');
            console.log(id);
            console.log(student);
            document.querySelector(`.data${id}`).innerHTML = '';
            data.splice(id, 1);
        } else {
            text.innerHTML = "<p>Error Can't Delete Student</p><p>Please Try Again!!!</p>";
            icon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            document.documentElement.style.setProperty('--pop', '#ff3821');
            document.querySelector('.popup').classList.add('active');
            // alert('Error Please Try Again!!!');
        }
    });
};
const changeView = () => {
    const i = +document.getElementById('name').dataset['id'];
    document.querySelector(`.name${i}`).innerHTML = `<td class="name${i}">${data[i].name}</td>`;
    document.querySelector(`.gpa${i}`).innerHTML = `<td class="gpa${i}">${data[i].gpa}</td>`;
    document.querySelector(`.gender${i}`).innerHTML = `<td class="gender${i}">${data[i].gender}</td>`;
    document.querySelector(`.level${i}`).innerHTML = `<td class="level${i}">${data[i].level}</td>`;
    document.querySelector(`.status${i}`).innerHTML = `<td class="status${i} status" id="${i}">Active</td>`;
    document.querySelector(`.email${i}`).innerHTML = `<td class="email${i}">${data[i].email}</td>`;
    document.querySelector(`.number${i}`).innerHTML = ` <td class="number${i}">${data[i].mobile_number}</td>`;
    document.querySelector(`.edit${i}`).innerHTML = `<td class="edit${i}"><i class="fa-solid fa-pen update" id="${i}"></i></td>`;
    updateButton = document.querySelectorAll('.update');
    updateButton.forEach((up) => {
        up.addEventListener('click', update);
    });
    document.querySelector(`.data${i}`).childNodes.forEach((e) => {
        if (e.nodeName == 'TD') e.classList.remove('editing');
    });
};
