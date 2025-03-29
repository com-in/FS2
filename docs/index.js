var redirectTimeout = Math.floor(Math.random() * (4500 - 1500 + 1)) + 1500;
var redirectPage = "error.html";
var homePage = "home.html";
window.onload = function () {
    setTimeout(function () {
        // 生成一个 0 到 1 之间的随机数
        var randomNum = Math.random();
        if (randomNum < 0.25) {
            // 25% 的概率跳转到 home.html
            window.location.href = homePage;
        } else {
            // 75% 的概率跳转到 error.html
            window.location.href = redirectPage;
        }
    }, redirectTimeout);
};