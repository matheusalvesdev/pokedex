import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from '../pages/home';

const Routes = createAppContainer(
    createSwitchNavigator
    (
        {
            // Página Inicial
            Home,
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