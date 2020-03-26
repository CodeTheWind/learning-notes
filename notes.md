## 1、React项目打包后打开index.html页面空白的问题
> ### 在package.json文件中加入 "homepage": "./"
&nbsp;

## 2、React项目开发环境跨域问题解决方法
> ### 找到 webpackDevServer.config.js 文件，将其中的 proxy 改为下面形式
```
proxy: {
  "/api": {
    target: "http://127.0.0.1:8000",
    changeOrigin: true,
    "pathRewrite": {
    "^api": "/"
    }
  }
}
```