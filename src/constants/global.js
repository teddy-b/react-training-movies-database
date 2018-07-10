/* @flow */

export const API: string = 'http://react-cdp-api.herokuapp.com/movies'

export const GENRES: string[] = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
  'Music',
  'Mystery',
  'Romance',
  'Science Fiction',
  'Thriller',
  'TV Movie',
  'War',
  'Western'
]

export const ITEMS_TO_SHOW: number = 24

export const SEARCH_BY: { [prop: string]: string } = {
  title: 'title',
  genre: 'genres'
}

export const SORT_BY: { [prop: string]: string } = {
  releaseDate: 'release_date',
  rating: 'vote_average'
}

export const SORT_ORDER: { [prop: string]: string } = {
  asc: 'asc',
  desc: 'desc'
}
