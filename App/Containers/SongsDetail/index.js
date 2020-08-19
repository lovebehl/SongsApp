import React from 'react'
import { Platform, Text, View,ScrollView, Button, ActivityIndicator, Image, FlatList } from 'react-native'
import SoundPlayer from 'react-native-sound-player'
import CardDetails from '../../Components/CardDetails'
import HeaderView from '../../Components/HeaderView'
/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

var _onFinishedPlayingSubscription = null
var _onFinishedLoadingSubscription = null
var _onFinishedLoadingFileSubscription = null
var _onFinishedLoadingURLSubscription = null

class SongsDetail extends React.Component {
  
    componentDidMount() {
    _onFinishedPlayingSubscription = SoundPlayer.addEventListener(
      'FinishedPlaying',
      ({ success }) => {
        console.log('finished playing', success)
      }
    )
    _onFinishedLoadingSubscription = SoundPlayer.addEventListener(
      'FinishedLoading',
      ({ success }) => {
        console.log('finished loading', success)
      }
    )
    _onFinishedLoadingFileSubscription = SoundPlayer.addEventListener(
      'FinishedLoadingFile',
      ({ success, name, type }) => {
        console.log('finished loading file', success, name, type)
      }
    )
    _onFinishedLoadingURLSubscription = SoundPlayer.addEventListener(
      'FinishedLoadingURL',
      ({ success, url }) => {
        console.log('finished loading url', success, url)
      }
    )
    console.log(this.props.navigation.state.params.SongsDetail, 'collectionName')
  }

  componentWillUnmount() {
    _onFinishedPlayingSubscription.remove()
    _onFinishedLoadingSubscription.remove()
    _onFinishedLoadingURLSubscription.remove()
    _onFinishedLoadingFileSubscription.remove()
  }

  playSong = (item) => {
    try {
      SoundPlayer.playUrl(item)
    } catch (e) {
      console.log(`cannot play the sound file`, e)
    }
  }

  render() {
    let data = this.props.navigation.state.params.SongsDetail
    return (
      <View>
        <HeaderView BackButton={() => this.props.navigation.goBack()} />
        <ScrollView>
          <CardDetails
            uri={data.item.artworkUrl100}
            CollectionName={data.item.collectionName}
            ArtistName={data.item.artistName}
            PlayButton={() => this.playSong(data.item.previewUrl)}
          />
        </ScrollView>
      </View>
    )
  }
}


export default SongsDetail;
