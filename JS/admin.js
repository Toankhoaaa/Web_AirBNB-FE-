const menuBtn = document.querySelector('.menu_btn button')
const navLink = document.querySelector('.nav_links')
const linkNames = document.querySelectorAll('.link-name')
const box = document.querySelector('.box')


menuBtn.addEventListener('click', ()=>{
    if(navLink.classList.contains('setWidth')){
        navLink.classList.remove('setWidth')
        setTimeout(()=>{
            linkNames.forEach((link)=>{
                link.classList.remove('open')
            })
        }, 1400)
    }else{
        navLink.classList.add('setWidth')
        linkNames.forEach((link)=>{
            link.classList.add('open')
        })
    }
})