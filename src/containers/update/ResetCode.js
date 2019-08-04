import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Logo from '../../components/commons/Logo'
import SendForm from '../../components/SendForm'
import Wallpaper from '../../components/commons/Wallpaper'
import SelfButton from '../../components/commons/SelfButton'
import Notification from '../../components/commons/Notification'
import Dimensions from 'Dimensions'
import { withNavigation } from 'react-navigation';

const DEVICE_WIDTH = Dimensions.get('window').width
const MARGIN = 40

class ResetCode extends Component {
	handleOnpress = () => {
		this.props.navigation.navigate('update')
	}
    render () {
		const text = 'Recovery code sent to your email address. Please use it to reset your password'
        return (
            <View style={styles.container} contentContainerStyle={{ flex: 1, height: '100%' }}>
                <Wallpaper>
                    <Logo />
					<Notification text={text} />
                    <SendForm />
                    <View style={styles.button}>
					    <SelfButton title={'Reset'} onPress={this.handleOnpress}/>
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
	},
	text: {

	}
})

export default withNavigation(ResetCode)