import axios from "axios"

const config = {
    Api: {
        baseUri: 'http://www.omdbapi.com',
        apiKey: '82491215',
    }
}

export const axiosClient = axios.create({
    baseURL: config.Api.baseUri,
    params: {
        apikey: config.Api.apiKey,
    }
})

export default config