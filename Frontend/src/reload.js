function refreshMessages(){
    console.log("refreshing Messages")
}

function refreshComments(message_iid) { 
    console.log('reload comments', message_iid)
    fetchComments();
    console.log(commentArray)
    showComments(message_iid)
}