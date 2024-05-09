const body = document.querySelector('.body');
const activeBtn = document.querySelector('.active');
const notActiveBtn = document.querySelector('.notActive');
const viewAllBtn = document.querySelector('.showAll');
let data = '';
let pre = '';
// setInterval(() => {
const xhttp = new XMLHttpRequest();
body.innerHTML = '';
xhttp.open('GET', 'data');
xhttp.send();
xhttp.addEventListener('load', function () {
    data = JSON.parse(xhttp.responseText);
    for (let i = 0; i < data.length; i++) {
        id = data[i].id;
        if (data[i].status == true) {
            data[i].status = 'Active';
        } else data[i].status = 'Not Active';
        body.innerHTML += `
                <tr class="data${i}"> 
                <td class="id${i}">${data[i].id}</td>
                <td class="name${i}">${data[i].name}</td>
                <td class="gpa${i}">${data[i].gpa}</td>
                <td class="gender${i}">${data[i].gender}</td>
                <td class="level${i}">${data[i].level}</td>
                <td class="status${i} status" id="${i}">${data[i].status}</td>
                <td class="dep${i}">${data[i].Department}</td>
                <td class="email${i}">${data[i].email}</td>
                <td class="birth${i}">${data[i].date_of_birth}</td>
                <td class="number${i}">${data[i].mobile_number}</td>
                </tr>`;
    }
});
// }, 10000);

let c = 0;
const btn = function () {
    let inner = [];
    data.forEach((el) => {
        if (
            el.status.toLocaleLowerCase() == 'active' &&
            this.className == 'active'
        ) {
            console.log(data[c].id);
            const temp = `
            <tr class="data${c}">
            <td class="id${c}">${data[c].id}</td>
            <td class="name${c}">${data[c].name}</td>
            <td class="gpa${c}">${data[c].gpa}</td>
            <td class="gender${c}">${data[c].gender}</td>
            <td class="level${c}">${data[c].level}</td>
            <td class="status${c} status" id="${c}">${data[c].status}</td>
            <td class="dep${c}">${data[c].Department}</td>
            <td class="email${c}">${data[c].email}</td>
            <td class="birth${c}">${data[c].date_of_birth}</td>
            <td class="number${c}">${data[c].mobile_number}</td>
            </tr>
            `;
            inner.push(temp);
        } else if (
            el.status.toLocaleLowerCase() == 'not active' &&
            this.className == 'notActive'
        ) {
            const temp = `
            <tr class="data${c}">
            <td class="id${c}">${data[c].id}</td>
            <td class="name${c}">${data[c].name}</td>
            <td class="gpa${c}">${data[c].gpa}</td>
            <td class="gender${c}">${data[c].gender}</td>
            <td class="level${c}">${data[c].level}</td>
            <td class="status${c} status" id="${c}">${data[c].status}</td>
            <td class="dep${c}">${data[c].Department}</td>
            <td class="email${c}">${data[c].email}</td>
            <td class="birth${c}">${data[c].date_of_birth}</td>
            <td class="number${c}">${data[c].mobile_number}</td>
            </tr>
            `;
            inner.push(temp);
        }
        c++;
    });
    body.innerHTML = inner.join('');
    c = 0;
};
viewAllBtn.addEventListener('click', () => {
    body.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        const temp = `
        <tr class="data${i}">
        <td class="id${i}">${data[i].id}</td>
        <td class="name${i}">${data[i].name}</td>
        <td class="gpa${i}">${data[i].gpa}</td>
        <td class="gender${i}">${data[i].gender}</td>
        <td class="level${i}">${data[i].level}</td>
        <td class="status${i} status" id="${i}">${data[i].status}</td>
        <td class="dep${i}">${data[i].Department}</td>
        <td class="email${i}">${data[i].email}</td>
        <td class="birth${i}">${data[i].date_of_birth}</td>
        <td class="number${i}">${data[i].mobile_number}</td>
        </tr>
        `;
        body.innerHTML += temp;
    }
});
activeBtn.addEventListener('click', btn);
notActiveBtn.addEventListener('click', btn);
