class Comment {
    constructor(username, content, message_id){
        this.username = username;
        this.content = content;
        this.message_id = message_id;
        }     
    }

    let commentArray = [];

// //need to fetch and filter by message_id 
// //and add below their messages
function fetchComments() {
    fetch(`${BASE_URL}/comments`)
    .then(resp => resp.json())
    .then(json => renderComments(json))
    //debugger
}

function renderComments(json) {
    //debugger
    console.log(json)

    json.forEach(comment => {
    commentArray.push(comment)}
    )};



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

//triggered by clicking view button 
function showComments(message_iid){
    //debugger;
    console.log(message_iid)

    let result = commentArray.filter(sortComments(message_iid))

    console.log(result)
}

function sortComments(message_iid) {
    return commentArray.message_id === message_iid 
    debugger
}