import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productApi } from './services/rtk-query'

export const store = configureStore({
  reducer: {
    counter : counterSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

setupListeners(store.dispatch)

