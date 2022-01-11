import { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, FlatList, ImageBackground } from 'react-native';

import stylesPokemonInfo from '../styles/pages/pokemonInfo';
import stylesApp from '../styles/app';

import { ICONS, IMAGES, COLORS } from '../constants/index';
import { apiListPokemonsLimitAndOffset, apiObjectPokemonIdOrName } from '../components/apiCalls';

function HeaderTitle() {
    return (
        <View style={stylesHome.containerHeaderInfo}>
            <Text style={stylesHome.textHeaderInfoTitle}>
                Pokédex
            </Text>
            <Text numberOfLines={3} style={stylesHome.textHeaderInfoSubTitle}>
                Search for Pokémon by name or using the National Pokédex number.
            </Text>
        </View>
    )
}

export default function PokemonInfo() {
    const [loadPage, setLoadPage] = useState(false);

    useEffect(async() => {
        setLoadPage(true);

        return () => {
            clearInterval(this._interval);
        }
    }, []);

    if(loadPage == true) {
        return (
            <>
                <View style={[stylesApp.container, {backgroundColor: COLORS.background_type_grass.normal, marginTop: 0}]}>
                    
                </View>
            </>
        );
    } else return null
}
