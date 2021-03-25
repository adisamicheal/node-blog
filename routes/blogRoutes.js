const express = require('express');
// const Blog = require('../models/blog');
const blogController = require('../controllers/blogController')

const router = express.Router();

router.get('/blogs/create', blogController.blog_create_get);
// router.get('/blogs/create', (req, res) => {

//     const date = new Date().getFullYear()

//     res.render('create', { title: 'Create a new blog', date });
// });

router.get('/blogs', blogController.blog_index);
// router.get('/blogs', (req, res) => {
//     Blog.find().sort({ createdAt: -1 })
//         .then((result) => {
//             const date = new Date().getFullYear()
//             res.render('index', { title: 'All Blogs', blogs: result, date })
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

router.post('/blogs', blogController.blog_create_post)
// router.post('/blogs', (req, res) => {
//     const blog = new Blog(req.body)

//     blog.save()
//         .then((result) => {
//             res.redirect('/blogs')
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

router.get('/blogs/:id', blogController.blog_details);
// router.get('/blogs/:id', (req, res) => {
//     const id = req.params.id;
//     Blog.findById(id)
//         .then(result => {
//             const date = new Date().getFullYear()

//             res.render('details', { blog: result, title: 'Blog Details', date });
//         })
//         .catch(err => {
//             console.log(err);
//         })
// });

router.delete('/blogs/:id', blogController.blog_delete);
// router.delete('/blogs/:id', (req, res) => {
//     const id = req.params.id;

//     Blog.findByIdAndDelete(id)
//         .then(result => {
//             res.json({ redirect: '/blogs' });
//         })
//         .catch(err => {
//             console.log(err);
//         })
// });


module.exports = router;