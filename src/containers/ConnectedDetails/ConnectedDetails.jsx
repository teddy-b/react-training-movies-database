import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { selectMovie } from '../../actions'
import Details from '../../components/App/Details'

const mapStateToProps = state => ({
  count: state.movies.toJS().total,
  fetching: state.fetching,
  movies: state.movies.toJS().data,
  selectedMovie: state.selectedMovie.toJS()
})

const mapDispatchToProps = dispatch => ({
  onSelectMovie(movieId) {
    dispatch(selectMovie(movieId))
  }
})

const ConnectedDetails = withRouter(connect(mapStateToProps, mapDispatchToProps)(Details))

export default ConnectedDetails
