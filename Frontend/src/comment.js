class Comment {
    constructor(username, content, message_id) {
        this.username = username;
        this.content = content;
        this.message_id = message_id;
    }
}

let message_iid = localStorage.getItem('message_id')  

function fetchComments() {
    fetch(`${BASE_URL}/comments`)
        .then(resp => resp.json())
        .then(json => renderComments(json))
        .then(setTimeout(function() { showComments(recall_id);}, 1000));
}

function renderComments(json) {

    json.forEach(comment => {
        commentArray.push(comment)
    })
};


// function addComment(message_iid) {
//     console.log("addcomment", message_iid)
//     //alert('like this')
//     //debugger;
//     let commentUsername = document.getElementById('comment-username').value
//     let commentContent = document.getElementById('reply').value

//     let comment = {
//         message_id: message_iid,
//         username: commentUsername,
//         content: commentContent
//     }

//     fetch(`${BASE_URL}/comments`, {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(comment)
//     })

//     window.alert("Your Comment has been posted")
// }



// * triggered by clicking view button from message menu


function showComments(message_iid) {
    
    
    //! SET MESSAGE-ID TO BE RECALLED AFTER PAGE REFRESH
    let newVal = message_iid.toString()
    localStorage.setItem('message_id', newVal)  
    console.log('val', newVal)
    //!


    // * filter comments by message
    let result = commentArray.filter(comment => comment.message_id == message_iid)

    console.log("showComments", result)

    commentArea.innerHTML = '';

    result.forEach(comment => {
        let comment_iid = comment.id;
        const reply = document.createElement('div');
        reply.className = "reply";

        reply.innerHTML =
            `
        <form>
        <strong><em> FROM </em></strong>   
            ${comment.username}<br><br>
            ${comment.content}<br>
        <button onclick = "deleteComment(${comment_iid}); return false;"> Delete </button>
        </form>
        `

        commentArea.appendChild(reply);
    })

    replyBtn.innerHTML =
        `
    <button onclick="commentForm(${message_iid}); return false">Reply...</button>
    `
}

function deleteComment(comment_iid) {
    console.log(comment_iid)
    return fetch(`${BASE_URL}/comments/${comment_iid}`, {
        method: `DELETE`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}