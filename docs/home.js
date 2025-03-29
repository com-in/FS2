const serverAddress = 'hb.frp.one:33322';
const apiUrl = `https://api.mcsrvstat.us/2/${serverAddress}`;
const refreshInterval = 10000;
let timeLeft = refreshInterval / 1000;

async function updateServerStatus() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('网络请求失败');
        }
        const data = await response.json();
        const statusText = document.getElementById('status-text');
        const onlinePlayers = document.getElementById('online-players');
        const latency = document.getElementById('latency');

        if (data.online) {
            statusText.textContent = '在线';
            statusText.style.color = 'green';
            onlinePlayers.textContent = data.players ? data.players.online || 0 : 0;
            latency.textContent = data.ping || 'N/A';
        } else {
            statusText.textContent = '离线';
            statusText.style.color = 'red';
            onlinePlayers.textContent = 0;
            latency.textContent = 'N/A';
        }
    } catch (error) {
        console.error('获取服务器状态时出错:', error);
        const statusText = document.getElementById('status-text');
        const onlinePlayers = document.getElementById('online-players');
        const latency = document.getElementById('latency');
        statusText.textContent = '未知';
        statusText.style.color = 'orange';
        onlinePlayers.textContent = 'N/A';
        latency.textContent = 'N/A';
    }
    timeLeft = refreshInterval / 1000;
}

function updateRefreshTime() {
    const refreshTimeElement = document.getElementById('refresh-time');
    refreshTimeElement.textContent = timeLeft;
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        updateServerStatus();
    }
}

// 初始加载
updateServerStatus();
// 每秒更新剩余刷新时间
setInterval(updateRefreshTime, 1000);