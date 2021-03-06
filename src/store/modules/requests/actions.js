import axios from 'axios'
export default {
    async contactCoach(context, payload) {
        const newRequest = {
            userEmail: payload.email,
            message: payload.message
        }
        const res = await axios.post(`https://vue3-a06ce-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, newRequest)

            newRequest.id = res.data.name
            newRequest.coachId = payload.coachId

            context.commit('addRequest', newRequest)
    },
    async fetchRequests(context) {
        try{
            const coachId = await context.rootGetters['auth/userId']
            const token =  context.rootGetters['auth/token']
            const response = await axios.get(`https://vue3-a06ce-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json?auth=${token}`)
            const requests = []

            for(let elem in response.data){
                const request = {
                    id: elem,
                    coachId: coachId,
                    userEmail: response.data[elem].userEmail,
                    message: response.data[elem].message
                }
                requests.push(request)
            }
            context.commit('setRequests', requests)
        }catch (e) {
            const error = new Error(e.message || 'Failed to fetch ')
            throw error
        }
    }
}
