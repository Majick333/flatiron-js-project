const BASE_URL = "http://127.0.0.1:3000"
let commentArray = [];

const replyBtn = document.getElementById("reply-btn");
const commentArea = document.getElementById("display-comments");
let val = localStorage.getItem('message_id')
let recall_id = parseInt(val);

document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM LOADED', recall_id)
    fetchMessages();
    fetchComments();
    showComments(recall_id);
})

function testFunction() {
    alert("Mic Check, 123")
}



function recallComments(recall_id) {
    let message_iid = recall_id
    showComments(message_iid)
}