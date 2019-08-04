import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dimensions from 'Dimensions'
import { StyleSheet, View, Text } from 'react-native'
import { withNavigation } from 'react-navigation';
import SelfButton from './commons/SelfButton'

class SignupSection extends Component {
	handlePress = () => {
		const { target } = this.props
		this.props.navigation.navigate(target);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>{this.props.text}</Text>
				<View style={{width: 200}}>
					<SelfButton title={this.props.name} onPress={this.handlePress} />
				</View>
			</View>
		)
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
	container: {
		width: DEVICE_WIDTH,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 15,
		marginBottom: 20
	},
	text: {
		color: 'white',
		fontSize: 15,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 8
	},
	button: {
		width: DEVICE_WIDTH-50,
	}
})

export default withNavigation(SignupSection);