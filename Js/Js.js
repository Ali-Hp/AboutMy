// Loading
window.addEventListener('load', () => {
        const loading = document.getElementById('loading')
        const body = document.getElementById('body')
        loading.classList.add('hideenLoa');
        body.classList.add('vis')


    })
    // Loading



let icon = document.getElementById('icon');
let iconTow = document.getElementById('iconTow');
let container = document.getElementById('container');
let left = document.getElementById('left');
let right = document.getElementById('right');
let body = document.getElementById('body');

icon.addEventListener('click', () => {
    icon.classList.add('hideen');
    iconTow.classList.add('show')
    container.classList.add('classAdd');
    left.classList.add('active');
    right.classList.add('margin-right');
    body.classList.add('overflow');



});
iconTow.addEventListener('click', () => {
    right.classList.remove('margin-right');
    left.classList.remove('active');
    iconTow.classList.remove('show')
    icon.classList.remove('hideen');
    container.classList.remove('classAdd');
    body.classList.remove('overflow');
});