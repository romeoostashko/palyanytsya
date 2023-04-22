import {StyleSheet, Text, View} from 'react-native';

import styled from 'styled-components/native';

interface Props {
  url: string;
}

export const Avatar = ({url}: Props) => {
  return <ImageAvatar source={{uri: url}} />;
};

const styles = StyleSheet.create({});

const ImageAvatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;
