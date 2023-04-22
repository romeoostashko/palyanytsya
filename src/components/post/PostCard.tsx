import styled from 'styled-components/native';
import {useState, useEffect} from 'react';
import {Avatar} from 'components';
import {Dimensions, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {height} = Dimensions.get('window');
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
  const [postHeight, setPostHeight] = useState(0);
  const cutDescription = (description: string) => {
    if (description.length <= DESCRIPTION_LENGTH) {
      return description;
    } else {
      return description?.slice(0, DESCRIPTION_LENGTH) + '...';
    }
  };

  useEffect(() => {
    Image.getSize(avatar, (w, h) => {
      console.log(w, h);
    });
  }, []);

  const onShow = () => {
    setIsShown(prev => !prev);
  };

  return (
    <Container
      onLayout={event => {
        const {x, y, width, height} = event.nativeEvent.layout;
        //console.log(height);
        setPostHeight(height);
      }}
      onPress={onShow}
      activeOpacity={1}>
      <Header>
        <AvatarNameTimeRow>
          <Avatar url={avatar} />
          <NameTimeBox>
            <Name>{name}</Name>
            <Time>{time}</Time>
          </NameTimeBox>
        </AvatarNameTimeRow>
        <Tag>
          <TagText>{tag}</TagText>
        </Tag>
      </Header>

      <ImagePost
        source={{
          uri: avatar,
          height: isShown ? height / 2 : height / 4,
        }}>
        <LinearGradient
          colors={['#00000000', '#283544']}
          start={{x: 0.5, y: 0.3}}
          end={{x: 0.5, y: 1}}
          style={{
            height: isShown ? height / 2 : height / 4,
            width: '100%',
          }}></LinearGradient>
      </ImagePost>

      <DescriptionBox>
        {!isShown ? (
          <Description>
            {cutDescription(description)}
            <SeeMoreText suppressHighlighting={true} onPress={onShow}>
              See more
            </SeeMoreText>
          </Description>
        ) : (
          <Description>
            {description}{' '}
            <SeeMoreText suppressHighlighting={true} onPress={onShow}>
              See less
            </SeeMoreText>
          </Description>
        )}
      </DescriptionBox>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.post.bg};
  padding: 12px 0px;
  margin-bottom: 8px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 12px 0 12px;
  justify-content: space-between;
`;

const AvatarNameTimeRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const NameTimeBox = styled.View`
  margin-left: 12px;
`;

const Name = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.post.color};
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

const ImagePost = styled.ImageBackground`
  width: 100%;
  //height: ${height / 4}px;
  margin-top: 8px;
`;

const DescriptionBox = styled.View`
  margin-top: 8px;
  padding: 0 8px 0 8px;
`;

const Description = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.post.color};
  line-height: 22px;
`;

const SeeMoreText = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.post.grayText};
  line-height: 22px;
`;
