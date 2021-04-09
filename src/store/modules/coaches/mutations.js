export default {
    registerCoach(state, payload){
        state.coaches.push(payload)
    },
    setCoaches(state, payload){
        console.log('3')
        state.coaches = payload
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime()
    }
}
