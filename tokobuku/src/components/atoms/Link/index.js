import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils'

const Link = ({title, size, align, onPress}) => {
    return (
        <View>
            <Text style={styles.text(size, align)} onPress={onPress} >{title}</Text>
        </View>
    )
}

export default Link

const styles = StyleSheet.create({
    text: (size, align) => ({
        fontSize: size,
        color: colors.text.secondary,
        fontFamily: 'Nunito-Regular',
        textDecorationLine: 'underline',
        textAlign : align
    })
})
