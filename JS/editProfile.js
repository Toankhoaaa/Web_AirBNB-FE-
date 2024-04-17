//place went

const openBtn = document.querySelector('.open_btn')
const btn = document.querySelector('.open_btn button')
const places = document.querySelectorAll('.place')
let currentClicked = 0
openBtn.addEventListener('click', ()=>{
    currentClicked++;
    if (currentClicked % 2 != 0){
        Object.assign(btn.style,{
            transform: 'translateX(28px)',
            color: '#000'
        })
        openBtn.style.opacity = 1;
    
        for(var place of places){
            place.style.opacity = 1;
        }
    }else{
        Object.assign(btn.style,{
            transform: 'translateX(0)',
            color: ''
        })
        openBtn.style.opacity = '';
    
        for(var place of places){
            place.style.opacity = '';
        }
    }
})

//interest of user

const interestBtns = document.querySelectorAll('.interest_list li>button')
const saveBtn = document.querySelector('.save_btn')
const quantity = document.querySelector('.number')
const listAdd = document.querySelector('.list_button_add')
let parts = quantity.textContent.split('/');
let number = parseInt(parts[0], 10);
let currentCheck = 0;
let selectedButtons = [];
let addBtns = document.querySelectorAll('.add_inter_btn');
for (var addBtn of addBtns){
    addBtn.addEventListener('click',()=>{
        interestMenu.classList.add('active')
    })
}
for(let index = 0; index < interestBtns.length; index++){
    interestBtns[index].addEventListener('click', (e)=>{
        if (currentCheck < 7){
            if(!e.target.classList.contains('focus')){
                number++;
                interestBtns[index].classList.add('focus')
                quantity.textContent = `${number}/7 selected`
                if(currentCheck >= 3)
                    listAdd.innerHTML += '<button class="add_inter_btn"><i class="fa-solid fa-plus"></i></button>'
                addBtns = document.querySelectorAll('.add_inter_btn');
                var temp = interestBtns[index].innerHTML;
                addBtns[currentCheck].innerHTML = temp
                Object.assign(addBtns[currentCheck].style, {
                    border: '2px solid #000',
                    color: '#000'
                })
                for (var addBtn of addBtns){
                    addBtn.addEventListener('click',()=>{
                        interestMenu.classList.add('active')
                    })
                }
                currentCheck++;
                selectedButtons.push(interestBtns[index])
            }else{
                number--;
                e.target.classList.remove('focus')
                quantity.textContent = `${number}/7 selected`
                var a = interestBtns[index].children[0].className;
                var iconPlus = '<i class="fa-solid fa-plus"></i>'
                var btn = listAdd.querySelector('.' + a.slice(9, a.length)).parentNode;
                Object.assign(btn.style, {
                    border: '',
                    color: ''
                })
                if(currentCheck > 3){
                    btn.remove();
                }else{
                    listAdd.querySelector('.' + a.slice(9, a.length)).parentNode.innerHTML = iconPlus;
                }
                currentCheck--;
                selectedButtons.splice(selectedButtons.indexOf(this), 1);
            }
            for(let i = 0; i < interestBtns.length; i++){
                if(!interestBtns[i].classList.contains('focus')){
                    interestBtns[i].style.opacity = 1;
                }
            }
        }
        else if (e.target.classList.contains('focus')){
            number--;
            e.target.classList.remove('focus')
            quantity.textContent = `${number}/7 selected`
            var a = interestBtns[index].children[0].className;
            var iconPlus = '<i class="fa-solid fa-plus"></i>'
            var btn = listAdd.querySelector('.' + a.slice(9, a.length)).parentNode;
            Object.assign(btn.style, {
                border: '',
                color: ''
            })
            if(currentCheck > 3){
                btn.remove();
            }else{
                listAdd.querySelector('.' + a.slice(9, a.length)).parentNode.innerHTML = iconPlus;
            }
            currentCheck--;
            selectedButtons.splice(selectedButtons.indexOf(this), 1);
            for(let i = 0; i < interestBtns.length; i++){
                if(!interestBtns[i].classList.contains('focus')){
                    interestBtns[i].style.opacity = 1;
                }
            }
        }
        if(number === 7){
            for(let i = 0; i < interestBtns.length; i++){
                if(!interestBtns[i].classList.contains('focus')){
                    interestBtns[i].style.opacity = 0.3;
                }
            }
        }
    })
}


const interestMenu = document.querySelector('.interest_menu')
const interestBox = document.querySelector('.interest_box')
const interestContainer = document.querySelector('.interest_container')

interestMenu.addEventListener('click', (event)=>{
    event.target.classList.remove('active')
})

interestBox.addEventListener('click', (event)=>{
    interestMenu.classList.remove('active')
})

interestContainer.addEventListener('click',(event)=>{
    event.stopPropagation();
})

