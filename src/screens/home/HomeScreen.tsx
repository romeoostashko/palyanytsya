import {StyleSheet, Text, View} from 'react-native';

import {PropsHome} from 'navigation';

interface Props {
  navigation: PropsHome;
}

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
