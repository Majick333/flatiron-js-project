const BASE_URL = "http://127.0.0.1:3000"
let commentArray = [];

const replyBtn = document.getElementById("reply-btn");
const commentArea = document.getElementById("display-comments");
let val = localStorage.getItem('message_id') //comes from localStorage as a string
let recall_id = parseInt(val); //convert localStorage back in to integer

document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM LOADED', recall_id)
    fetchMessages();
    fetchComments();
})

function testFunction() {
    alert("Mic Check, 123")
}
