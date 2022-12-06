// const $ = {
//     testFunction:function(num) {
//         console.log(num)
//     }
// }
const modal = document.querySelector('.modal-overlay')
window.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        modal.removeAttribute('hidden')
    }

}) 

const modalClosebtn = document.querySelector('.modal-close')
modalClosebtn.addEventListener('click', function(){
    modal.setAttribute('hidden','')
})