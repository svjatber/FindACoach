import axios from "axios";

export default {
    async login(context, payload) {
        try{
            const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6mP52Qj6lJofNtu95B63IYJXk6Dfur0I`,
                {
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                }
            )
            context.commit('setUser', {
                token: res.data.idToken,
                userId: res.data.localId,
                tokenExpiration: res.data.expiresIn
            })

        }catch(e) {
            const error = new Error(e.message || 'Failed to authenticate')
            throw error
        }
    },
    async signup(context, payload) {
        try{
            const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6mP52Qj6lJofNtu95B63IYJXk6Dfur0I`,
                {
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                }
            )
           context.commit('setUser', {
               token: res.data.idToken,
               userId: res.data.localId,
               tokenExpiration: res.data.expiresIn
           })

        }catch(e) {
            const error = new Error(e.message || 'Failed to authenticate')
            throw error
        }

    },
    logout(context){
        context.commit('setUser', {
            token : null,
            userId : null,
            tokenExpiration : null
        })

    }
}


