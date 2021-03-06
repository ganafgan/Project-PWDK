import React from 'react'
import { Image, StyleSheet, Text, View, Alert } from 'react-native'
import { ILNullPhoto, IconAddPhoto } from '../../assets'
import { Button, Header, Link, Gap, HeaderMain } from '../../components'
import { colors, fonts } from '../../utils'

const UploadPhoto = (props) => { 

    const onUploadBtn = () => {
        Alert.alert('photo uploaded')
    }

    return (
        <View style={styles.page}>
            <HeaderMain button={true} type='icon-only' title='Upload Photo' onPress={() => props.navigation.goBack()} style={styles.header} />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <Image source={ILNullPhoto} style={styles.avatar} />
                        <IconAddPhoto style={styles.addPhoto}/>
                    </View>
                    <Text style={styles.name}>{props.route.params.name}</Text>
                </View>
                <View>
                    <Button title='Upload and Continue' onPress={onUploadBtn} />
                    <Gap height={30} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent:'space-between',
        paddingBottom: 65
    }, 
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    } ,
    avatar: {
        width: 110,
        height: 110
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPhoto: {
        position: 'absolute',
        bottom: 9,
        right: 6
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary
    }
})
