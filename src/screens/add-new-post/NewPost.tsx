import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import {PropsNewPost} from 'navigation';
import {ArrowBack} from 'components';

interface Props {
  navigation: PropsNewPost;
}

export const NewPostScreen = ({navigation}: Props) => {
  return (
    <SafeAreaViewContainer>
      <KeyboardAvoidingView
        style={{flexGrow: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          accessible={false}
          style={{}}>
          <Container>
            <Header>
              <HeaderRow>
                <ArrowBack onPress={() => navigation.goBack()} />
                <Image
                  source={{uri: 'https://via.placeholder.com/50x50'}}
                  style={{
                    marginLeft: 4,
                    height: 50,
                    width: 50,
                    borderRadius: 30,
                  }}
                />
                <Text style={{marginLeft: 8}} bold>
                  Roman Ostash
                </Text>
              </HeaderRow>
            </Header>
            <Input
              placeholderTextColor={'white'}
              textAlignVertical="top"
              autoComplete="off"
              autoCorrect={false}
              //value={value}
              // onChangeText={val => onChangeText(val)}
              multiline
              placeholder={'placeholder'}
            />
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaViewContainer>
  );
};

const styles = StyleSheet.create({});

const SafeAreaViewContainer = styled.SafeAreaView`
  background-color: ${({theme}) => theme.colors.global.bg};
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  padding-top: 4px;
  flex-direction: row;
  padding-horizontal: 8px;
  margin-bottom: 8px;
  align-items: center;
  justify-content: space-between;
`;

const HeaderRow = styled.View`
  align-items: center;
  flex-direction: row;
`;

const Input = styled.TextInput`
  height: 70%;
  border-top-width: 1px;
  border-bottom-width: 1px;
  font-size: 18px;
  padding-horizontal: 8px;
`;
