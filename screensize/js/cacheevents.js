function handleCacheEvent(e) {
    alert(e.type);
}

applicationCache.addEventListener('cached', handleCacheEvent, false);
applicationCache.addEventListener('checking', handleCacheEvent, false);

