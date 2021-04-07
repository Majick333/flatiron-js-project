class Comment {
    constructor(username, content, message_id){
        this.username = username;
        this.content = content;
        this.message_id = message_id;
        }     
    }

    

 //fetch and filter by message_id 
function fetchComments() {
    fetch(`${BASE_URL}/comments`)
    .then(resp => resp.json())
    .then(json => renderComments(json))
    //debugger
}

function renderComments(json) {
    //debugger
    //console.log(json)

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


// TODO::
// ! RESULT ARRAY SHOWS UP IN DEBUGGER, 
// ! BUT IS DELETED WHEN STACK RUNS
// ? HOW TO STOP STACK FROM LOOPING??

// * triggered by clicking view button from message menu
function showComments(message_iid){
    

    // let ans = [];
    const commentArea = document.getElementById("display-comments");
   
    // * filter comments by message
    let result = commentArray.filter(comment => comment.message_id == message_iid)

    // ! result stringify
    console.log("showComments", result)
    debugger
    
    // ans.push(result)
    // console.log("ans", ans)
    
    

    commentArea.innerHTML +=
        
        `
        ${result}
        `
        
    
    // result.forEach(comment => {
    //     //debugger

    //     commentArea.innerHTML +=

    //     `<div>
    //     ${result}
    //     <h4> From::<strong> ${comment.username} </strong> <h4> <br>
    //     <p> ${comment.content} </p> <br>
    //    </div>`

       
    // })
}

