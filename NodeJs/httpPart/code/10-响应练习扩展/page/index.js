// 获取所有td
const tds = document.querySelectorAll('td');
// 遍历每个td，添加点击事件监听器
tds.forEach(td => {
    td.onclick = function() {
        this.style.backgroundColor = 'yellow';
    }
});