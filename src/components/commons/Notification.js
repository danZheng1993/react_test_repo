import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	Text,
} from 'react-native'

export default class Notification extends Component {
	render () {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>{this.props.text}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	text: {
		
	}
})