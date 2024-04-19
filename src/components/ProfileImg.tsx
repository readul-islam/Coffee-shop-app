import { StyleSheet,  View ,Image} from 'react-native'
import React from 'react'
import { COLORS, SPACING } from '../theme/theme'

const ProfileImg = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image source={require('../assets/app_images/avatar.png')} style={styles.ImageStyle}/>
    </View>
  )
}


const styles = StyleSheet.create({
    ImageContainer:{
        width: SPACING.space_36,
        height: SPACING.space_36,
        borderRadius: SPACING.space_12,
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGreyHex,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
       
      
    },
    ImageStyle:{
        width: SPACING.space_36,
        height: SPACING.space_36,
    }
})
export default ProfileImg