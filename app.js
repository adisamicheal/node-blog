const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const Blog = require('./models/blog');
const blogRoutes = require('./routes/blogRoutes');


// express
const app = express();

// connect to mongodb
const dbUrl = 'mongodb+srv://michellead:michellead@nodeblog.jjaxr.mongodb.net/nodeblog?retryWrites=true&w=majority';
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((result) => app.listen(3000))
.catch((err) => console.log(err))

// register view engine
app.set('view engine', 'ejs');
// listen for request 
// app.listen(3000);

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog oh oh',
//         snippet: 'about my new blog  here man 2',
//         body: 'nore about my new blog shu shu 2'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// app.get('/single-blog', (req, res) => {
//     Blog.findById('605c9b29ea4aaeac48e8f3d4')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host:', req.hostname);
//     console.log('path:', req.path);
//     console.log('method:', req.method);
//     next();
// });
// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });



app.get('/', (req, res) => {
    // res.send('<p>A html right here</p>')
    // res.sendFile('./views/index.html', { root: __dirname });
    // res.render('index')
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    // ];
    // const date = new Date().getFullYear()
    // res.render('index', { title: 'Home', blogs, date });
    res.redirect('/blogs');
});
app.get('/about', (req, res) => {
    // res.send('<p>An about page  right here</p>')
    // res.sendFile('./views/about.html', { root: __dirname });
    const date = new Date().getFullYear()

    res.render('about', { title: 'About', date });
});


//blog routes
app.use('/' ,blogRoutes);
// app.get('/blogs/create', (req, res) => {

//     const date = new Date().getFullYear()

//     res.render('create', { title: 'Create a new blog', date });
// });

// app.get('/blogs', (req, res) => {
//     Blog.find().sort({ createdAt: -1 })
//         .then((result) => {
//             const date = new Date().getFullYear()
//             res.render('index', { title: 'All Blogs', blogs: result, date })
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// app.post('/blogs', (req, res) => {
//     const blog = new Blog(req.body)

//     blog.save()
//         .then((result) => {
//             res.redirect('/blogs')
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

// app.get('/blogs/:id', (req, res) => {
//     const id = req.params.id;
//     Blog.findById(id)
//         .then(result => {
//             const date = new Date().getFullYear()

//             res.render('details', { blog: result, title: 'Blog Details', date });
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })

// app.delete('/blogs/:id', (req, res) => {
//     const id = req.params.id;

//     Blog.findByIdAndDelete(id)
//         .then(result => {
//             res.json({ redirect: '/blogs' });
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })


// redirect
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })


// Note: This should come last because the codes runs from top to bottom 
// 404 page
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    const date = new Date().getFullYear()

    res.status(404).render('404', { title: '404', date });
});