// nhập discount và giá phòng
var elements = document.getElementsByClassName('_10');

for (var i = 0; i < elements.length; i++) {
  elements[i].contentEditable = 'true';

  elements[i].addEventListener('input', function(e) {
    var newNumber = parseInt(contentWithoutPercent, 10);

    if (contentWithoutPercent === '' || isNaN(newNumber)) {
      this.textContent = '10';
    } else {
      this.textContent = newNumber;
    }
  });

  elements[i].addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.blur();
    }
  });

  elements[i].addEventListener('blur', function(e) {
    var contentWithoutPercent = this.textContent.slice(0, -1);
    var newNumber = parseInt(contentWithoutPercent, 10);

    if (contentWithoutPercent === '') {
      this.textContent = '10';
    }
  });
}


var elements = document.getElementsByClassName('_102');

for (var i = 0; i < elements.length; i++) {
  elements[i].contentEditable = 'true';

  elements[i].addEventListener('input', function(e) {
    var contentWithoutPercent = this.textContent.slice(0, -1);
    var newNumber = parseInt(contentWithoutPercent, 10);

    if (contentWithoutPercent === '' || isNaN(newNumber)) {
      this.textContent = '%';
    } else {
      this.textContent = newNumber + '%';
    }
  });

  elements[i].addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.blur();
    }
  });

  elements[i].addEventListener('blur', function(e) {
    var contentWithoutPercent = this.textContent.slice(0, -1);
    var newNumber = parseInt(contentWithoutPercent, 10);

    if (contentWithoutPercent === '') {
      this.textContent = '0%';
    }
  });
}

//Chuyển trang

const nextBtn = document.querySelector('.next_btn button')
const backBtn = document.querySelector('.back_btn button')
const barStep1 = document.querySelector('.bg-black_step_1')
const barStep2 = document.querySelector('.bg-black_step_2')
const barStep3 = document.querySelector('.bg-black_step_3')
var video1 = document.getElementById('myVideo-1')
var video2 = document.getElementById('myVideo-5')
var video3 = document.getElementById('myVideo-9')

var index = 1;
var barWith = 0;

nextBtn.addEventListener('click', () =>{
    index++;
    backBtn.style.pointerEvents = ''
    var pageShow = document.querySelector('#page_' + index);
    var pageHide = document.querySelector('#page_' + (index - 1));
    pageHide.style.transform = 'translateX(-100%)'
    pageShow.style.transform = ''
    setTimeout(() => {
        pageHide.classList.remove('open')
        pageShow.classList.add('open')
    }, 700)
    if (index > 1 && index < 5){
      barWith = barWith + 33.333;
      barStep1.style.width = `${barWith}%`
    }
    else if(index === 5){
      if(barWith > 66.660 && barWith < 66.667){
        barWith = barWith + 33.333;
        barStep1.style.width = `${barWith}%`
      }
      barWith = 0;
      video2.addEventListener('ended', () =>{
        video2.currentTime = 0
        video2.playbackRate = 1.0
        video2.play();
      })
    }
    else if(index > 5 && index < 9){
      if(index === 6){
        barWith = 0;
        barWith = barWith + 33.333;
      }else{
        barWith = barWith + 33.333;
      }
      barStep2.style.width = `${barWith}%`
    }
    else if(index === 9){
      if(barWith > 66.660 && barWith < 66.667){
        barWith = barWith + 33.333;
        barStep2.style.width = `${barWith}%`
      }
      barWith = 0;
      video3.addEventListener('ended', () =>{
        video3.currentTime = 0
        video3.playbackRate = 1.0
        video3.play();
      })
    }
    else if(index > 9 && index < 13){
      if(index === 10){
        barWith = 0;
        barWith = barWith + 33.333;
      }else{
        barWith = barWith + 33.333;
      }
      barStep3.style.width = `${barWith}%`
    }


    if(index === 1){
      backBtn.style.pointerEvents = 'none'
      video1.addEventListener('ended', () =>{
        video1.currentTime = 0
        video1.playbackRate = 1.0
        video1.play();
      })
    }
    else if(index === 12){
      nextBtn.textContent = 'Done'
      nextBtn.style.pointerEvents = 'none'
    }else{
      nextBtn.textContent = 'Next'
    }
})


backBtn.addEventListener('click', () =>{
    index--;
    nextBtn.style.pointerEvents = ''
    var pageShow = document.querySelector('#page_' + index);
    var pageHide = document.querySelector('#page_' + (index + 1));
    pageShow.classList.add('active')
    pageShow.style.transform = ''
    pageHide.style.transform = 'translateX(100%)'
    
    setTimeout(() => {
      pageHide.classList.remove('active')
      pageHide.classList.remove('open')
      pageShow.classList.add('open')
    }, 700)
    if (index >= 1 && index < 5){
      if(index === 4){
        barWith = 133.332;
        barWith = barWith - 33.333;
      }else{
        barWith = barWith - 33.333;
      }
      barStep1.style.width = `${barWith}%`
      video1.currentTime = 0
    }
    else if(index === 5){
      barWith = barWith - 33.333;
      barStep2.style.width = `${barWith}%`
      barWith = 133.332;
      video2.addEventListener('ended', () =>{
        video2.currentTime = 0
        video2.playbackRate = 1.0
        video2.play();
      })
    }
    else if(index > 5 && index < 9){
      if(index === 8){
        barWith = 133.332;
        barWith = barWith - 33.333;

      }else{
        barWith = barWith - 33.333;
      }
      barStep2.style.width = `${barWith}%`
    }
    else if(index === 9){
      barWith = barWith - 33.333;
      barStep3.style.width = `${barWith}%`
      barWith = 133.332;
      video3.addEventListener('ended', () =>{
        video3.currentTime = 0
        video3.playbackRate = 1.0
        video3.play();
      })
    }
    else if(index > 9 && index < 13){
      barWith = barWith - 33.333;
      barStep3.style.width = `${barWith}%`
      video3.currentTime = 0
    }

    if(index === 1){
      backBtn.style.pointerEvents = 'none'
      video1.addEventListener('ended', () =>{
        video1.currentTime = 0
        video1.playbackRate = 1.0
        video1.play();
      })
    }
    else if(index === 12){
      nextBtn.textContent = 'Done'
      nextBtn.style.pointerEvents = 'none'
    }else{
      nextBtn.textContent = 'Next'
    }
})
