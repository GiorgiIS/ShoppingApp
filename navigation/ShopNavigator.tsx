import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { ProductsOverviewScreen } from '../screens/shop/ProductsOverviewScreen';
import { ProductDetailScreen } from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import { RootStackParamList } from './DefaultNavigationProps';
import Colors from '../constants/Colors';
import { StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { FontNames } from '../constants/Fonts';
import { chooseByPlatform } from '../helper/PlatformHelper';

const ProductsStack = createStackNavigator<RootStackParamList>();

const ShopNavigator = (props: any) => {

    const defaultNavigationOptions: StackNavigationOptions = {
        headerStyle: { backgroundColor: chooseByPlatform(Colors.primary, '') },
        headerTitleStyle: {
            fontFamily: FontNames.openSansBold
        },
        headerTintColor: chooseByPlatform('white', Colors.primary),
        headerBackTitle: FontNames.openSans
    }

    const content =
        <NavigationContainer>
            <ProductsStack.Navigator initialRouteName='ProductsOverview'>
                <ProductsStack.Screen name="ProductsOverview"
                    component={ProductsOverviewScreen}
                    options={defaultNavigationOptions} />
                <ProductsStack.Screen name="ProductDetail"
                    component={ProductDetailScreen}
                    options={defaultNavigationOptions}
                />
                <ProductsStack.Screen name="Cart"
                    component={CartScreen}
                    options={defaultNavigationOptions}
                />
                <ProductsStack.Screen name="Order"
                    component={OrdersScreen}
                    options={defaultNavigationOptions}
                />
            </ProductsStack.Navigator>
        </NavigationContainer>

    return content;
}

export default ShopNavigator;