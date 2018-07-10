/* @flow */

import type {
  FetchMoviesStartAction,
  FetchMoviesSuccessAction,
  FetchMoviesFailAction,
  FetchSingleMovieStartAction,
  FetchSingleMovieSuccessAction,
  FetchSingleMovieFailAction,
  MoviesData,
  SingleMovieData
} from './'

export type FetchMoviesAction =
  | FetchMoviesStartAction
  | FetchMoviesSuccessAction
  | FetchMoviesFailAction

export type FetchMoviesDispatch = (
  action: FetchMoviesAction
  | (dispatch: FetchMoviesDispatch) => MoviesData | Error | null
  | Promise<FetchMoviesAction>
  | Array<FetchMoviesAction>
) => MoviesData | Error | null

export type FetchMoviesThunkAction = (dispatch: FetchMoviesDispatch) => MoviesData | Error | null

export type FetchSingleMovieAction =
  | FetchSingleMovieStartAction
  | FetchSingleMovieSuccessAction
  | FetchSingleMovieFailAction

export type FetchSingleMovieDispatch = (
  action: FetchSingleMovieAction
  | (dispatch: FetchSingleMovieDispatch | FetchMoviesAction) =>
      SingleMovieData | MoviesData | Error | null
  | Promise<FetchSingleMovieAction>
  | Array<FetchSingleMovieAction>
) => SingleMovieData | Error | null

export type FetchSingleMovieThunkAction = (
  dispatch: FetchSingleMovieDispatch
) => SingleMovieData | Error | null

export type ThunkAction = FetchMoviesAction | FetchSingleMovieAction
