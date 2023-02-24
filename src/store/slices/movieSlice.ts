import { createSlice } from "@reduxjs/toolkit";
import { Movie } from '@/api/OmdbApi'

export interface MovieState {
    movies: Record<string, Movie>
}

const initialState = {
    movies: {}
}

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovie(state, action) {
            return {movies: {...state.movies, [action.payload.imdbID]: action.payload}}
        }
    }
})

export const { addMovie } = movieSlice.actions;

export default movieSlice.reducer;