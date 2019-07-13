const express = require('express'); //framework untuk membuat server
const cors = require('cors'); //agar dapat diakses oleh web browser
const helmet = require('helmet'); //security, pelindung atau proteksi dari sql injection
const bodyParser = require('body-parser'); //untuk mengambil data request
const mongoose = require('mongoose'); //untuk me-manage mongoDb
const app = express();

const mongoUri= 'mongodb+srv://root:root@cluster0-ni02t.gcp.mongodb.net/test?retryWrites=true&w=majority'; //url berasal dari mongoDB yang telah kita buat di dalam website
const connectDB = () => //function untuk mengkoneksikan database
    mongoose.connect(mongoUri,{
        useNewUrlParser : true,
        useCreateIndex: true,
    })
        .then(() => console.log('DB Connected!')) //apabila koneksi berhasil
        .catch(() => console.log('Failed to Connect DB!')); //apabila koneksi ke db gagal

connectDB();

app.use(bodyParser.json()); //fungsi bahwa kita akan menggunakan fungsi 
app.use(cors());
app.use(helmet());

const{
    userList,
    getUserById,
    addUser, 
    editUser,
    deleteUser,
} = require('./modules/users');

const{
    login, 
} = require('./modules/auth');

app.post('/login', login);
app.get('/users', userList);
app.post('/users', addUser);
app.get('/users/:id', getUserById);
app.put('/users/:id', editUser);
app.delete('/users/:id', deleteUser);

app.listen(5000, () => {
    console.log(`App Running Up!`);
});