let $ = document

const menuBurgerBtn = $.querySelector(".bi-list-nested")
const NavContainer = $.querySelector(".container-nav")
let boolian = true
menuBurgerBtn.onclick = ()=>{
    if (boolian) {
        NavContainer.style.top = '0%'
        boolian = false
    }else{
        boolian = true
    }
}

const closeNavBtn = $.querySelector('.bi-x-lg')

closeNavBtn.onclick = ()=>{
    NavContainer.style.top = '-100%'
    boolian = true
}

