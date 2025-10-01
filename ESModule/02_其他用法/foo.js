//第一种导出方式：export 声明语句
export const name = 'foo';
export const age = 18;

export function foo() {
    console.log('foo function');
}

export class Person {
    constructor() {
        console.log('Person constructor');
    }
}

//第二种导出方式：export 导出 和 声明分开
const address = 'beijing';
const height = 1.88;
function bar() {
    console.log('bar function');
}

// export {address, height, bar};

//第三种导出方式：第二种导出时起别名
export {
    address as addr, 
    height as h, 
    bar as baz
};