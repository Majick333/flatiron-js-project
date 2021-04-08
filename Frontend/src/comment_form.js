
function commentForm(message_iid) {
    let commentForm = document.getElementById('comment-form');

    commentForm.innerHTML +=
    `
    <form>
        <strong> Reply to Message </strong> <br>
        <label> Your Name:</label><input type="text" id="replyUsername"> <br>
        <label> Reply:</label> <input type="text" id="replyContent"> <br>
        <input type="submit" value="Send">
    </form>
    `
    
    commentForm.addEventListener('submit', function(e){
         e.preventDefault();

        let replyUsername = document.getElementById('replyUsername').value;
        let replyContent = document.getElementById('replyContent').value;

        let reply ={
            username: replyUsername,
            content: replyContent,
            message_id: message_iid
        }

        fetch(`${BASE_URL}/comments`, {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(reply)
            
        }
        
        )
        
        console.log("reply submitted")
    })
}