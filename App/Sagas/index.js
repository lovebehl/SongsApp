import { takeLatest, all } from 'redux-saga/effects'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { SongsListTypes } from 'App/Stores/SongsList/Actions'
import { startup } from './StartupSaga'
import { fetchSongs } from './SongsListSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(SongsListTypes.FETCH_SONGS, fetchSongs),
  ])
}
