# Vercel 部署指南

## 1. 准备工作

1. 本地环境准备：

```bash
# 安装依赖
npm install

# 生成 Prisma 客户端
npx prisma generate

# 构建项目
npm run build
```

2. 确保以下文件正确配置：
   - `prisma/schema.prisma`: 使用环境变量配置数据库连接
   - `.env`: 包含本地开发所需的环境变量
   - `.gitignore`: 排除不需要版本控制的文件

## 2. GitHub 仓库设置

1. 创建新的 GitHub 仓库

2. 推送代码到 GitHub：

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

## 3. Vercel 部署步骤

1. 登录 [Vercel](https://vercel.com)

   - 使用 GitHub 账号登录
   - 点击 "New Project"
   - 导入 GitHub 仓库

2. 项目配置：

   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `prisma generate && next build`
   - Install Command: `npm install`
   - Output Directory: .next

3. 环境变量设置：
   ```
   DATABASE_URL=mysql://用户名:密码@主机:3306/数据库名
   NEXTAUTH_URL=${VERCEL_URL}
   NEXTAUTH_SECRET=你的密钥
   ```

## 4. 部署后配置

1. 检查部署状态：

   - 访问 Vercel 仪表板
   - 查看部署日志
   - 确认构建成功

2. 测试网站功能：
   - 访问部署的网站 URL
   - 测试 API 接口
   - 检查数据库连接

## 5. 更新和重新部署

1. 代码更新：

   ```bash
   git add .
   git commit -m "你的更新说明"
   git push origin main
   ```

2. 触发重新部署：
   - 推送代码到 GitHub 会自动触发部署
   - 或在 Vercel 仪表板手动重新部署

## 6. 常见问题处理

1. 数据库连接问题：

   - 检查环境变量是否正确设置
   - 确认数据库凭据是否有效
   - 查看数据库服务器是否可访问

2. 构建错误：

   - 检查依赖项是否完整
   - 查看构建日志定位错误
   - 确保所有必要的环境变量都已设置

3. 运行时错误：
   - 查看 Vercel 日志
   - 检查客户端控制台错误
   - 验证 API 路由是否正常工作

## 7. 有用的命令

```bash
# 本地开发
npm run dev

# 构建项目
npm run build

# 启动生产服务器
npm start

# 更新数据库架构
npx prisma db push

# 触发重新部署
git commit --allow-empty -m "chore: trigger redeploy"
git push origin main
```

## 8. 注意事项

1. 安全性：

   - 不要在代码中硬编码敏感信息
   - 使用环境变量存储密钥和凭据
   - 定期更新依赖包

2. 性能：

   - 优化图片和静态资源
   - 使用适当的缓存策略
   - 监控应用性能

3. 维护：
   - 定期备份数据库
   - 保持依赖包更新
   - 监控错误日志

## 9. 有用的链接

- [Vercel 文档](https://vercel.com/docs)
- [Next.js 文档](https://nextjs.org/docs)
- [Prisma 文档](https://www.prisma.io/docs)
- [项目 GitHub 仓库](https://github.com/kaelem1/web)
