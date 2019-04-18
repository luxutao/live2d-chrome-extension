// 第一次安装监听
chrome.runtime.onInstalled.addListener(function () {
    localStorage.setItem('exclude',JSON.stringify({"data":[]}))
    // 监听content发送数据到bg
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            var _message = request.greeting;
            if (_message) {
                sendResponse(localStorage.getItem('exclude'));
            }
        }
    )
})