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
        .then(json => buildCommentArray(json))
        .then(setTimeout(() => {
            showComments(recall_id);
        }, 1000));
}

// function fetchComments() {
//     fetch(`${BASE_URL}/comments`)
//         .then(resp => resp.json())
//         .then(json => {
//             buildCommentArray(json)
//         })

// }

function buildCommentArray(json) {

    json.forEach(comment => {
        commentArray.push(comment)
    })
};

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
    }).then(setTimeout(() => {
        window.location.reload()}, 1000))
}