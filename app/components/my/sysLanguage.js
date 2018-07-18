import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import { I18n } from '../../../language/i18n';
import DeviceInfo from 'react-native-device-info';

class ListFun extends Component {
	render() {
		return (
			<TouchableHighlight underlayColor={'transparent'} onPress={this.props.onPress}>
				<View style={styles.fun}>
					<Text style={styles.fun_text}>{this.props.fun_name}</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

class SysLanguage extends Component {
	constructor(props) {
		super(props);
		this.navigate = this.props.navigation.navigate;
		this.state = {
			localeLanguage: null,
			isSelected: true
		};
	}

	static navigationOptions = {
		headerTitle: '多语言'
	};

	componentWillMount() {
		// let locale = DeviceInfo.getDeviceLocale();
	}

	refreshLanguage = (index) => {
		switch (index) {
			case 0:
				I18n.locale = 'en-US';
				storage.save({
					key: 'localLanguage',
					data: {
						localLanguage: 'en-US'
					},
					expires: null
				});
				break;
			case 1:
				I18n.locale = 'zh-Hans-US';
				storage.save({
					key: 'localLanguage',
					data: {
						localLanguage: 'zh-Hans-US'
					},
					expires: null
				});
				break;
		}

		this.setState({
			localeLanguage: I18n.locale
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<ListFun fun_name={I18n.t('my.language.changeToEnglish')} onPress={() => this.refreshLanguage(0)} />
				<ListFun fun_name={I18n.t('my.language.changeToChinese')} onPress={() => this.refreshLanguage(1)} />
			</View>
		);
	}
}

export default withNavigation(SysLanguage);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: '#fff'
	},
	fun: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: '#e6e0df'
	},
	fun_text: {
		color: '#000'
	}
});
