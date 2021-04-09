import axios from 'axios'
export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters['auth/userId']
        const coachData = {
            firstName: data.firstName,
            lastName: data.lastName,
            description: data.description,
            hourlyRate: data.rate,
            areas: data.areas
        }
        try {
            const token = context.rootGetters['auth/token']
            const response =  await axios.put(`https://vue3-a06ce-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=${token}`, coachData);
            console.log(response)
            context.commit('registerCoach', {
                ...coachData,
                id: userId
            })
        }catch (e) {
            const error = new Error(e.message || 'Failed to fetch ')
            throw error
        }


    },
    async loadCoaches(context, payload){
        console.log('2')
        console.log(!payload.refresh, context.getters.shouldUpdate)
        if(!payload.refresh && context.getters.shouldUpdate){
            return
        }
        try {
            const response =  await axios.get(`https://vue3-a06ce-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`);
            const coaches = []
            console.log(response)

            for(let elem in response.data){
                const coach = {
                    id: elem,
                    firstName: response.data[elem].firstName,
                    lastName: response.data[elem].lastName,
                    description: response.data[elem].description,
                    hourlyRate: response.data[elem].hourlyRate,
                    areas: response.data[elem].areas
                }
                coaches.push(coach)
            }


            context.commit('setCoaches', coaches)
            context.commit('setFetchTimestamp')
        }catch (e) {
            const error = new Error(e.message || 'Failed to fetch ')
            throw error
        }


    }
}


