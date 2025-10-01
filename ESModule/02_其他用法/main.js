// 导入方式一：普通的导入
// import {name , age , foo , Person} from './foo.js';
// import {address, height, bar} from './foo.js';
console.log(name, age);

// 导入方式二：起别名的导入
// import { address as addr, height as h, bar as baz} from './foo.js';
// import { addr, h, baz } from './foo.js';
console.log(addr, h);

// 导入方式三：将导出的所有内容放到一个标识符中
import * as foo from './foo.js';
console.log(foo.addr);
console.log(foo.h);
foo.foo();


