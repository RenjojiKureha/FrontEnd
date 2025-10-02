// import { name, age, foo } from './foo.js'

// console.log(name)

// console.log('上面这个代码是同步的，会阻止后续代码的运行')

// 返回的结果是一个promise
import('./foo.js').then(res => {
    console.log('res:',res.name)
})

console.log('而这个是异步的，不会阻碍后续代码的运行')

