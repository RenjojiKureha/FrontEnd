const name = 'foo';
const age = 18;

const foo = 'foo value'

// 默认导出的方式一：
export{
    name,
    age,
    // foo as default
}

// 默认导出的方式二：常见
export default foo