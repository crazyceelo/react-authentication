// const express = require('express');

// const app = express();
// // tell app to look for static files in these directories
// app.use(express.static('/server/static/'));
// app.use(express.static('/client/dist'));

// // app.get('/', (req, res) => res.send('Hello World!'));
// const PORT = process.env.PORT || 3000;


// // start the server
// app.listen(PORT, () => {
//   console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
// })

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

app.use(bodyParser.urlencoded({ extended: false }));

const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

// start the server
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});

