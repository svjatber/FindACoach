export default {
    setUser(_, payload) {
        localStorage.setItem('token', payload.token)
        localStorage.setItem('userId', payload.userId)
        localStorage.setItem('tokenExpiration', payload.tokenExpiration)
    }
}
