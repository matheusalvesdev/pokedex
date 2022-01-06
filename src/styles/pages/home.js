import { StyleSheet } from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constants/index';

const styles = StyleSheet.create({
    backgroundImage: {
        width: SIZES.width,
        height: SIZES.height - 50,
        marginTop: SIZES.height - 1170,
        resizeMode: 'contain',
        opacity: 0.2,
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

    
    containerSearchInput: {
        width: SIZES.width - 50,
        height: SIZES.height - 710,
        backgroundColor: COLORS.background_default_input.normal,
        marginTop: SIZES.height - 740,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: SIZES.radius2
    },
    searchTextInput: {
        width: SIZES.width - 140,
        height: SIZES.height - 750,
        backgroundColor: COLORS.background_transparent.normal,
        fontSize: FONTS.body3.fontSize,
        lineHeight: FONTS.body3.lineHeight,
        color: COLORS.text_grey.normal
    },
    iconSearchInput: {
        width: SIZES.width - 365,
        height: SIZES.height - 745,
        marginRight: SIZES.width - 380,
        resizeMode: 'contain',
        opacity: 0.5,
    },


    flatListStyle: {
        marginTop: SIZES.height - 760
    },
    containerListItem: {
        width: SIZES.width - 50,
        height: SIZES.height - 660,
        backgroundColor: COLORS.background_type_grass.normal,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: SIZES.height - 745,
        borderRadius: SIZES.radius2,
    },
    containerViewMore: {
        width: SIZES.width - 50,
        height: SIZES.height - 730,
        backgroundColor: COLORS.background_transparent.normal,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.height - 745,
    },
    listItemBackgroundPokeball: {
        width: SIZES.width - 280,
        height: SIZES.height - 660,
        backgroundColor: COLORS.background_transparent.normal,
        resizeMode: 'contain',
        left: SIZES.width - 160,
        position: 'absolute'
    },
    listItemBackgroundPoints: {
        width: SIZES.width - 320,
        height: SIZES.height - 710,
        backgroundColor: COLORS.background_transparent.normal,
        resizeMode: 'contain',
        opacity: 0.3,
        left: SIZES.width - 300,
        top: SIZES.height - 785,
        position: 'absolute'
    },
    listItemInfo: {
        width: ((SIZES.width - 50) / 2) + 20,
        height: SIZES.height - 670,
        backgroundColor: COLORS.background_transparent.normal,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius2,
    },
    listItemInfoID: {
        width: ((SIZES.width - 50) / 2),
        backgroundColor: COLORS.background_transparent.normal,
    },
    listItemInfoName: {
        width: ((SIZES.width - 50) / 2),
        backgroundColor: COLORS.background_transparent.normal,
    },
    listItemInfoType: {
        width: ((SIZES.width - 50) / 2),
        height: SIZES.height - 745,
        backgroundColor: COLORS.background_transparent.normal,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInfoID: {
        fontSize: FONTS.body4.fontSize,
        lineHeight: FONTS.body4.lineHeight,
        color: COLORS.text_grey.normal,
        fontWeight: 'bold',
    },
    textInfoName: {
        fontSize: FONTS.h2.fontSize,
        lineHeight: FONTS.h2.lineHeight,
        color: COLORS.text_white.normal,
        fontWeight: 'bold',
    },
    listIconBadge: {
        width: ((SIZES.width - 50) / 2) - 118,
        height: SIZES.height - 753,
        resizeMode: 'contain',
        backgroundColor: COLORS.background_transparent.normal,
        marginRight: 4,
    },
    listItemImage: {
        width: ((SIZES.width - 50) / 2) - 50,
        height: SIZES.height - 670,
        backgroundColor: COLORS.background_transparent.normal,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius2,
    },
    listImage: {
        width: ((SIZES.width - 50) / 2) - 30,
        height: SIZES.height - 650,
        resizeMode: 'contain',
        backgroundColor: COLORS.background_transparent.normal,
        top: SIZES.height - 790,
    },
    buttonViewMore: {
        width: ((SIZES.width - 50) / 2),
        height: SIZES.height - 730,
        backgroundColor: COLORS.background_transparent.normal,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textViewMore: {
        fontSize: FONTS.h4.fontSize,
        lineHeight: FONTS.h4.lineHeight,
        color: COLORS.background_button_selected.normal,
        fontWeight: 'bold',
    }
});

export default styles;