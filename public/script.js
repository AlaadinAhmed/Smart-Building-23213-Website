const menuBtn = document.querySelector('.icon')
const dropMenu = document.querySelector('.dropmenu')
menuBtn.onclick = function(){
dropMenu.classList.toggle('open')
const isOpen = dropMenu.classList.contains('open')
if (isOpen){
    menuBtn.classList = 'icon fa-solid fa-xmark'
}
else{
    menuBtn.classList = 'icon fa-solid fa-bars'
}
}