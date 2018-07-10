/* @flow */

export type MovieItemData = {
  genres: Array<string>,
  id: number,
  poster_path: ?string,
  release_date: string,
  title: string
}

export type MoviesData = Array<MovieItemData>

export type MoviesResponse = {
  data: MoviesData,
  total: number
}
