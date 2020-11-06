'use strict'

class PostController {
    async index({view}) {
        const posts = [
            {title: "title 1", post: "post options 1"},
            {title: "title 2", post: "post options 2"},
            {title: "title 3 ", post: "post options  3"},
        ]
        return view.render('posts.index', {title:'latest Post', posts})
    }
}

module.exports = PostController
