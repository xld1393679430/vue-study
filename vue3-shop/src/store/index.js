import { createStore } from 'vuex'

export default createStore({
    state: {
        name: 'vue3'
    },
    mutations: {
        changeName(state, payload) {
            state.name = payload
        }
    },
    actions: {
        changeName(ctx, payload) {
            ctx.commit('changeName', payload)
        }
    },
    modules: {},
})