// 发送数据到bg,然后获取返回的域名列表
chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
    var content = JSON.parse(response)['data'];
    var index = content.indexOf(window.location.host);
    if (index >= 0) {
        return;
    } else {
        showLive2d();
    }
})
// 如果没有被排除则显示
function showLive2d() {
    var body = document.getElementsByTagName('body')[0];
    var iframe = document.createElement('iframe');
    iframe.src = 'https://store.animekid.cn/live2d/index.html'
    iframe.style.position = 'fixed'
    iframe.style.bottom = '0px'
    iframe.style.left = '0px'
    iframe.width = '300px'
    iframe.height = '300px'
    iframe.frameBorder = '0'
    body.appendChild(iframe)
};
