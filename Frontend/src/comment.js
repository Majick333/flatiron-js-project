class Comment {
    constructor(username, content, message_id){
        this.username = username;
        this.content = content;
        this.message_id = message_id;
        }     
    }

function fetchComments() {
    fetch(`${BASE_URL}/comments`)
    .then(resp => resp.json())
    .then(json => renderComments(json))
}

function renderComments(json) {

    json.forEach(comment => {
    commentArray.push(comment)}
    )};

const commentArray = [];

function addComment(message_iid){
    console.log("addcomment", message_iid)
    //alert('like this')
    //debugger;
    let commentUsername = document.getElementById('comment-username').value
    let commentContent = document.getElementById('reply').value

    let comment ={
        message_id: message_iid,
        username: commentUsername,
        content: commentContent
    }

    fetch(`${BASE_URL}/comments`, {
        method: "POST",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })

    window.alert("Your Comment has been posted") 

}

// * triggered by clicking view button from message menu
function showComments(message_iid){
    const replyBtn = document.getElementById("reply-btn");
    const commentArea = document.getElementById("display-comments");
    

    // * filter comments by message
    let result = commentArray.filter(comment => comment.message_id == message_iid)
    
    console.log("showComments", result)

    commentArea.innerHTML = '';

    result.forEach(comment => {
        let comment_iid = comment.id;
        console.log(comment_iid);
        const reply = document.createElement('div');
        reply.className = "reply";
        
        reply.innerHTML =
        `
        <form>
        ${comment_iid}<br>
        <strong><em> FROM </em></strong>   
            ${comment.username}<br><br>
            ${comment.content}<br>
        <button onclick = "deleteComment(${comment_iid}); return false;"> Delete </button>
        </form>
        `

        commentArea.appendChild(reply);
    }
    )

    replyBtn.innerHTML =
    `
    <button onclick="commentForm(${message_iid}); return false">Reply...</button>
    `
}

function deleteComment(comment_iid){
     console.log(comment_iid)
    return fetch(`${BASE_URL}/comments/${comment_iid}`, {
        method: `DELETE`,   
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}
