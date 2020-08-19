
import { Dimensions, Image } from 'react-native'
const windowHeight = Dimensions.get('window').height
const styles = {
  TextColor: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  Container: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'black',
    height: windowHeight,
    // alignItems: 'center',
    // justifyContent:'center'
  },
  PlayButton: {
    width: '80%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
}

export default styles;
