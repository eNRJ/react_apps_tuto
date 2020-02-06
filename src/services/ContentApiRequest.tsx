import { URL_PORCASTS_LATEST, NRJ_ID, BASE_URL } from '../constants/ContentApi'
import Podcast from '../models/Podcast'

const runRequest = (url:string, data:{ [key: string]:(string|number) }) => {
  let queryString:string = Object.keys(data).map(key => key + '=' + data[key]).join('&');
  let separator = url.indexOf('?') < 0 ? '?' : '&'

  return fetch(BASE_URL + url + separator + queryString)
    .then(res => {
      return res.text()
    });
}

const get = (url:string, data:{ [key: string]:(string|number) }): any => {

  return new Promise((resolve: any) => {
    runRequest(url, data)
      .then(
        (result: string) => {
          let podcasts = JSON.parse(result)
          resolve(podcasts)
        },
        (error) => {
          console.error('Error on content api request, ', error)
        }
      )
  })
}

export const getLastPodcasts = (limit:number = 10 ):Promise<Podcast[]> => {
  let url = URL_PORCASTS_LATEST.replace(':idSite', NRJ_ID+'')

  return get(url, { limit }) as Promise<Podcast[]>
}
