import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {PropsHome} from 'navigation';

interface Props {
  navigation: PropsHome;
}

export const StartScreen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.navigate('Home');
  }, []);

  return (
    <View>
      <Text>Start</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
