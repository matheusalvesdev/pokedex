import { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, FlatList, ImageBackground } from 'react-native';

import stylesHome from '../styles/pages/home';

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

export default function Home() {
    const [loadPage, setLoadPage] = useState(false);
    const [inputSearch, setInputSearch] = useState(null);
    const [limitOffset, setLimitOffset] = useState({
        limit: 10,
        offSet: 0
    });
    const [listPokemons, setListPokemons] = useState([]);
    const [flatListRefresh, setflatListRefresh] = useState(false);
    const [buttonSeeMore, setButtonSeeMore] = useState(true);

    async function apiSearchInformationsPokemon(idOrNameParam, cleanListPokemons) {
        const objectRequest = await apiObjectPokemonIdOrName(idOrNameParam);
        
        if(objectRequest.success == true) {
            const pokemonInfo = returnObjectPokemonInformations(objectRequest.return.data);

            let listPokemonsAtt = [];

            if(cleanListPokemons == true)
                setButtonSeeMore(false);
            else
                listPokemonsAtt = listPokemons;

            listPokemonsAtt.push(pokemonInfo);

            setListPokemons(listPokemonsAtt);
        } else {
            console.error('Erro');
        }
    }

    async function apiSearchListPokemons() {
        const offsetParam = listPokemons.length == 0 ? 0
                                : limitOffset.offSet;

        const objectRequest = await apiListPokemonsLimitAndOffset(offsetParam, limitOffset.limit);
        
        if(objectRequest.success == true) {
            setLimitOffset({
                limit: 10,
                offSet: (objectRequest.return.data.next.split('offset=')[1]).split('&')[0]
            });

            for(const elementPokemon of objectRequest.return.data.results) {
                await apiSearchInformationsPokemon(elementPokemon.name, false);
            }
        } else {
            console.error("Erro");
        }
    }

    async function actionButtonSeeMore() {
        apiSearchListPokemons(false);

        setflatListRefresh(!flatListRefresh);
    }

    function actionButtonRefreshList() {
        setListPokemons([]);
    
        setLimitOffset({
            limit: 10,
            offSet: 0
        }, []);
        
        apiSearchListPokemons(true);

        setButtonSeeMore(true);

        setflatListRefresh(!flatListRefresh);
    }

    async function actionButtonSearcInput() {
        // Essa função não é chamada por um botão em si, mas sim quando o textinput é enviado pelo usuário

        if(inputSearch != ('' && ""))
            apiSearchInformationsPokemon(inputSearch, true);
    }

    const returnObjectPokemonInformations = (pokemon) => {
        let types = [];

        for(const elementType of pokemon.types) {
            types.push(elementType.type.name);
        }

        // Necessário pois a PokeApi retorna dentro de Sprites -> Other um objeto com nome 'official-artwork'. Sem isso não é possível pegar o valor dentro do objeto 'official-artwork'.
        const listObjectsPokemonSpritesOther = Object.values(pokemon.sprites.other);

        const objectPokemon = {
            id: pokemon.id,
            name: pokemon.name,
            types: types,
            image: listObjectsPokemonSpritesOther[2].front_default,
        }

        return objectPokemon;
    }

    const renderFlatListItem = ({ item }) => {
        const formatID = (id) => {
            let idFormated = id.toString();

            if(idFormated.length == 1) {
                idFormated = '00' + idFormated;
            } else if(idFormated.length == 2) {
                idFormated = '0' + idFormated;
            }

            return idFormated;
        }

        const formatName = (name) => {
            return name.charAt(0).toUpperCase() + name.slice(1);
        }

        const renderPokemonTypes = (listTypes) => {
            const returnSourceType = (typeName) => {
                let sourceType = null;

                switch(typeName.toString().toUpperCase()) {
                    case 'BUG': {
                        sourceType = ICONS.Pokemon_Type_Bug_Badge;
                        break;
                    }
                    case 'DARK': {
                        sourceType = ICONS.Pokemon_Type_Dark_Badge;
                        break;
                    }
                    case 'DRAGON': {
                        sourceType = ICONS.Pokemon_Type_Dragon_Badge;
                        break;
                    }
                    case 'ELECTRIC': {
                        sourceType = ICONS.Pokemon_Type_Electric_Badge;
                        break;
                    }
                    case 'FAIRY': {
                        sourceType = ICONS.Pokemon_Type_Fairy_Badge;
                        break;
                    }
                    case 'FIGHTING': {
                        sourceType = ICONS.Pokemon_Type_Fighting_Badge;
                        break;
                    }
                    case 'FIRE': {
                        sourceType = ICONS.Pokemon_Type_Fire_Badge;
                        break;
                    }
                    case 'FLYING': {
                        sourceType = ICONS.Pokemon_Type_Flying_Badge;
                        break;
                    }
                    case 'GHOST': {
                        sourceType = ICONS.Pokemon_Type_Ghost_Badge;
                        break;
                    }
                    case 'GRASS': {
                        sourceType = ICONS.Pokemon_Type_Grass_Badge;
                        break;
                    }
                    case 'GROUND': {
                        sourceType = ICONS.Pokemon_Type_Ground_Badge;
                        break;
                    }
                    case 'ICE': {
                        sourceType = ICONS.Pokemon_Type_Ice_Badge;
                        break;
                    }
                    case 'NORMAL': {
                        sourceType = ICONS.Pokemon_Type_Normal_Badge;
                        break;
                    }
                    case 'POISON': {
                        sourceType = ICONS.Pokemon_Type_Poison_Badge;
                        break;
                    }
                    case 'PSYCHIC': {
                        sourceType = ICONS.Pokemon_Type_Psychic_Badge;
                        break;
                    }
                    case 'ROCK': {
                        sourceType = ICONS.Pokemon_Type_Rock_Badge;
                        break;
                    }
                    case 'STEEL': {
                        sourceType = ICONS.Pokemon_Type_Steel_Badge;
                        break;
                    }
                    case 'WATER': {
                        sourceType = ICONS.Pokemon_Type_Water_Badge;
                        break;
                    }
                }
                
                return sourceType;
            }

            return(
                listTypes.map((elementType) =>
                    <Image
                        source={returnSourceType(elementType)}
                        style={stylesHome.listIconBadge}
                    />
                )
            )
        }

        const returnFlatListItemBackground = (listTypes) => {
                let backgroundColor = null;
                let type = listTypes[0];

                switch(type.toString().toUpperCase()) {
                    case 'BUG': {
                        backgroundColor = COLORS.background_type_bug.normal;
                        break;
                    }
                    case 'DARK': {
                        backgroundColor = COLORS.background_type_dark.normal;
                        break;
                    }
                    case 'DRAGON': {
                        backgroundColor = COLORS.background_type_dragon.normal;
                        break;
                    }
                    case 'ELECTRIC': {
                        backgroundColor = COLORS.background_type_eletric.normal;
                        break;
                    }
                    case 'FAIRY': {
                        backgroundColor = COLORS.background_type_fairy.normal;
                        break;
                    }
                    case 'FIGHTING': {
                        backgroundColor = COLORS.background_type_fighting.normal;
                        break;
                    }
                    case 'FIRE': {
                        backgroundColor = COLORS.background_type_fire.normal;
                        break;
                    }
                    case 'FLYING': {
                        backgroundColor = COLORS.background_type_flying.normal;
                        break;
                    }
                    case 'GHOST': {
                        backgroundColor = COLORS.background_type_ghost.normal;
                        break;
                    }
                    case 'GRASS': {
                        backgroundColor = COLORS.background_type_grass.normal;
                        break;
                    }
                    case 'GROUND': {
                        backgroundColor = COLORS.background_type_ground.normal;
                        break;
                    }
                    case 'ICE': {
                        backgroundColor = COLORS.background_type_ice.normal;
                        break;
                    }
                    case 'NORMAL': {
                        backgroundColor = COLORS.background_type_normal.normal;
                        break;
                    }
                    case 'POISON': {
                        backgroundColor = COLORS.background_type_poison.normal;
                        break;
                    }
                    case 'PSYCHIC': {
                        backgroundColor = COLORS.background_type_psychic.normal;
                        break;
                    }
                    case 'ROCK': {
                        backgroundColor = COLORS.background_type_rock.normal;
                        break;
                    }
                    case 'STEEL': {
                        backgroundColor = COLORS.background_type_steel.normal;
                        break;
                    }
                    case 'WATER': {
                        backgroundColor = COLORS.background_type_water.normal;
                        break;
                    }
                }
                
                return backgroundColor;
        }

        return(
            <TouchableOpacity style={[stylesHome.containerListItem, {backgroundColor: returnFlatListItemBackground(item.types)}]}>
                <Image
                    source={IMAGES.Pokeball_White}
                    style={stylesHome.listItemBackgroundPokeball}
                />
                
                <Image
                    source={IMAGES.I6x3}
                    style={stylesHome.listItemBackgroundPoints}
                />

                <View style={stylesHome.listItemInfo}>
                    <View style={stylesHome.listItemInfoID}>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={stylesHome.textInfoID}>
                            #{formatID(item.id)}
                        </Text>
                    </View>
                    <View style={stylesHome.listItemInfoName}>
                        <Text style={stylesHome.textInfoName}>
                            {formatName(item.name)}
                        </Text>
                    </View>
                    <View style={stylesHome.listItemInfoType}>
                        {renderPokemonTypes(item.types)}
                    </View>
                </View>
                <View style={stylesHome.listItemImage}>
                    <Image
                        source={{uri: item.image}}
                        style={stylesHome.listImage}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    const renderFlatListFooterItem = () => {
        if(buttonSeeMore == true)
            return (
                <View style={stylesHome.containerViewMore}>
                    <TouchableOpacity style={stylesHome.buttonViewMore} onPress={actionButtonSeeMore}>
                        <Text style={stylesHome.textViewMore}>
                            See more
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        
        return null;

        /*
            return (
                <View style={stylesHome.containerViewMore}>
                    <TouchableOpacity style={stylesHome.buttonViewMore} onPress={actionButtonRefreshList()}>
                        <Image
                            source={ICONS.Refresh}
                            style={stylesHome.iconRefreshList}
                        />
                    </TouchableOpacity>
                </View>
            )
        */
    }

    useEffect(async() => {
        if(listPokemons.length == 0)
            await apiSearchListPokemons(false);

        setLoadPage(true);

        return () => {
            clearInterval(this._interval);
        }
    }, []);

    if(loadPage == true) {
        return (
            <>
                <Image
                    source={IMAGES.Pokeball_Black_Gradient}
                    style={stylesHome.backgroundImage}
                />
                
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
                        onEndEditing={_ => {actionButtonSearcInput()}}
                    />
                </View>

                <FlatList
                    data={listPokemons}
                    renderItem={renderFlatListItem}
                    keyExtractor={item => item.id}
                    style={stylesHome.flatListStyle}
                    extraData={flatListRefresh}
                    ListFooterComponent={renderFlatListFooterItem}
                />
            </>
        );
    } else return null
}
