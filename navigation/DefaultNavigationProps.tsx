import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
    ProductsOverview: undefined,
    ProductDetail: { id: string },
    Cart: undefined,
    Order: undefined,
}

export type NavigationScreenName =
    'ProductsOverview' |
    'ProductDetail' |
    'Cart' |
    'Order';

export type DefaultNavigationProps = StackNavigationProp<RootStackParamList, NavigationScreenName>;
export type DefaultRouteProp = RouteProp<RootStackParamList, NavigationScreenName>;

export type DefaultGenericRouteProp<T extends NavigationScreenName> = RouteProp<RootStackParamList, T>;
export type DefaultGenericNavigationProps<T extends NavigationScreenName> = StackNavigationProp<RootStackParamList, T>;

export type DefaultGenericNavigationRouteProps<T extends NavigationScreenName> = {
    route: DefaultGenericRouteProp<T>;
    navigation: DefaultGenericNavigationProps<T>;
};