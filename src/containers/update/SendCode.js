import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Logo from '../../components/commons/Logo'
import SendForm from '../../components/SendForm'
import Wallpaper from '../../components/commons/Wallpaper'
import SelfButton from '../../components/commons/SelfButton'
import Dimensions from 'Dimensions'
import { withNavigation } from 'react-navigation';

const DEVICE_WIDTH = Dimensions.get('window').width
const MARGIN = 40

class SendCode extends Component {
	handleOnpress = () => {
		this.props.navigation.navigate('resetcode')
	}
    render () {
        return (
            <View style={styles.container} contentContainerStyle={{ flex: 1, height: '100%' }}>
                <Wallpaper>
                    <Logo />
                    <SendForm />
                    <View style={styles.button}>
					    <SelfButton title={'Send Code'} onPress={this.handleOnpress}/>
				    </View>
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
		marginBottom: 30
    }
})

export default withNavigation(SendCode)