// require(['jquery','vue'],function ($,Vue) {
//
// });
function init(Vue) {
    var app = new Vue({
        el: '#app-1',
        data: {
            message: 'Hello Vue!~~~'
        }
    });
    
    var app2 = new Vue({
        el: '#app-2',
        data: {
            message: '页面加载于 ' + new Date().toLocaleString()
        }
    });
}

