const express = require('express');
const path = require('path');
const app = express();

// 设置视图引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// 静态文件
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

// 路由
app.get('/', (req, res) => {
    res.render('index', { title: 'My Blog' });
});

module.exports = app;