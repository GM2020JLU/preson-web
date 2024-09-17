const express = require('express');
const path = require('path');

const app = express();

// 静态文件服务
app.use(express.static(path.join(__dirname, 'hecaitouweb')));

// 所有路由都返回 index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'hecaitouweb', 'index.html'));
});

// Vercel 使用 `process.env.PORT`
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; // 为 Vercel 导出 app
