import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { ProductsOverviewScreen } from '../screens/shop/ProductsOverviewScreen';
import { ProductDetailScreen } from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import { RootStackParamList } from './DefaultNavigationProps';

const ProductsStack = createStackNavigator<RootStackParamList>();

const ShopNavigator = (props: any) => {
    const content =
        <NavigationContainer>
            <ProductsStack.Navigator initialRouteName='ProductsOverview'>
                <ProductsStack.Screen name="ProductsOverview" component={ProductsOverviewScreen} />
                <ProductsStack.Screen name="ProductDetail" component={ProductDetailScreen} />
                <ProductsStack.Screen name="Cart" component={CartScreen} />
                <ProductsStack.Screen name="Order" component={OrdersScreen} />
            </ProductsStack.Navigator>
        </NavigationContainer>

    return content;
}

export default ShopNavigator;