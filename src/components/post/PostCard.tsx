import styled from 'styled-components/native';
import {useState, useEffect} from 'react';
import {Avatar} from 'components';
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Footer} from './footer';

const {height, width} = Dimensions.get('window');
const DESCRIPTION_LENGTH = 180;

interface Props {
  avatar: string | null;
  image: string | null;
  description: string;
  name: string;
  time: string;
  tag: string;
}

export const PostCard = ({
  avatar = null,
  description = 'Description',
  name = 'NonE',
  time = 'none',
  tag = 'none',
  image = avatar,
}: Props) => {
  const [isShown, setIsShown] = useState(false);
  const [postWidth, setPostWidth] = useState(0);
  const [imRatio, setImRatio] = useState(1);

  const cutDescription = (description: string) => {
    if (description.length <= DESCRIPTION_LENGTH) {
      return description;
    } else {
      return description?.slice(0, DESCRIPTION_LENGTH) + '...';
    }
  };

  useEffect(() => {
    !!image &&
      Image.getSize(image, (w, h) => {
        const RATIO = w / h;
        setImRatio(RATIO);
        //console.log('w, h ', w, h);
        //console.log('Screen w, h: ', width, height);
        console.log('RATIO ', RATIO);
        //setPostHeight(h);
        setPostWidth(w);
      });
  }, [image]);

  const onShow = () => {
    setIsShown(prev => !prev);
  };

  const getImageHeight = () => {
    if (imRatio > 1) {
      //console.log('1= ', width / imRatio);
      return width / imRatio;
    } else if (imRatio < 1 && width > postWidth) {
      //console.log('4= ', width);
      return height * 0.5;
    }
    // console.log('44= ', width);
    return height * 0.5;
  };

  return (
    <Container>
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
      <TouchableOpacity
        onPress={onShow}
        activeOpacity={1}
        style={{paddingBottom: 8}}>
        {image && (
          <ImageBackground
            resizeMode={imRatio <= 0.6 ? 'contain' : 'cover'}
            source={{
              uri: image,
            }}
            style={{
              width: '100%',
              marginTop: 8,
            }}>
            <LinearGradient
              colors={['#00000000', '#283544']}
              start={{x: 0.5, y: 0.3}}
              end={{x: 0.5, y: 1}}
              style={{
                height: getImageHeight(),
                width: '100%',
              }}></LinearGradient>
          </ImageBackground>
        )}

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
      </TouchableOpacity>
      <Footer />
    </Container>
  );
};

const Container = styled.View`
  background-color: ${({theme}) => theme.colors.post.bg};
  padding: 8px 0px;
  margin-bottom: 8px;
`;

const Touch = styled.TouchableOpacity``;

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
  //width: 100%;
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
