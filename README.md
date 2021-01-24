# 解题思路

1. 框架选型

因为是官网，一般要求拥有最快的加载速度（排除普通 SPA），在动态内容不多的情况下（用不着 SSR），nextjs 提供的 Static Generation 成为首选。

2. 代码结构

项目需求简单，本身无论如何组织 next 项目都没有太大问题，如果能明确在短期内不会需求膨胀，我就直接采用 next 官方的代码结构了，相反如果能明确知道项目复杂度将持续上升，或者有相关联的项目共享类型或页面组件，那么我会毫不有序选择 monorepo。一方面我对 nrwl/nx 的 monorepo 比较熟悉，另一方面面试时我有提到过 monorepo，但毕竟没有代码，不能讲述清楚，所以这里用 monorepo 来做这个简单的小项目。

3. 视觉要求
视觉效果要求上，我个人比较喜欢 JSS 方案中的 styled-component。为了可能的 layout 的复用，我会把 layout 抽离开。为了 pc 和 mobile 分离，我会用静态路由进行区分。考虑到 antd 太大，其中大部分UI 组件我们都不需要，所以这里就不引入外部组件库，就简单写一点自己的布局组件，按钮和输入框组件，或者使用 antd 的下层实现，react-component。

4. 前端交互（表单验证和成功/报错提醒）
因为是官网，表单验证也考虑用比较小的库，经过一个简单的[调研](https://blog.bitsrc.io/react-hook-form-vs-formik-form-builder-library-for-react-23ed559fdae)，我打算放弃我用过的 formik，转而使用最新的，跟 hook 结合更好的 react-hook-form. 

对于弹窗/报错打算引入一个小的 UI 库来解决，可以考虑 antd 的下层实现 rc-component。

5. 前后端交互（接口）



6. 额外考虑
考虑到 airwallex 是一家跨国公司，一定也需要一个完善的 i18n 方案，我这里做一个简单的 demo，自动检测用户语言。

# Rai

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@rai/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
