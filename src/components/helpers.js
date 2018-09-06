export const checkAuth = () => {
    const token = localStorage.getItem('TestAppAuthToken')
    if (!token) {
        return false;
    }
    return true
}