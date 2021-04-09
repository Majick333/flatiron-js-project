// *deletes comments after a certain amount of time has passed

//todo GRAB COMMENTS FROM COMMENTARRAY AND FILTER BY CREATION TIME

function shredderSearch(){
    console.log("shredderSearch")
    const destroyByTime = Time.now - 

    let shredItems = commentArray.filter(comment => comment.create_at > destroyByTime)
}