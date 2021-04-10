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
        const currentTimeStamp = new Date().getTime()
        return (currentTimeStamp - state.lastFetch) / 1000 < 60
    }
}
