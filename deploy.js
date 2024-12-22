const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const config = {
    user: "u836307301",
    password: "J[v5][JA/VZeD;p1", // 请替换为你的 FTP 密码
    host: "kaelem.io",
    port: 21,
    localRoot: __dirname,
    remoteRoot: "/public_html/",
    include: [
        "**/*",
        "*",
        ".next/**",
    ],
    exclude: [
        "**/*.map",
        ".git/**",
        "node_modules/**",
        "deploy.js",
        ".env",
        ".env.*",
    ],
    deleteRemote: false,
    forcePasv: true
};

ftpDeploy.deploy(config)
    .then(res => console.log('部署完成!'))
    .catch(err => console.log(err)); 