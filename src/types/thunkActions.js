import {
  FetchMoviesStartAction,
  FetchMoviesSuccessAction,
  FetchMoviesFailAction,
  FetchSingleMovieStartAction,
  FetchSingleMovieSuccessAction,
  FetchSingleMovieFailAction
} from './actions'

export type Action =
  | FetchMoviesStartAction
  | FetchMoviesSuccessAction
  | FetchMoviesFailAction
  | FetchSingleMovieStartAction
  | FetchSingleMovieSuccessAction
  | FetchSingleMovieFailAction

export type PromiseAction = Promise<Action>;

export type Dispatch = (
  action: Action | (dispatch: Dispatch) => any | PromiseAction | Array<Action>
) => any

export type ThunkAction = (dispatch: Dispatch) => any
