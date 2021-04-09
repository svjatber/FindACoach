export default {
    addRequest(state, payload){
        console.log('pay2', payload)
        state.requests.push(payload)
    },
    setRequests(state, payload) {
        console.log(payload)
        state.requests = payload
    }
}
