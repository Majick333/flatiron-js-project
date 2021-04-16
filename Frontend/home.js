const BASE_URL = "http://127.0.0.1:3000"

document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM LOADED')
    fetchMessages();
    fetchComments();
})


function testFunction() {
    alert("Mic Check, 123")
}

function closeMessage() {
    let messageForm = document.getElementById('message-form');
    messageForm.innerHTML = ``;
}