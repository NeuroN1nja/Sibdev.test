export const checkAuth = () => {
    const token = localStorage.getItem('TestAppAuthToken')
    if (!token) {
        return false;
    }
    return true
}

export const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a.slice(0, 3);
}