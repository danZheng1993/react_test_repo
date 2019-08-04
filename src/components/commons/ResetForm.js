import React, { Component } from 'react'
import {
	StyleSheet,
	View,
} from 'react-native'
import UserInput from './UserInput'
import usernameImg from '../../images/username.png'

export default class LoginForm extends Component {
	render () {
		return (
			<View style={styles.container}>
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
	input: {
		marginTop: 1,
	}
})