import { View, TouchableOpacity, Text, Image } from 'react-native';

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

function Filters() {
    return (
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
    )
}

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

export default function Home() {
    return (
        <>
            <BackgroundImage />
            
            <Filters />

            <HeaderTitle />
        </>
    );
}
