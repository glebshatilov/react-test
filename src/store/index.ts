import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/index.js'

export default configureStore({
  reducer: {
    user: userReducer
  }
})
