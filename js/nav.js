const BurgerBtn=document.querySelector('.nav2__inside__burger');
const Nav=document.querySelector('nav');
function DblockNav() {
    if (Nav.className=='') {
        Nav.className='nav-scale';
    }else{
        Nav.className='';
        
    }
}
BurgerBtn.addEventListener('click',DblockNav);