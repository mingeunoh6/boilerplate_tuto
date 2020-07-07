/* express 모듈 가져오기 */
const express = require("express");
/* 새로 익스프레스 앱 만들기 */
const app = express();
/* 포트는 아무렇게나 해도 됨 */
const port = 5000;

/* 몽구스 연결 */
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://omg:qkrdmsqls1@boilerplate.sp0du.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('mongoDB Connected...')).catch(err => console.log(err))




app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log('Example app listening on port ${port}!'));