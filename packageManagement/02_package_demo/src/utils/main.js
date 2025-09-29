// const { why } = require('why');
const dayjs = require('dayjs');
const axios = require('axios');

// why();
console.log(dayjs());

axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    console.log(res);
})