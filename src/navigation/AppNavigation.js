import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './bottom-tab/BottomTabsNavigation';
import AuthNavigator from './auth/AuthNavigation';
import { useSelector } from 'react-redux';

const AppNavigation = () => {
    const isAuth = useSelector(state => state.auth.userId);
    return (
        <NavigationContainer >
        {isAuth ? <BottomTabsNavigator /> : <AuthNavigator />}
        </NavigationContainer>);
}

export default AppNavigation;