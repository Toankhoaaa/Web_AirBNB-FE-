const checkIn = document.querySelectorAll('.check_in')
const checkOut = document.querySelectorAll('.check_out')
let currentDate = new Date();

let dayNow = currentDate.getDate();
let monthNow = currentDate.getMonth() + 1;
let yearNow = currentDate.getFullYear();

for (let i = 0; i < checkOut.length; i++){
    let DateCheckOut = checkOut[i].textContent;
    let parts = DateCheckOut.split('/');
    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10);
    let year = parseInt(parts[2], 10);
    if((year < yearNow) || (year == yearNow && month < monthNow) || (year == yearNow && month == monthNow && day < dayNow)){
        let parent = checkOut[i].parentNode;
        let parent1 = parent.parentNode;
        let parent2 = parent1.parentNode;
        let parent3 = parent2.parentNode;
        let hotelRemove = parent3.parentNode;
        hotelRemove.classList.add('close')
    }
}
