import styled from 'styled-components/native';
import {useState} from 'react';

import {TouchableOpacity, Text, Pressable} from 'react-native';

interface Props {
  avatar: string;
  description: string;
  name: string;
  time: string;
  tag: string;
}

const DESCRIPTION_LENGTH = 180;

export const PostCard = ({
  avatar = 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  description = 'Description',
  name = 'Nono',
  time = 'none',
  tag = 'none',
}: Props) => {
  const [isShown, setIsShown] = useState(false);
  const cutDescription = (description: string) => {
    if (description.length <= DESCRIPTION_LENGTH) {
      return description;
    } else {
      return description?.slice(0, DESCRIPTION_LENGTH) + '...';
    }
  };

  return (
    <Container>
      <Header>
        <AvatarNameTimeRow>
          <Avatar source={{uri: avatar}} />

          <NameTimeBox>
            <Name>{name}</Name>
            <Time>{time}</Time>
          </NameTimeBox>
        </AvatarNameTimeRow>
        <Tag>
          <TagText>{tag}</TagText>
        </Tag>
      </Header>
      <DescriptionBox>
        {!isShown ? (
          <Description>
            {cutDescription(description)}

            <Description
              suppressHighlighting={true}
              onPress={() => {
                setIsShown(true);
                console.log('kkk');
              }}
              style={{color: 'blue'}}>
              Show more
            </Description>
          </Description>
        ) : (
          <Description>
            {description}{' '}
            <Description
              suppressHighlighting={true}
              onPress={() => {
                setIsShown(false);
                console.log('kkk');
              }}
              style={{color: 'blue'}}>
              Show less
            </Description>
          </Description>
        )}
      </DescriptionBox>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${({theme}) => theme.colors.post.bg};
  padding: 18px;
  border-radius: 24px;
  margin-bottom: 12px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const AvatarNameTimeRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`;

const NameTimeBox = styled.View`
  margin-left: 8px;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: 400;
`;

const Time = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.post.grayText};
`;

const Tag = styled.View`
  padding: 4px 8px 4px 8px;
  background-color: ${({theme}) => theme.colors.tag.bg};
  border-radius: 8px;
`;

const TagText = styled.Text``;

const DescriptionBox = styled.View`
  margin-top: 8px;
`;

const Description = styled.Text`
  font-size: 15px;
`;
