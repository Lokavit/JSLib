<!--
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: README.md
  Directory: lib-js
  Author: Lokavit
  Birthtime: 2023/4/10 14:08:27
  -----
  Mtime: 2023/5/10 20:52:42
  WordCount: 434
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====

-->

# lib-js

`javascript library`

- 最小、纯净、独立、原子化
- 单文件，单函数。
- 组合函数？**适用于复杂处理**
- 函数式编程，类编程

<!--
class：使用时需实例化一次，若想多处使用，只能用不同的变量来new 这个clss
const fun=()=>{}：声明式函数，在编写时，需要注意次第，被调用函数必须写在调用函数之前。
function funcName(){}:普通函数写法，无需顾虑次第，随意在页面引入，使用。
window.monk.someprops:原型链写法，自定义一个原型，挂载于window之下，引入使用随意。


I have data:
[{fee:'NO',id:1,feeCol:5,1,seq:1},{fee:'客户名',id:3,feeCol:5,1,seq:2},{fee:'基本单价',id:3,feeCol:2,3,seq:3},{fee:'防水',id:5,feeCol:5,1,seq:4},{fee:'Pin数',id:6,feeCol:1,3,seq:3},{fee:'1P 以上',id:7,feeCol:1,1,seq:3}]

I need foramat data:[{prop:'id_1',text:'NO',rowspan:5,colspan:1},{prop:'id_3',text:'客户名',rowspan:5,colspan:1},{prop:'id_3',text:'基本单价',rowspan:2,colspan:3},{prop:'id_5',text:'防水',rowspan:5,colspan:1},{prop:'id_6',text:'Pin数',rowspan:1,colspan:3},{prop:'id_7',text:'1P以上',rowspan:1,colspan:1}]

 -->

## npm link

```bash
$ npm link #将库link到全局
# 不link，也可以直接在使用项目中import
# 或者是用git+https ,或git+ssh,或git+file
$ npm i git+https://github.com/Lokavit/lib-js.git
# 取消link,在使用库的项目中，执行:
$ npm unlink 包名
```

## hook + dynamic import mudule

- 似乎不可行

```js

```

<!-- component
html:只写部分文档结构，使用hook,挂载于页面指定位置。
css:尽量只写一个全局css文件，极特殊复杂，采用hook按需动态挂载。

js:component逻辑
core.js实现以上。
 -->

## 合并用到的 js 代码块

<!--
一个命令

将使用中的js函数们，组合到一个build.js文件中,便于使用。

注意JS的作用域，及污染问题。

拿到模块依赖，只打包用到的代码。
rollup原生支持tree shaking（摇树优化）和esm。

启动服务，按需编译。

热更新：某个模块内容改变，重新请求该模块。


fs模块，文件读取。
AST获取import依赖的文件路径，依赖中若还有依赖，依次递归，维护在一个map中。

 -->

## export & import

```js
/** sum.js */
export const sum = (a, b) => a + b;
/** 其他项目中使用 */
import { sum } from "this file path";
```

## 组合

```js
import { sum } from "./sum";

export const doubleSum = (a, b) => {
  return sum(a, b) * sum(a, b);
};
```

## dynamic imports module

- push 到 github pages 也可使用

```js
// 动态import 并使用
import("./sum.js").then((Module) => {
  console.log("sum:", Module.sum(10, 5));
});
```

## 库列表，便于速查

- [计算两个值的和]
