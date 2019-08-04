import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class SelfButton extends Component {
	render () {
		const { onPress } = this.props
		return (
			<TouchableOpacity
				style={styles.button}
				onPress={onPress}
			>
				<Text style={styles.text}>{this.props.title}</Text>
			</TouchableOpacity>
		)
	}
}

SelfButton.propTypes = {
	title: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#F035E0',
		height: 35,
		borderRadius: 20,
		zIndex: 99,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
		fontSize: 20
	}
})