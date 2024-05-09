const body = document.getElementById('body');
const submit = document.getElementById('submit');
const search = document.getElementById('search');
const searchByName = document.getElementById('name');
const searchById = document.getElementById('id');
let row, department;
const menu = document.querySelector('.menu');
const dep = document.querySelectorAll('.dep');
const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'data');
xhttp.send();
let data = '';
console.log(1);
xhttp.addEventListener('load', function () {
    data = JSON.parse(xhttp.responseText);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        id = data[i].id;
        if (data[i].status == true) {
            data[i].status = 'Active';
        } else data[i].status = 'Not Active';
        body.innerHTML += `
            <tr class="row"> 
            <td class="name${i}">${data[i].name}</td>
            <td class="id${i}">${data[i].id}</td>
            <td class="dep${i}">${data[i].Department}</td>
            </tr>`;
    }
    row = document.querySelectorAll('.row');
    selectStudent();
});
searchByName.addEventListener('click', () => {
    search.className = 'name';
    search.placeholder = 'Search For Student By Name';
});
searchById.addEventListener('click', () => {
    search.className = 'id';
    search.placeholder = 'Search For Student By ID';
});

dep.forEach((e) => {
    e.addEventListener('click', () => {
        menu.innerHTML = e.id;
    });
});

search.addEventListener('keyup', () => {
    body.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i].name.toLowerCase().includes(search.value.toLowerCase()) && search.className == 'name') {
            let row = `<tr class="row" > 
            <td class="name${i}">${data[i].name}</td>
            <td class="id${i}">${data[i].id}</td>
            <td class="dep${i}">${data[i].Department}</td>
            </tr>`;
            body.innerHTML += row;
        } else if (String(data[i].id).includes(search.value) && search.className == 'id') {
            let row = `<tr class="row"> 
            <td class="name${i}">${data[i].name}</td>
            <td class="id${i}">${data[i].id}</td>
            <td class="dep${i}">${data[i].Department}</td>
            </tr>`;
            body.innerHTML += row;
        }
    }
    row = document.querySelectorAll('.row');
    selectStudent();
});

submit.addEventListener('click', () => {
    if (menu.innerHTML.toLowerCase() === 'departments') {
        alert('Please Choose Department First');
        return;
    }
    const student = document.querySelector('.active');
    if (student == null) {
        alert('Please Choose Student');
        return;
    }
    const id = student.children[1].innerHTML;
    let valid = true;
    if (student != null && menu.innerHTML.toLowerCase() !== 'departments') {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                if (+data[i].gpa < 3) {
                    valid = false;
                    alert('GPA Is Less Than 3');
                }
            }
            if (data[i].id == id && valid) {
                alert('Department Added Successfully');
                csrftoken = document.cookie.split('csrftoken=').join('');
                const req = new XMLHttpRequest();
                req.open('POST', 'assign-student', true);
                req.setRequestHeader('X-CSRFToken', csrftoken);
                req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                req.send(`id=${id}&department=${menu.innerHTML}`);
                menu.innerHTML = 'Departments';
                student.innerHTML = '';
                data.splice(i, 1);
                // data[i].Department = menu.innerHTML;
                // localStorage.students = JSON.stringify(data);
                // location.reload();
            }
        }
    }
});

// select student
const selectStudent = () => {
    row.forEach((e) => {
        e.addEventListener('click', () => {
            row.forEach((e) => {
                e.classList.remove('activeStd');
            });
            e.classList.add('activeStd');
        });
    });
};
// const instructions = 'a';
