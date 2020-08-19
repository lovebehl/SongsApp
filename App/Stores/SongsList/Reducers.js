/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { SongsListTypes } from './Actions'

export const fetchSongsLoading = (state) => ({
  ...state,
  songsIsLoading: true,
  songsErrorMessage: null,
})

export const fetchSongsSuccess = (state, { songs }) => ({
  ...state,
  songs: songs,
  songsIsLoading: false,
  songsErrorMessage: null,
})

export const fetchSongsFailure = (state, { errorMessage }) => ({
  ...state,
  songs: {},
  songsIsLoading: false,
  songsErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [SongsListTypes.FETCH_SONGS_LOADING]: fetchSongsLoading,
  [SongsListTypes.FETCH_SONGS_SUCCESS]: fetchSongsSuccess,
  [SongsListTypes.FETCH_SONGS_FAILURE]: fetchSongsFailure,
})
