import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../../api/PokemonApi';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
    const response = await axiosInstance.get('cards?q=name:gardevoir');
    return response.data.data;
});

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cards = action.payload;
            })
            .addCase(fetchCards.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default cardsSlice.reducer;
