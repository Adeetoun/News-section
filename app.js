const menu = document.querySelector('.open')
const close = document.querySelector('.close')
const dropDown = document.querySelector('.dropdown')

menu.addEventListener('click', () => {
    console.log('clicked')
    dropDown.classList.add('dropdown');
    dropDown.style.display = 'block';
})

close.addEventListener('click', () => {
    console.log('clicked');
    dropDown.style.display = 'none';
})