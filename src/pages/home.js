import { useState } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native';

import stylesHome from '../styles/pages/home';
import { ICONS, IMAGES } from '../constants/index';

function BackgroundImage() {
    return(
        <Image
            source={IMAGES.Pokeball}
            style={stylesHome.backgroundImage}
        />
    )
}

export default function Home() {
    const [inputSearch, setInputSearch] = useState(null);
    
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



    return (
        <>
            <BackgroundImage />
            
            <View style={stylesHome.containerFilter}>
                <View style={stylesHome.viewFilters}>
                    <TouchableOpacity style={stylesHome.buttonFilterGeneration}>
                        <Image
                            source={ICONS.Generation}
                            style={stylesHome.iconsFilters}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesHome.buttonFilterGeneration}>
                        <Image
                            source={ICONS.Sort}
                            style={stylesHome.iconsFilters}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesHome.buttonFilterGeneration}>
                        <Image
                            source={ICONS.Filter}
                            style={stylesHome.iconsFilters}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <HeaderTitle />

            <View style={stylesHome.containerSearchInput}>
                <Image
                    style={stylesHome.iconSearchInput}
                    source={ICONS.Search}
                />
                <TextInput
                    style={stylesHome.searchTextInput}
                    placeholder='What Pokémon are you looking for?'
                    value={inputSearch}
                    onChangeText={setInputSearch}
                />
            </View>
        </>
    );
}
