// import vue from 'vue'
// import Vuex from 'vuex'
// import VuexPersist from 'vuex-persist'
// vue.use(Vuex)
// const vuexLocal = new VuexPersist({
//     storage: window.localStorage //可选，sessionStorage/indexDB
//   });
// const store = new Vuex.Store({
//     state: {
//         count: []
//     },
//     mutations: {
//         JOSN_LIST(state,data){
//           state.count.push(data)
//         },
//         ADD_FES(state,data) {
//             state.count.push(data)
//         }
//     },
//     plugins: [vuexLocal.plugin]
// })

// export default store
export default {
    // const vuexLocal = new VuexPersist({
//     storage: window.localStorage //可选，sessionStorage/indexDB
//   });
    namesapce: true,
    state: {
        count: []
    },
        mutations: {
        JOSN_LIST(state,data){
          state.count.push(data)
          return state
        },
        ADD_FES(state,data) {
            state.count.push(data)
            return state
        }
    },
}