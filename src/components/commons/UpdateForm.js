import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Image
} from 'react-native'
import UserInput from './UserInput'
import passwordImg from '../../images/password.png'
import eyeImg from '../../images/eye_black.png'

export default class LoginForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showPass: true,
			press: false
		}
	}
	showPass = () => {
		this.state.press === false ? this.setState({showPass: false, press: true}) : this.setState({showPass: true, press: false})
	}
	render () {
		return (
			<View style={styles.container}>
				<UserInput
					source={passwordImg}
					secureTextEntry={this.state.showPass}
					placeholder='New Password'
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false}
					autoCompleteType={'password'}
				/>
				<UserInput
					source={passwordImg}
					secureTextEntry={this.state.showPass}
					placeholder='Confrim Password'
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false}
					autoCompleteType={'password'}
				/>
				<TouchableOpacity
					activeOpacity={0.7}
					style={styles.btnEye}
					onPress={this.showPass}
				>
					<Image source={eyeImg} style={styles.iconEye} />
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	btnEye: {
		position: 'absolute',
		top: 55,
		right: 28
	},
	iconEye: {
		width: 25,
		height: 25,
		tintColor: 'rgba(0,0,0,0.2)'
	},
	input: {
		marginTop: 1,
	}
})