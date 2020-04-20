import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, NavigationContainer } from '@react-navigation/native';

import { ProductsOverviewScreen } from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';

type RootStackParamList = {
    ProductsOverview: undefined
}

const ProductsStack = createStackNavigator<RootStackParamList>();

const ProductsOverviewNavigator = (props: any) => {
    const content =
        <NavigationContainer>
            <ProductsStack.Navigator>
                <ProductsStack.Screen name="ProductsOverview" component={ProductsOverviewScreen} />
            </ProductsStack.Navigator>
        </NavigationContainer>

    return content;
}

export default ProductsOverviewNavigator;