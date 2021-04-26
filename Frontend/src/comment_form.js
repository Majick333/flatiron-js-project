function commentForm(message_iid) {

    const commentForm = document.getElementById('comment-form');

    commentForm.innerHTML +=
        `
    <form>
        <strong> Reply to Message </strong> <br>
        <label> Your Name:</label><input type="text" id="replyUsername" placeHolder ="Anonymous"> <br>
        <label> Reply:</label> <input type="text" id="replyContent"> <br>
        <input type="submit" value="Send">
        <button onclick="closeComment(); return false;">Close</button
    </form>
    `

    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let replyUsername = document.getElementById('replyUsername').value;
        replyUsername.defaultValue = "Anonymous";

        let replyContent = document.getElementById('replyContent').value;

        let reply = {
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
            }).then(res => res.json())
            .then(data => {
                let comment_iid = data.id;
                const reply = document.createElement('div');
                reply.className = "reply";
        
                reply.innerHTML =
                    `
            
                <form>
                <strong><em> FROM </em></strong>   
                    ${data.username}<br><br>
                    ${data.content}<br>
                <button onclick = "deleteComment(${comment_iid}); return false;"> Delete </button>
                </form>
                `
                commentArea.insertAdjacentElement("beforeend",reply)
            })
           
    })
    

}

function closeComment() {
    const commentForm = document.getElementById('comment-form');
    commentForm.innerHTML = ``
}