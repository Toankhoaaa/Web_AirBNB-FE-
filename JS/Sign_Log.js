const container = document.getElementById('container')
const registerBtn = document.getElementById('register')
const loginBtn = document.getElementById('login')
const bodySignlog = document.getElementById('body_sign_log')
const firstHeader1 = document.getElementById('first_header');
const header1 = document.getElementById('header');

registerBtn.addEventListener('click', () =>{
    container.classList.add('active');
});

loginBtn.addEventListener('click',() =>{
    container.classList.remove('active');
});

bodySignlog.addEventListener('click',(e) =>{
    e.target.classList.remove('open')
})


for (var menuUserBtn of menuUserBtns) {
    menuUserBtn.addEventListener('click', function (e) {
        e.stopPropagation(); // Ngăn chặn sự kiện click từ việc phát tán ra ngoài
        bodySignlog.classList.remove('open') // Hiển thị menu
    });
}

const signUpBtnOfMenu = document.querySelector('.js_signUp_btn');
const loginBtnOfMenu = document.querySelector('.js_logIn_btn');

signUpBtnOfMenu.addEventListener('click', () =>{
    bodySignlog.classList.add('open');
    container.classList.remove('active');
    subNavGuest.classList.remove('open');
    current = 0;
});

loginBtnOfMenu.addEventListener('click', () =>{
    bodySignlog.classList.add('open');
    container.classList.add('active');
    subNavGuest.classList.remove('open');
    current = 0;
})