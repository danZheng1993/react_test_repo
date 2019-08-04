import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Logo from '../../components/commons/Logo'
import SignForm from '../../components/commons/SignForm'
import Wallpaper from '../../components/commons/Wallpaper'
import SignupSection from '../../components/SignupSection'
import SelfButton from '../../components/commons/SelfButton'
import Dimensions from 'Dimensions'

const DEVICE_WIDTH = Dimensions.get('window').width
const MARGIN = 40

class SignContainer extends Component {
    render () {
        const text = 'Already registered! Please login here'
        return (
            <View style={styles.container} contentContainerStyle={{ flex: 1, height: '100%' }}>
                <Wallpaper>
                    <Logo />
                    <SignForm />
                    <View style={styles.button}>
					    <SelfButton title={'Register'} />
				    </View>
                    <SignupSection text={text} target={'login'} name={'Login'} />
                </Wallpaper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    button: {
        width: DEVICE_WIDTH-MARGIN*2,
        marginLeft: MARGIN,
    }
})

export default SignContainer