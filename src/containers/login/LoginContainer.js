import React, { Component } from 'react'
import { View, StyleSheet, } from 'react-native'
import Logo from '../../components/commons/Logo'
import LoginForm from '../../components/commons/LoginForm'
import Wallpaper from '../../components/commons/Wallpaper'
import ButtonSubmit from '../../components/commons/ButtonSubmit'
import SignupSection from '../../components/SignupSection'

class LoginContainer extends Component {
    render () {
        const text = 'Not registered already? Please register over here'
        return (
            <View style={styles.container} contentContainerStyle={{ flex: 1, height: '100%' }}>
                <Wallpaper>
                    <Logo />
                    <LoginForm />
                    <ButtonSubmit />
                    <SignupSection text={text} target={'sign'} name={'Register'} />
                </Wallpaper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
})

export default LoginContainer