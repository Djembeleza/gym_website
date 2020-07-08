// DOM Elements
const openBtn = document.getElementsByClassName('open')[0];
const closeBtn = document.getElementsByClassName('close')[0];
const navList = document.getElementsByClassName('nav-list')[0];


// Open menu when clicked
openBtn.addEventListener('click', function () {
    navList.style.width = '100vw';
    openBtn.style.display = 'none'
    // Wait 0.6s then display the close button
    setTimeout(function () {
        closeBtn.style.display = 'inline-block';
    }, 600);
});

// Close menu when clicked
closeBtn.addEventListener('click', function () {
    closeBtn.style.display = 'none';
    navList.style.width = '0';
    openBtn.style.display = 'inline-block'

});