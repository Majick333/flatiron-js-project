document.addEventListener("DOMContentLoaded", () => {
    fetchMessages();
    newMessage();
    fetchComments();
    commentForm();
})


const BASE_URL = "http://127.0.0.1:3000"
//const MESSAGE_URL =`${BASE_URL}/messages`
//const COMMENTS_URL =`${BASE_URL}/comments`