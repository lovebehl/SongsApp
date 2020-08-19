import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Dimensions, Image } from 'react-native'

export default function CardDetails(props) {
  return (
    <View style={styles.Container}>
      <View>
        <Image
          source={{ uri: props.uri }}
          style={{ height: 400, width: '100%', marginBottom: 30 }}
        />
      </View>
      <View style={{alignItems:'center'}}>
        <View style={{ marginBottom: 30, marginHorizontal: 10 }}>
          <Text style={styles.TextColor}>Collection : {props.CollectionName}</Text>
        </View>
        <View style={{ marginBottom: 30, marginHorizontal: 10 }}>
          <Text style={styles.TextColor}>Artist Name : {props.ArtistName}</Text>
        </View>
        <TouchableOpacity
          style={styles.PlayButton}
          onPress={()=>props.PlayButton()}
        >
          <Text style={styles.TextColor}>Play Song</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
