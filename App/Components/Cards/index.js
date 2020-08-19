import React, { useState } from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import styles from './styles'

export default function Cards(props) {
  // const [buttonText, setButtonText] = useState('Click me, please')

  return (
    <TouchableOpacity onPress={() => props.CardButton()}>
      <View style={styles.Container}>
        <View style={{ flex: 0.4, marginLeft: 10 }}>
          <Image
            source={{
              uri: props.uri,
            }}
            style={styles.ImageStyle}
          />
        </View>
        <View style={{ flex: 0.6,marginRight: 10 }}>
          <Text style={styles.TextStyles}>{props.description}</Text>
          <Text style={styles.TextStyles}>Artist Name : {props.Artist}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}



