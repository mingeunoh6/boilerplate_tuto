/* express 모듈 가져오기 */
const express = require("express");
/* 새로 익스프레스 앱 만들기 */
const app = express();
/* 포트는 아무렇게나 해도 됨 */
const port = 3000;
//바디파서 가져오기
const bodyParser = require("body-parser");

const config = require('./config/key');


//회원가입을 위한 유저모듈가져오기
const {
    User
} = require("./models/User");



//application/x-www-form-urlencoded 를 분석해서 가져오게
//바디파서 옵션주기
//바디파서가 클라이언트에서 오는 정보를 서버에서 분석해서 가져오게.
app.use(bodyParser.urlencoded({
    extended: true
}));
// 제이썬 타입으로 된걸 가져오게
app.use(bodyParser.json());

/* 몽구스 연결 */
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('mongoDB Connected...')).catch(err => console.log(err))




app.get("/", (req, res) => res.send("Hello World!"));


app.post('/register', (req, res) => {
    //회원가입할때 필요한 정보들을 클라이언트에서 가져오면 
    //그것들을 데이터베이스에 넣어준다.
    //유저 모델을 가져온다

    const user = new User(req.body)
    //몽구스에 저장과 에러메시지
    user.save((err, userInfo) => {
        if (err) return res.json({
            success: false,
            err
        })
        return res.status(200).json({
            success: true
        })
    })
});

app.listen(port, () => console.log('Example app listening on port ${port}!'));