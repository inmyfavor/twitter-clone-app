import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checkMark: 0,
    modalDisplay: 'none',
    tweet: '',
    likesCounter: 0,
    likeIcon: 'like',
    commentsCounter: 0,
};

const tweetsSlice = createSlice({
    name: 'tweets',
    initialState,
    reducers: {
        setCheckMark: (state, action) => {
            state.checkMark = action.payload;
        },
        setModalDisplay: (state, action) => {
            state.modalDisplay = action.payload;
        },
        setTweet: (state, action) => {
            state.modalDisplay = action.payload;
        },
        setLikes: (state) => {
            if (state.likeIcon === 'like') {
                state.likeIcon = 'liked';
                state.likesCounter += 1;
            }
            else if (state.likeIcon === 'liked') {
                state.likeIcon = 'like';
                state.likesCounter -= 1;
            }
        },
    },
});

export const { setCheckMark, setModalDisplay, setTweet, setLikes } = tweetsSlice.actions;

export default tweetsSlice.reducer;