import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Avatar} from 'components';
import {PropsNewPost} from 'navigation';

interface Props {
  urlAvatar?: string;
  navigation: PropsNewPost;
}

export const MainHeader = ({urlAvatar, navigation}: Props) => {
  return (
    <Container>
      <Text style={{color: '#fafafa', fontWeight: '600', fontSize: 22}}>
        PALYANYTSYA
      </Text>
      <View style={{flexDirection: 'row', paddingTop: 8}}>
        <Avatar url="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        <Border
          onPress={() => navigation.navigate('NewPost')}
          activeOpacity={0.65}>
          <Text style={{color: '#ddd'}}>Write here</Text>
        </Border>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({});

const Container = styled.View`
  background-color: ${({theme}) => theme.colors.mainHeader.bg};
  padding: 12px;
  align-items: center;
  margin-bottom: 8px;
`;

const Border = styled.TouchableOpacity`
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.4);
  flex-grow: 1;
  margin-left: 8px;
  height: 35px;
  border-radius: 12px;
  padding-left: 8px;
  justify-content: center;
`;
