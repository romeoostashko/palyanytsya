//import {CompositeNavigationProp} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

export type MainStackParamList = {
  Home: undefined;
  Start: undefined;
};

export type PropsStart = StackNavigationProp<MainStackParamList, 'Start'>;
export type PropsHome = StackNavigationProp<MainStackParamList, 'Home'>;
