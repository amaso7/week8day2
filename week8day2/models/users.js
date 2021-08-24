class User {
    constructor(userId = null,username, password) {
        this.userId = userId
        this.username = username
        this.password = password
        this.posts = []
    }
    addPost(post){
        this.posts.push(post)
    }
}
module.exports = User