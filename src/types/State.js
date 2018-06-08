export type State = {
  +movies: {
    +data: Array<{
      +genres: Array<string>,
      +id: number,
      +poster_path: ?string,
      +release_date: string,
      +title: string
    }>,
    +total: number
  },
  +fetching: boolean,
  +sortBy: string,
  +searchBy: string,
  +selectedMovie: {
    +genres: Array<string>,
    +overview: string,
    +poster_path: ?string,
    +release_date: string,
    +runtime: ?number,
    +tagline: string,
    +title: string,
    +vote_average: number
  },
  +errors: Array<Error>
}
