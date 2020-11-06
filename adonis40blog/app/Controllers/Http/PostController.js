'use strict'

// bring in model
const Post = use('App/Models/Post')

// bring in validator
const { validate } = use('Validator')

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
        // validate input
        const validation = await validate(request.all(), {
            title: 'required|min:3|max:255',
            body: 'required|min:3'
        })

        if(validation.fails()){
            session.withErrors(validation.messages()).flashAll()
            return response.redirect('back')
        }


        const post = new Post()

        post.title = request.input('title')
        post.body =  request.input('body')

        await post.save()

        session.flash({notification: 'Post added'})

        return response.redirect('/posts')
    }

}

module.exports = PostController
