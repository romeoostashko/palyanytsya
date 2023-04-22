import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Avatar} from 'components';

interface Props {
  urlAvatar: string;
}

export const MainHeader = ({urlAvatar}: Props) => {
  return (
    <Container>
      <Avatar url="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
      <Border activeOpacity={0.65}>
        <Text style={{color: '#ddd'}}>Write here</Text>
      </Border>
    </Container>
  );
};

const styles = StyleSheet.create({});

const Container = styled.View`
  background-color: ${({theme}) => theme.colors.mainHeader.bg};
  padding: 12px;
  height: 55px;
  flex-direction: row;
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
