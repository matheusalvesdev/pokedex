import { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, FlatList, ImageBackground } from 'react-native';

import stylesHome from '../styles/pages/home';
import stylesApp from '../styles/pages/home';
import { ICONS, IMAGES } from '../constants/index';
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
    const [inputSearch, setInputSearch] = useState(null);
    const [limitOffset, setLimitOffset] = useState({
        limit: 10,
        offSet: 0
    });
    const [listPokemons, setListPokemons] = useState([]);
    const [loadPage, setLoadPage] = useState(false);
    const [flatListRefresh, setflatListRefresh] = useState(false);

    async function apiSearchInformationsPokemon(id, name) {
        let objectRequest = await apiObjectPokemonIdOrName(id, name);
        
        if(objectRequest.success == true) {
            const pokemonInfo = returnObjectPokemonInformations(objectRequest.return.data);

            let listPokemonsAtt = listPokemons;

            listPokemonsAtt.push(pokemonInfo);

            setListPokemons(listPokemonsAtt);
        } else {
            console.error('Erro');
        }
    }
    
    async function apiSearchMoreList() {
        const objectRequest = await apiListPokemonsLimitAndOffset(limitOffset.offSet, limitOffset.limit);
        
        if(objectRequest.success == true) {
            setLimitOffset({
                limit: 10,
                offSet: (objectRequest.return.data.next.split('offset=')[1]).split('&')[0]
            });

            for(const elementPokemon of objectRequest.return.data.results) {
                await apiSearchInformationsPokemon(null, elementPokemon.name);
            }
        } else {
            console.error("Erro");
        }
    }

    async function apiSearchInitialList() {
        if(listPokemons.length == 0) {
            const objectRequest = await apiListPokemonsLimitAndOffset(0, limitOffset.limit);
            
            if(objectRequest.success == true) {
                setLimitOffset({
                    limit: 10,
                    offSet: (objectRequest.return.data.next.split('offset=')[1]).split('&')[0]
                });

                for(const elementPokemon of objectRequest.return.data.results) {
                    await apiSearchInformationsPokemon(null, elementPokemon.name);
                }
            } else {
                console.error("Erro");
            }
        }
    }

    async function actionButtonSeeMore() {
        await apiSearchMoreList();

        setflatListRefresh(!flatListRefresh);
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
                    case 'ELETRIC': {
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

        return(
            <TouchableOpacity style={stylesHome.containerListItem}>
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

    useEffect(async() => {
        await apiSearchInitialList();

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
                    />
                </View>

                <FlatList
                    data={listPokemons}
                    renderItem={renderFlatListItem}
                    keyExtractor={item => item.id}
                    style={stylesHome.flatListStyle}
                    extraData={flatListRefresh}
                    ListFooterComponent={
                        <View style={stylesHome.containerViewMore}>
                            <TouchableOpacity style={stylesHome.buttonViewMore} onPress={actionButtonSeeMore}>
                                <Text style={stylesHome.textViewMore}>
                                    See more
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </>
        );
    } else return null
}
