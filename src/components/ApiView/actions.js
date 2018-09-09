
export const GET_DATA = 'GET_DATA'
export const GET_GIFY = 'GET_GIFY'

const MapApi = {
    drupal: 'https://www.drupal.org/api-d7/node.json?type=book',
    gify: 'https://api.giphy.com/v1/gifs/search?api_key=9RenauXmxhXbd7i4ExJa017mUMk728vp&q=cat&limit=25&offset=0&rating=G&lang=ru',
    bbc: 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2c5c8ff395b74f1690a505a2bef1f7ff',
    nyt: 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=f54d4a57a6754e069c71e4f337c172f4',
    anime: 'https://api.jikan.moe/v3/top/anime'
}

export const getData = (value) => {
    return {
        type: GET_DATA,
        callAPI: MapApi[value],
        value: [value]
    }
}
