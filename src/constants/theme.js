import { Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
    type_bug: { normal: '#8CB230', opacity: '' },
    type_dark: { normal: '#58575F', opacity: '' },
    type_dragon: { normal: '#0F6AC0', opacity: '' },
    type_eletric: { normal: '#EED535', opacity: '' },
    type_fairy: { normal: '#ED6EC7', opacity: '' },
    type_fighting: { normal: '#D04164', opacity: '' },
    type_fire: { normal: '#FD7D24', opacity: '' },
    type_flying: { normal: '#748FC9', opacity: '' },
    type_ghost: { normal: '#556AAE', opacity: '' },
    type_grass: { normal: '#62B957', opacity: '' },
    type_ground: { normal: '#DD7748', opacity: '' },
    type_ice: { normal: '#61CEC0', opacity: '' },
    type_normal: { normal: '#9DA0AA', opacity: '' },
    type_poison: { normal: '#A552CC', opacity: '' },
    type_psychic: { normal: '#EA5D60', opacity: '' },
    type_rock: { normal: '#BAAB82', opacity: '' },
    type_steel: { normal: '#417D9A', opacity: '' },
    type_water: { normal: '#4A90DA', opacity: '' },

    background_type_bug: { normal: '#8BD674', opacity: '' },
    background_type_dark: { normal: '#6F6E78', opacity: '' },
    background_type_dragon: { normal: '#7383B9', opacity: '' },
    background_type_eletric: { normal: '#F2CB55', opacity: '' },
    background_type_fairy: { normal: '#EBA8C3', opacity: '' },
    background_type_fighting: { normal: '#EB4971', opacity: '' },
    background_type_fire: { normal: '#FFA756', opacity: '' },
    background_type_flying: { normal: '#83A2E3', opacity: '' },
    background_type_ghost: { normal: '#8571BE', opacity: '' },
    background_type_grass: { normal: '#8BBE8A', opacity: '' },
    background_type_ground: { normal: '#F78551', opacity: '' },
    background_type_ice: { normal: '#91D8DF', opacity: '' },
    background_type_normal: { normal: '#B5B9C4', opacity: '' },
    background_type_poison: { normal: '#9F6E97', opacity: '' },
    background_type_psychic: { normal: '#FF6568', opacity: '' },
    background_type_rock: { normal: '#D4C294', opacity: '' },
    background_type_steel: { normal: '#4C91B2', opacity: '' },
    background_type_water: { normal: '#58ABF6', opacity: '' },

    background_transparent: { normal: 'transparent', opacity: '' },
    background_white: { normal: '#FFFFFF', opacity: '' },
    background_default_input: { normal: '#F2F2F2', opacity: '' },
    background_pressed_input: { normal: '#E2E2E2', opacity: '' },
    background_button_selected: { normal: '#EA5D60', opacity: '' },
    background_button_unselected: { normal: '#F2F2F2', opacity: '' },
    background_modal: { normal: '#00000025', opacity: '' },
    
    gradient_vector: { normal: '#FFFFFF', opacity: '#FFFFFF' },
    gradient_pokeball: { normal: '#F5F5F5', opacity: '#FFFFFF' },
    gradient_vector_grey: { normal: '#E5E5E5', opacity: '#F5F5F5' },
    gradient_pokeball_grey: { normal: '#ECECEC', opacity: '#F5F5F5' },
    gradient_vector_white: { normal: '#FFFFFF', opacity: '#FFFFFF' },
    gradient_pokeball_white: { normal: '#FFFFFF', opacity: '#FFFFFF' },
    gradient_pokemon_name: { normal: '#FFFFFF', opacity: '#FFFFFF' },
    gradient_pokemon_circle: { normal: '#FFFFFF', opacity: '#FFFFFF' },

    text_white: { normal: '#FFFFFF', opacity: '' },
    text_black: { normal: '#17171B', opacity: '' },
    text_grey: { normal: '#747476', opacity: '' },
    text_number: { normal: '#747476', opacity: '' },

    height_short: { normal: '#FFC5E6', opacity: '' },
    height_medium: { normal: '#AEBFD7', opacity: '' },
    height_tall: { normal: '#AAACB8', opacity: '' },

    weight_light: { normal: '#99CD7C', opacity: '' },
    weight_normal: { normal: '#57B2DC', opacity: '' },
    weight_heavy: { normal: '#5A92A5', opacity: '' },
};

export const SIZES = {
    // Tamanhos globais
    base: 8,
    font: 14,
    radius: 30,
    radius2: 15,
    padding: 10,
    padding2: 12,

    // Tamanhos de fontes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // Dimensões
    width,
    height,
    statusBar: StatusBar.currentHeight
};

export const FONTS = {
    largeTitle: { fontFamily: 'Roboto-Regular', fontSize: SIZES.largeTitle, lineHeight: 38 },
    h1: { fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = {};

export default appTheme;