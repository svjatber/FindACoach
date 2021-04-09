export default {
    coaches(state) {
        return state.coaches
    },
    hasCoaches(state) {
        return !!state.coaches
    },
    isCoach(_, getters, _2, rootGetters) {
        return getters.coaches.some(c => c.id === rootGetters.userId)
    },
    shouldUpdate(state){
        if(!state.lastFetch){
            return false
        }
        console.log(state.lastFetch)
        const currentTimeStamp = new Date().getTime()
        console.log(currentTimeStamp)
        console.log((currentTimeStamp - state.lastFetch) / 1000)
        return (currentTimeStamp - state.lastFetch) / 1000 < 60
    }
}
