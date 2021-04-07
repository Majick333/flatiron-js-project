
const BASE_URL = "http://127.0.0.1:3000"

document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM LOADED')
    fetchMessages();
    fetchComments();
})




    
function newReply() {
    debugger;
    let modalBg = document.getElementsByClassName("modal-bg");
    modalBg.classList.add('modal-active');

    
}