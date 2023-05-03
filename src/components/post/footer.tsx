import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconAD from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  color?: string;
  size?: number;
  textColor?: string;
}

interface PropsIcon {
  color?: string;
  size?: number;
  typeOfIcon: 'like' | 'comment' | 'share';
  text?: string;
  onPress?: () => void;
  textColor?: string;
}

const Icon = ({
  color = '#fafafa',
  typeOfIcon,
  size = 18,
  text = '',
  onPress = () => {},
  textColor = '#fafafa',
}: PropsIcon) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {typeOfIcon === 'like' ? (
        <IconAD name="like2" size={size} color={color} />
      ) : typeOfIcon === 'comment' ? (
        <IconFA name="comment-o" size={size} color={color} />
      ) : (
        <Ionicons name="share-social-outline" size={size} color={color} />
      )}
      <Text style={{color: textColor, marginLeft: 4, fontSize: 14}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const strings = {like: 'Like', comment: 'Comment', share: 'Share'};

export const Footer = ({
  color = '#fafafa',
  size = 18,
  textColor = '#fafafa',
}: Props) => {
  return (
    <View style={styles.footerContainer}>
      <Icon
        typeOfIcon="like"
        text={strings.like}
        color={color}
        size={size}
        textColor={textColor}
      />
      <Icon
        typeOfIcon="comment"
        text={strings.comment}
        color={color}
        size={size}
        textColor={textColor}
      />
      <Icon
        typeOfIcon="share"
        text={strings.share}
        color={color}
        size={size}
        textColor={textColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#e8df73',
  },
});
