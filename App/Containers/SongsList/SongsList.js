import React from 'react'
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import SongsListActions from 'App/Stores/SongsList/Actions'
import Cards from '../../Components/Cards'
import HeaderView from '../../Components/HeaderView'
import styles from './styles'

class SongsList extends React.Component {
  constructor() {
    super()
    this.state = {
      onRefreshLoader: false,
      LoadingIndicator: false,
    }
  }

  componentDidMount() {
    this.props.fetchSongs()
    this.setState({ LoadingIndicator: true })

    setTimeout(() => {
      this.setState({ LoadingIndicator: false })
    }, 2000)
  }

  onRefreshFlatList = () => {
    this.setState({ onRefreshLoader: true })
    setTimeout(() => {
      this.setState({ onRefreshLoader: false })
    }, 2000)
  }

  renderFlatList = () => {
    let songsList = this.props.songs.SongsList.songs.results
    return (
      <FlatList
        data={songsList}
        extraData={songsList}
        onRefresh={() => this.onRefreshFlatList()}
        refreshing={this.state.onRefreshLoader}
        renderItem={(item) => (
          <Cards
            CardButton={() =>
              this.props.navigation.navigate('SongsDetail', {
                SongsDetail: item,
              })
            }
            uri={item.item.artworkUrl30}
            description={item.item.collectionName}
            Artist={item.item.artistName}
          />
        )}
      />
    )
  }

  render() {
    return (
      <View>
        <HeaderView HideBackButton={true} />
        {this.state.LoadingIndicator == true ? (
          <View style={styles.LoadingIndicator}>
            <ActivityIndicator />
            <Text>Please Wait</Text>
          </View>
        ) : (
          <View>{this.renderFlatList()}</View>
        )}
      </View>
    )
  }
}

SongsList.propTypes = {
  songs: PropTypes.object,
  songsIsLoading: PropTypes.bool,
  songsErrorMessage: PropTypes.string,
  fetchSongs: PropTypes.func,
}

const mapStateToProps = (state) => ({
  songs: state,
  results: state,
  // isLoading:
})

const mapDispatchToProps = (dispatch) => ({
  fetchSongs: () => dispatch(SongsListActions.fetchSongs()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsList)
