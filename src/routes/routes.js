import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from '../pages/home';
import PokemonInfo from '../pages/pokemonInfo';

const Routes = createAppContainer(
    createSwitchNavigator
    (
        {
            // Página Inicial
            Home,

            // Página de informações do pokemon
            PokemonInfo,
        },
        {
            defaultNavigationOptions: {
                headerShown: false,
            },
            initialRouteName: 'Home'
        },
    )
);

export default Routes;