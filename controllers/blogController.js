const Blog = require('../models/blog');

// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            const date = new Date().getFullYear()
            res.render('blogs/index', { title: 'All Blogs', blogs: result, date })
        })
        .catch((err) => {
            console.log(err);
        })
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            const date = new Date().getFullYear()

            res.render('blogs/details', { blog: result, title: 'Blog Details', date });
        })
        .catch(err => {
            const date = new Date().getFullYear()
            res.render('404', { title: 'Blog not found', date })
        })
}

const blog_create_get = (req, res) => {
    const date = new Date().getFullYear()

    res.status(404).render('blogs/create', { title: 'Create a new blog', date });
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body)

    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err);
        })
}

const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}