export const setToken = ({token, userId,  tokenExpiration }) =>{
    localStorage.setItem('token', token)
    localStorage.setItem('userId', userId)
    localStorage.setItem('tokenExpiration', tokenExpiration)
}
//
// export const gettersUserId = () => {
//     return localStorage.getItem('userId')
// }
//
// export const gettersToken = () => {
//     return localStorage.getItem('token')
// }
//
// export const gettersTokenExpiration = () =>{
//     return localStorage.getItem('tokenExpiration')
// }
//
// export const isAuthenticated = () =>{
//     if(!localStorage.getItem('token')){
//         return false
//     }
//     console.log(localStorage.getItem('token'))
//     return true
// }
