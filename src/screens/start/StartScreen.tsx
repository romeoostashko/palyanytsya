import {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, PixelRatio} from 'react-native';

import {PropsHome} from 'navigation';

interface Props {
  navigation: PropsHome;
}

export const StartScreen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.navigate('Home');
  }, []);

  return <View></View>;
};

const styles = StyleSheet.create({});
