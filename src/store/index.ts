import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from '../store/reducers/carrinho'
import favoritarReducer from '../store/reducers/favoritar'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritar: favoritarReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
