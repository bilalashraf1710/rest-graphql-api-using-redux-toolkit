import { configureStore } from '@reduxjs/toolkit'
import { restApi } from './slices/restApi'
import { gqlApi } from './slices/gqlApi'

const store = configureStore({
  reducer: {
    [restApi.reducerPath]: restApi.reducer,
    [gqlApi.reducerPath]: gqlApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      restApi.middleware,
      gqlApi.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
