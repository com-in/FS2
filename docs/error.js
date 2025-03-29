var errors = {
    "错误代码: -103": "发送数据包时未收到响应，请稍后再试",
    "错误代码: -23": "未能连接到服务器，服务器主机可能脱机，或者是你的网络连接问题",
    "错误代码: -52": "无法解析目标服务器的IP地址，可能是服务器网络问题，或者是你的DNS或者网络问题",
    "错误代码: 122": "当前服务器负载过高，请稍后再试",
    "错误代码: -9": "已经连接到服务器，但是没有收到后续响应",
    "错误代码: -4": "你的Internet连接可能存在风险，服务器拒绝连接",
    "错误代码: -12": "数据包未能在本机成功发送，请检查本机网络问题",
    "错误代码: -44": "未能成功与目标服务器建立连接，可能是你的网络问题或者是服务器问题",
    "错误代码: 130": "服务器数据处理超时，请稍后再试"
};
var errorCode = Object.keys(errors)[Math.floor(Math.random() * Object.keys(errors).length)];
var errorMessage = errors[errorCode];
document.getElementById("errorNumber").textContent = errorCode;
document.getElementById("errorMessage").textContent = errorMessage;