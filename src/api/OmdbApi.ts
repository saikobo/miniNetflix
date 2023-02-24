import { axiosClient } from "@/config";

export default class OmdbApi {
    findMovies() {
        return axiosClient.get('/', {
            params: {
                s: ''
            }
        })
    }

    searchMovies(searchTerm: string) {
        return axiosClient.get('/', {
            params: {
                s: searchTerm
            }
        })
    }

    findOneMovie(id: string) {
        return axiosClient.get('/', {
            params: {
                i: id
            }
        })
    }
} 

export interface Rating {
    Source: string;
    Value: string;
}

export interface Movie {
    imdbID: string;
    Title: string;
    Poster: string;
    Plot: string;
    Ratings: Rating[]
}