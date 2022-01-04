import { StyleSheet } from 'react-native';
import { SIZES } from '../constants/index';

const styles = StyleSheet.create({
    container: {
      width: SIZES.width,
      height: SIZES.height,
      marginTop: SIZES.statusBar,
      backgroundColor: 'transparent',
      alignItems: 'center',
    },
});

export default styles;