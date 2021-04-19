const BASE_URL = "http://127.0.0.1:3000"

const replyBtn = document.getElementById("reply-btn");
const commentArea = document.getElementById("display-comments");
let val = localStorage.getItem('message_id')
let message_iid = parseInt(val);

document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM LOADED', message_iid)
    fetchMessages();
    fetchComments();
})
document.addEventListener("DOMContentLoaded", showComments(message_iid) )

function testFunction() {
    alert("Mic Check, 123")
}

function closeMessage() {
    let messageForm = document.getElementById('message-form');
    messageForm.innerHTML = ``;
}