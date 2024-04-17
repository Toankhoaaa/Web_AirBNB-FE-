//Remove hotel

const removeGeneralBtn = document.querySelector('.remove_btn_general')
const removeBtns = document.querySelectorAll('.remove_btn button')
const checkBoxs = document.querySelectorAll('.check_box')
const checkRemoves = document.querySelectorAll('.check_remove')
let currentRemove = 0;
removeGeneralBtn.addEventListener('click', ()=>{
    currentRemove++;
    if (currentRemove % 2 != 0){
        for(var checkRemove of checkRemoves){
            checkRemove.classList.add('open')
        }
    }else{
        const checkeds = document.querySelectorAll('.checked');
        for(var checked of checkeds){
            const parent = checked.parentNode;
            const parent1 = parent.parentNode;
            const hotelContainer = parent1.parentNode;
            hotelContainer.classList.add('close');
        }
        for(var checkRemove of checkRemoves){
            checkRemove.classList.remove('open')
        }
    }
})
let currentCheck = 0;
checkBoxs.forEach(function(button) {
    button.addEventListener('click', function() {
        currentCheck++;
        if(currentCheck % 2 != 0){
            this.classList.add('checked'); 
            this.style.color = 'white'; 
        }else{
            this.classList.remove('checked'); 
            this.style.color = '';
        }
    });
});

removeBtns.forEach(function(removeBtn){
    removeBtn.addEventListener('click', () =>{
        const parentR = removeBtn.parentNode;
        const parentR1 = parentR.parentNode;
        const hotelContainerR = parentR1.parentNode;
        hotelContainerR.classList.add('close')
    })
})
