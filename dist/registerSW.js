if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/uni/sw.js', { scope: '/uni/' })})}