
document.querySelector("#sb").style.backgroundColor= "red";


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phone = document.querySelector('#phone');
const country = document.querySelector('#country');
const select = document.querySelector('#select');
const linkedin = document.querySelector('#linkedin');
const myFile = document.querySelector('#myFile');
const about = document.querySelector('#about');
const design = document.querySelector('#your-design');
const link = document.querySelector('#link');
const refree = document.querySelector('#refree-email');
const msg = document.querySelector('.msg');


myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();
    
    if(nameInput.value == '' || emailInput.value == '' || phone.value == '' || country.value == '' || select.value == '' || linkedin.value == '' || myFile.value == '' || about.value == '' || design.value == '' || link.value == '' || refree.value == '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter all fields'
        setTimeout(() => msg.remove(), 5000);

    } else {
        document.querySelector('.out').style.background = '#ccc';
        document.querySelector('.out').classList.add('bg-dark');
        alert('Application Submitted Successfully')


        // clear fields
        nameInput.value = '';
        emailInput.value = '';
        phone.value = '';
        country.value = '';
        select.value = '';
        linkedin.value = '';
        myFile.value = '';
        about.value = '';
        design.value = '';
        link.value = '';
        refree.value = '';
        
        }
    }






