import React, { Component } from 'react'
import {
	StyleSheet,
	View,
} from 'react-native'
import UserInput from './commons/UserInput'
import usernameImg from '../images/username.png'

export default class LoginForm extends Component {
	
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