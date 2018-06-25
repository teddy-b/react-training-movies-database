/* @flow */

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import type { Dispatch } from 'redux'

import { selectMovie } from '../../actions'
import Details from '../../components/App/Details'

import type { MoviesAction, MoviesData, SingleMovieData, State } from '../../types'

type StateToProps = {
  count: number,
  fetching: boolean,
  movies: MoviesData,
  selectedMovie: SingleMovieData
}

type DispatchToProps = {
  onSelectMovie: (id: number) => void
}

const mapStateToProps = (state: State): StateToProps => ({
  count: state.movies.toJS().total,
  fetching: state.fetching,
  movies: state.movies.toJS().data,
  selectedMovie: state.selectedMovie.toJS()
})

const mapDispatchToProps = (dispatch: Dispatch<MoviesAction>): DispatchToProps => ({
  onSelectMovie(movieId: number) {
    dispatch(selectMovie(movieId))
  }
})

const ConnectedDetails = withRouter(connect(mapStateToProps, mapDispatchToProps)(Details))

export default ConnectedDetails
