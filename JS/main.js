var menuUserBtns = document.querySelectorAll('.js_menuUser_btn');
var subNavGuest = document.querySelector('.js_sub_nav_guest');
var menuUser = document.querySelector('.js_menu_user');
const firstHeader = document.getElementById('first_header');
const navLogin = document.querySelectorAll('nav_login')
const content = document.querySelector('.main')
let current = 0;
function showMenuUser() {
    subNavGuest.classList.add('open');
}

function hideMenuUser() {
    subNavGuest.classList.remove('open');
}

// Lặp qua mỗi nút menuUserBtn và gắn lắng nghe sự kiện click
for (var menuUserBtn of menuUserBtns) {
    menuUserBtn.addEventListener('click', function (e) {
        current++
        if(current % 2 != 0){
            e.stopPropagation(); // Ngăn chặn sự kiện click từ việc phát tán ra ngoài
            showMenuUser(); // Hiển thị menu
        }else{
            hideMenuUser();
        }
    });
}

// Gắn lắng nghe sự kiện click vào firstHeader để ẩn menu
firstHeader.addEventListener('click', function () {
    hideMenuUser();
    current = 0;
});

content.addEventListener('click', () =>{
    hideMenuUser();
    current = 0;
})

// Ngăn chặn sự kiện click từ menuUser phát tán ra ngoài
menuUser.addEventListener('click', function (e) {
    e.stopPropagation();
});

const alertComplete = document.querySelector('.alert_complete')
console.log(alertComplete)
setInterval(() =>{
    alertComplete.classList.add('offActive')
},3000)

const productBtns = document.querySelectorAll('.js_product')
for (var productBtn of productBtns){
    productBtn.addEventListener('click', ()=>{
        window.location.href = "Product.html";
    })
}

//xử lý sự kiện của nav-bar
const placeBtns = document.querySelectorAll('.place_btn')
const searchWhere = document.querySelectorAll('.search_where');
const bookContainer = document.querySelectorAll('.js_book_container')

placeBtns.forEach((btn) =>{
    btn.addEventListener('click', ()=>{
        searchWhere.forEach((box) =>{
            if(box.classList.contains('search_open')){
                box.classList.remove('search_open')
                bookContainer.forEach((book) =>{
                    Object.assign(book.style,{
                        backgroundColor: '',
                    });
                })
                placeBtns.forEach((btn) =>{
                    Object.assign(btn.style,{
                        backgroundColor: '',
                        boxShadow: ''
                    });
                })
            }
            else{
                box.classList.add('search_open')
                bookContainer.forEach((book) =>{
                    Object.assign(book.style,{
                        backgroundColor: '#DDD',
                    });
                })
                placeBtns.forEach((btn) =>{
                    Object.assign(btn.style,{
                        backgroundColor: '#fff',
                        boxShadow: '0 0 10px #ccc'
                    });
                })
            }
        })
    })
})