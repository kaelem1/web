# Hostinger 部署指南

## 1. 准备工作

1. 本地环境准备：

```bash
# 确保所有依赖已安装
npm install

# 生成 Prisma 客户端
npm run prisma generate

# 构建项目
npm run build
```

2. 确认以下信息准备就绪：
   - FTP 账号：u836307301
   - FTP 密码：J[v5]JA/VZeD;p1
   - FTP 主机：kaelem.io
   - MySQL 数据库名：u836307301_blog
   - MySQL 用户名：u836307301_kaelem
   - MySQL 密码：Kaelem123456

## 2. 部署步骤

### 2.1 数据库配置

1. 登录 Hostinger 控制面板
2. 进入 "MySQL 数据库" 部分
3. 确认数据库 `u836307301_blog` 已创建
4. 确保数据库用户权限完整

### 2.2 上传文件

方法一：使用自动部署脚本

```bash
npm run deploy
```

方法二：手动 FTP 上传

1. 使用 FileZilla 等 FTP 客户端连接
2. 上传以下文件到 `public_html` 目录：
   ```
   ├── .next/
   ├── node_modules/
   ├── public/
   ├── prisma/
   ├── package.json
   ├── package-lock.json
   ├── .env
   └── next.config.mjs
   ```

### 2.3 Node.js 配置

1. 在 Hostinger 控制 �� 板中：
   - 进入 "网站" > "Node.js"
   - 启用 Node.js 支持
   - 选择 Node.js 版本：18.x
   - 设置入口点：`npm start`

### 2.4 域名配置

1. 在 Hostinger 控制面板中：
   - 进入 "域名" 设置
   - 确认 DNS 记录指向正确的服务器
   - 等待 DNS 生效（可能需要 24-48 小时）

## 3. 部署后配置

1. 初始化数据库：

```bash
npm run db:push
```

2. 检查网站是否正常运行：
   - 访问 https://kaelem.io
   - 测试博客功能
   - 确认数据库连接

## 4. 故障排除

1. 如果网站无法访问：

   - 检查 Node.js 服务是否运行
   - 查看错误日志
   - 确认端口配置正确

2. 如果数据库连接失败：

   - 验证数据库凭据
   - 检查数据库服务器状态
   - 确认防火墙设置

3. 如果文件上传失败：
   - 检查 FTP 连接
   - 确认文件权限
   - 验证磁盘空间

## 5. 维护建议

1. 定期备份：

   - 数据库内容
   - 上传的文件
   - 配置文件

2. 监控：

   - 服务器资源使用
   - 数据库性能
   - 错误日志

3. 安全：
   - 定期更新密码
   - 保持依赖包更新
   - 监控异常访问

## 6. 有用的命令

```bash
# 启动应用
npm start

# 查看日志
pm2 logs

# 重启应用
pm2 restart all

# 数据库管理
npm run db:studio
```

## 7. 重要提示

- 保管好所有密码和访问凭据
- 定期检查服务器和数据库状态
- 重要更改前先在本地测试
- 保持本地代码与服务器代码同步

## 8. 联系支持

如果遇到无法解决的问题：

1. Hostinger 支持：https://www.hostinger.com/support
2. 技术支持邮箱：[您的支持邮箱]
3. 控制面板：https://hpanel.hostinger.com
