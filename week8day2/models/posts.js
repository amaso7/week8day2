class Post {
    constructor(title, author, postText, datePosted) {
        this.title = title
        this.author = author
        this.postText = postText
        this.datePosted = datePosted
        this.comments = []
    }
    addComment(comment){
        this.comments.push(comment)
    }
}
module.exports = Post