import React, { useState } from 'react'
import { TouchableOpacity, Text, Image, View, SafeAreaView } from 'react-native'
import styles from './styles'

export default function HeaderView(props) {
  return (
    <SafeAreaView style={styles.headerStyle}>
      {props.HideBackButton == true ? (
        <View style={{ flex: 0.2 }} />
      ) : (
        <TouchableOpacity style={{ flex: 0.2 }} onPress={() => props.BackButton()}>
          <Text style={styles.TextColor}> Back </Text>
        </TouchableOpacity>
      )}

      <View>
        <Text style={styles.TextColor}>Songs</Text>
      </View>
      <View style={{ flex: 0.2 }} />
    </SafeAreaView>
  )
}
