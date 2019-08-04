import React, { Component } from 'react'
import Dimensions from 'Dimensions'
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native'
import SelfButton from './SelfButton'
import { withNavigation } from 'react-navigation';

const DEVICE_WIDTH = Dimensions.get('window').width
const MARGIN = 40

class ButtonSubmit extends Component {
	handleonPress = () => {
		this.props.navigation.navigate('sendcode')
	}
	render () {
		return (
			<View style={styles.container}>
				<View style={styles.button}>
					<SelfButton title={'LOGIN'} />
				</View>
				<View style={styles.forget}>
					<TouchableOpacity
						onPress={this.handleonPress}
					>
						<Text style={styles.text}>Forget Password</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginTop: 10,
	},
	button: {
		width: DEVICE_WIDTH / 2-MARGIN,
		marginLeft: MARGIN,
		lineHeight: 20,
		borderRadius: 20
	},
	forget: {
		width: DEVICE_WIDTH / 2 - MARGIN,
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 20
	},
	text: {
		fontSize: 16,
		color: 'white'
	}
})

export default withNavigation(ButtonSubmit)