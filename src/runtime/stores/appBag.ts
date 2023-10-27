import {defineStore} from "pinia";

export const useAppBag = defineStore('appBag', {
    state: () => ({
        n: 2,
        incrementedTimes: 0,
        decrementedTimes: 0,
    }),
    getters: {
        double: (state) => state.n * 2,
    },
    actions: {
        increment() {
            this.incrementedTimes++
        },
        changeMe() {
            console.log('change me to test HMR')
        },
    },
})
