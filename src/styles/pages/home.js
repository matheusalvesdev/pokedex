import { StyleSheet } from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constants/index';

const styles = StyleSheet.create({
    backgroundImage: {
        width: SIZES.width,
        height: SIZES.height - 50,
        marginTop: SIZES.height - 1170,
        resizeMode: 'contain',
        opacity: 0.03,
        position: 'absolute'
    },


    containerFilter: {
      width: SIZES.width - 50,
      backgroundColor: COLORS.background_transparent.normal,
      alignItems: 'flex-end'
    },
    viewFilters: {
        width: SIZES.width - 250,
        height: SIZES.height - 700,
        backgroundColor: COLORS.background_transparent.normal,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonFilterGeneration: {
        height: SIZES.height - 725,
        backgroundColor: COLORS.background_transparent.normal,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconsFilters: {
        width: SIZES.width - 365,
        height: SIZES.height - 745,
        resizeMode: 'contain',
    },


    
    containerHeaderInfo: {
        width: SIZES.width - 50,
        backgroundColor: COLORS.background_transparent.normal,
        alignItems: 'flex-start',
        marginTop: SIZES.height - 760
    },
    textHeaderInfoTitle: {
        fontSize: FONTS.h1.fontSize,
        color: COLORS.text_black.normal,
        lineHeight: FONTS.h1.lineHeight,
        fontWeight: 'bold',
    },
    textHeaderInfoSubTitle: {
        fontSize: FONTS.h4.fontSize,
        lineHeight: FONTS.h4.lineHeight,
        color: COLORS.text_grey.normal,
        marginTop: SIZES.height - 760,
        width: SIZES.width - 100,
    },
});

export default styles;