import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {useState} from 'react';
import styled from 'styled-components/native';

import {PropsHome} from 'navigation';
import {PostCard, MainHeader} from 'components';

interface Props {
  navigation: PropsHome;
}

const post = {
  avatar:
    'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis unde officiis molestias ex soluta quas vel, corrupti cupiditate. Explicabo, obcaecati? Ullam illo sit laboriosam obcaecati tenetur adsaepe, eum repudiandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis unde officiis molestias ex soluta quas vel, corrupti cupiditate. Explicabo, obcaecati? Ullam illo sit laboriosam obcaecati tenetur adsaepe, eum repudiandae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis unde officiis molestias ex soluta quas vel, corrupti cupiditate. Explicabo, obcaecati? Ullam illo sit laboriosam obcaecati tenetur adsaepe, eum repudiandae?',
  name: 'Roman Ostash',
  time: '2 pm',
  tag: 'Job',
};

export const HomeScreen = ({navigation}: Props) => {
  // const [theme, setTheme] = useState('light');
  // const isDarkTheme = theme === 'dark';
  //const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <SafeAreaViewContainer>
      <Container>
        <MainHeader />
        <PostCard
          avatar={post.avatar}
          description={post.description}
          name={post.name}
          tag={post.tag}
          time={post.time}
        />
        <PostCard
          avatar={post.avatar}
          description={post.description}
          name={post.name}
          tag={post.tag}
          time={post.time}
        />
        <PostCard
          avatar={post.avatar}
          description={post.description}
          name={post.name}
          tag={post.tag}
          time={post.time}
        />
      </Container>
    </SafeAreaViewContainer>
  );
};

const styles = StyleSheet.create({});

const Container = styled.View`
  flex: 1;
`;

const SafeAreaViewContainer = styled.SafeAreaView`
  background-color: ${({theme}) => theme.background};
  flex: 1;
`;
