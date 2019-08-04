import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Image
} from 'react-native'
import UserInput from './UserInput'
import usernameImg from '../../images/username.png'
import passwordImg from '../../images/password.png'
import eyeImg from '../../images/eye_black.png'

export default class SignForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showPass: true,
			press: false,
			conshowPass: true,
			conpress: false,
		}
	}
	showPass = () => {
		this.state.press === false ? this.setState({showPass: false, press: true}) : this.setState({showPass: true, press: false})
	}
	confirmShowPass = () => {
		this.state.conpress === false ? this.setState({conshowPass: false, conpress: true}) : this.setState({conshowPass: true, conpress: false})
	}
	render () {
		return (
			<View style={styles.container}>
				<UserInput
					source={usernameImg}
					placeholder="Email"
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false}
					styple={styles.input}
					autoCompleteType={'email'}
				/>
				<UserInput
					source={usernameImg}
					placeholder='Username'
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false}
					style={styles.input}
					autoCompleteType={'username'}
				/>
				<UserInput
					source={passwordImg}
					secureTextEntry={this.state.showPass}
					placeholder='password'
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false}
					autoCompleteType={'password'}
				/>
				<UserInput
					source={passwordImg}
					secureTextEntry={this.state.conshowPass}
					placeholder='Confirm Password'
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
				<TouchableOpacity
					activeOpacity={0.7}
					style={styles.rebtnEye}
					onPress={this.confirmShowPass}
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
		top: 100,
		right: 28
	},
	rebtnEye: {
		position: 'absolute',
		top: 145,
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