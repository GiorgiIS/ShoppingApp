import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/ShopNavigator';
import { RouteProp } from '@react-navigation/native';

export type DefaultNavigationProps = StackNavigationProp<
    RootStackParamList,
    NavigationScreenName
>;

export type DefaultRouteProp = RouteProp<RootStackParamList, NavigationScreenName>;

export type NavigationScreenName = 'ProductsOverview' | 'ProductDetail';