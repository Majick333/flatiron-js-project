class Comment {
    constructor(username, content, message_id){
        this.username = username;
        this.content = content;
        this.message_id = message_id;
    }

    
     
    }
 //const titleLink = document.getElementsByClassName("link")

 function renderComments(json) {
    let commentCard = document.getElementById("comments")
    
    commentCard.innerHTML='';
    
    json.forEach(comment => {
       // debugger;
        let reply = document.createElement('div');
        reply.innerHTML = 

            `<h1>${comment.message_id}</h1>
            <p>${comment.content}</p> <br>
            <h4>${comment.username}</h4>
            <br>
            

            `
            commentCard.appendChild(reply);
        })

    }


//need to fetch and filter by message_id 
//and add below their messages
function fetchComments() {
    fetch(`${BASE_URL}/comments`)
    .then(resp => resp.json())
    .then(json => renderComments(json));
}



function addComment(message_iid){
    console.log("addcomment", message_iid)
    alert('like this')
    debugger;
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

