const adds = document.getElementById('add');
const closeBtn = document.querySelector('.close-btn');
const pop = document.querySelector('.popupAdd');
const submitAnn = document.getElementById('submit-ann');
const annHeading = document.getElementById('ann-heading');
const annStatus = document.getElementById('annStatus');
// const textAnn = document.getElementById('text');

let textAreaContent = document.getElementById('text-area-content');
const i = document.getElementById('important');
let importantValue = 'False';
i.addEventListener('click', () => {
    if (importantValue == '' || importantValue == undefined || importantValue == 'False') {
        importantValue = 'True';
    } else importantValue = 'False';
});
adds.addEventListener('click', () => {
    pop.classList.add('add');
});
closeBtn.addEventListener('click', () => {
    pop.classList.remove('add');
});
submitAnn.addEventListener('click', () => {
    // console.log(1);
    annStatus.innerHTML = 'Success';
    document.documentElement.style.setProperty('--pop', '#2196f3');
    icon.innerHTML = '<i class="fa fa-check"></i>';
    // if (!textAreaContent.innerHTML.includes('Announcement content')) {
    const req = new XMLHttpRequest();
    const csrftoken = document.cookie.split('csrftoken=').join('');
    req.open('POST', '../new/add-announcement', true);
    req.setRequestHeader('X-CSRFToken', csrftoken);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(`head=${annHeading.value}&data=${textAreaContent.value}&i=${importantValue}`);
    req.addEventListener('load', () => {
        if (req.responseText.toLowerCase() == 'done') {
            textAnn.innerHTML = 'Announcement Added Successfully';
            document.querySelector('.popup').classList.add('active');
            pop.classList.remove('add');
        } else {
            annStatus.innerHTML = 'Failed';

            textAnn.innerHTML = "<p>Error Can't Add Announcement,</p><p>Please Try Again!!!</p>";
            icon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            document.documentElement.style.setProperty('--pop', '#ff3821');
            // color = '#ff3821';
            document.querySelector('.popup').classList.add('active');
        }
    });
    // }
});
