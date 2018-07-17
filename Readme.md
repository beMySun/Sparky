>轮子 使我快乐

## 开发指南

项目将基于 typescript + postcss + css modules 开发，如果你对 typescript 和 postcss 还不熟悉，可以参见：

[typescript](https://www.typescriptlang.org/)

[postcss](https://github.com/postcss/postcss)

现在可以在项目中使用你喜欢的 `css` 预处理器，例如 `sass` 或者 `less`，只需要定义文件的扩展名为 `.scss` 或者 `.less`。

## 开发规范

项目使用 [styleguidist](https://github.com/styleguidist/react-styleguidist) 脚手架进行开发，在项目中你可以参考和使用其他人所开发的组件，开启脚手架：
```shell
yarn start
```
或者
```shell
npm run styleguide
```
所有开发的组件请放置在：`src/components` 下面，若想要在脚手架上显示，请确保组件在 `styleguide.config.js` 的 `sections` 中有定义，如果没有定义，你可以在其中定义自己的 `section`。

在组件开发完毕后，请在 `src/index.ts` 中 `import` 你的组件然后 `export`。运行打包命令：
```shell
yarn lib
```
打包后的代码生成在 `lib` 目录下。

---


