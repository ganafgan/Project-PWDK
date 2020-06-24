import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ILWomen, ILNullPhoto } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../atoms'

const Profile = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.borderProfile}>
                <TouchableOpacity onPress={props.navigation}>
                    <Image source={props.image} style={styles.img}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.name}>{props.username}</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    borderProfile: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: colors.border,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 110,
        height: 110,
        borderRadius: 110/2,
        
    },
    name: {
        fontSize: 20,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        marginTop: 20
    }
})
