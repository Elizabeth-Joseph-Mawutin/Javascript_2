window.alert('Welcome to the Registration Page');
// console.log(document.querySelectorAll('.btn'));

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

const sb = document.querySelector('.sb');

sb.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.container').style.background = 'white';
});

document.querySelector(".sb").style.backgroundColor= "red";


