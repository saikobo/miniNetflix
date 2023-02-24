import axios from "axios"
import OmdbApi from '@/api/OmdbApi'

const config = {
    Api: {
        baseUri: 'https://www.omdbapi.com',
        apiKey: '82491215',
    }
}

export const axiosClient = axios.create({
    baseURL: config.Api.baseUri,
    params: {
        apikey: config.Api.apiKey,
    }
})

export const omdbApiClient = new OmdbApi()

export default config