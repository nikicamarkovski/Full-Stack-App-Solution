class Post {
    constructor(post_id , title , content , category){
        this.post_id = post_id;
        this.title = title;
        this.content = content;
        this.category = category;
    }
}

// function Post ( post_id , title , content ) {
//     this.post_id = post_id;
//     this.title = title;
//     this.content = content;
// }

module.exports = {
    Post
}