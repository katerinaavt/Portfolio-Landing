let bg = document.querySelector('.header-bg');
let bgPhoto = document.querySelector('.photo-section-bg');
let bgPhoto2 = document.querySelector('.photo-section-bg.second');
let bgPhoto3 = document.querySelector('.photo-section-bg.third');

window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
});

window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bgPhoto.style.transform = `translate(-${x * 30}px, -${y * 30}px)`;
});

window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bgPhoto2.style.transform = `translate(-${x * 30}px, -${y * 30}px)`;
});

window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bgPhoto3.style.transform = `translate(-${x * 30}px, -${y * 30}px)`;
});
