import { put, call } from 'redux-saga/effects'
import SongsListActions from 'App/Stores/SongsList/Actions'
import { SongsListService } from 'App/Services/SongsListService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchSongs() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(SongsListActions.fetchSongsLoading())

  // Fetch user informations from an API
  const user = yield call(SongsListService.fetchSongs)
  if (user) {
    yield put(SongsListActions.fetchSongsSuccess(user))
  } else {
    yield put(
      SongsListActions.fetchSongsFailure('There was an error while fetching user informations.')
    )
  }
}
