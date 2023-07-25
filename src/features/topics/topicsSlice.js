import { createSlice } from '@reduxjs/toolkit'

// Should be empty object - see step 6
const initialState = {        
    topics: {
        '123': {
            id: '123',
            name: 'example topic',
            icon: 'icon url',
            quizIds: ['456']
        }
    }
}


const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopic: {
            reducer(state, action) {
                state.topics.push(action.payload)
            }                
        }
    }
})

export default topicsSlice.reducer