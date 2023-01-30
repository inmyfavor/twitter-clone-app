import { configureStore } from "@reduxjs/toolkit";
import tweetsReducer from './twitterSlice.js'

export default configureStore({
    reducer: {
        tweets: tweetsReducer,
    }
})