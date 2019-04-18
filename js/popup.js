// 获取当前域名名称
var domainName = ''
chrome.tabs.query({ active: true, currentWindow: true}, function (tab) {
    var url = new URL(tab[0].url)
    domainName = url.hostname
});
$(function () { 
    $('#domainName').val(domainName)
    $("#saveExclude").click(function(){  
        var content = JSON.parse(localStorage.getItem('exclude'))['data'];
        content.push(domainName);
        localStorage.setItem('exclude',JSON.stringify({"data":content}))
        alert('添加成功')
        chrome.tabs.query({ active: true, currentWindow: true}, function (tab) {
            chrome.tabs.reload(tab[0].id, function() {})
        });
    });
    $("#delExclude").click(function(){  
        var content = JSON.parse(localStorage.getItem('exclude'))['data'];
        var index = content.indexOf(domainName);
        if (index < 0) {
            return;
        }
        content.pop(index);
        localStorage.setItem('exclude',JSON.stringify({"data":content}))
        alert('删除成功')
        chrome.tabs.query({ active: true, currentWindow: true}, function (tab) {
            chrome.tabs.reload(tab[0].id, function() {})
        });
    });

})