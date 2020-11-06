'use strict'

// model import
const Post = use('App/Models/Post')

class PostController {
    async index({view}) {
        // const posts = [
        //     {title: "title 1", post: "post options 1"},
        //     {title: "title 2", post: "post options 2"},
        //     {title: "title 3 ", post: "post options  3"},
        // ]
        const posts = await Post.all();
        return view.render('posts.index', {
            posts: posts.toJSON()
        })
    }

    async details({params, view}){
        const  post = await Post.find(params.id)

        return view.render('posts.details', {
            post: post
        })
    }

    async add({view}){
        return view.render('posts.add')
    }

    async store({request, response, session}){
        const post = new Post();

        post.title = request.input('title')
        post.body =  request.input('body')

        await post.save()

        session.flash({notification: 'Post added'})

        return response.redirect('/posts')
    }

}

module.exports = PostController
