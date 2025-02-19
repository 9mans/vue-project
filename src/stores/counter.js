
// 셋업 스토어 형식
// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'
//
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }
//
//   return { count, doubleCount, increment }
// })

// 옵션 스토어 형식
import {defineStore} from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => ({
      count: 0
    }),
    actions: {
      increment() {
        this.count++
      },
    },
    getters: {
      doubleCount: (state) => state.count * 2,
    },
  });