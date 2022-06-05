import {StyleSheet} from 'react-native';
import {FONT_LATO_BOLD_ITALIC, FONT_LATO_REGULAR} from 'constants/fonts';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		padding: 16,
	},
	textHello: {
		fontSize: 42,
		fontFamily: FONT_LATO_BOLD_ITALIC,
	},
	textWelcome: {
		fontSize: 16,
		marginTop: 16,
		textAlign: 'center',
		fontFamily: FONT_LATO_REGULAR,
	},
});

export default styles;
