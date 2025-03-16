const express = require('express');
const path = require('path');
const app = express();

// 设置视图引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 静态文件
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// 路由
app.get('/', (req, res) => {
    res.render('index', { title: 'My Blog' });
});

// 仅在本地开发时启动服务器
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

// 导出 app 实例供 Vercel 使用
module.exports = app;