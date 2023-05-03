import {Pressable} from 'react-native';
import {MotiView} from 'moti';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';

const AnimatedCantainer = ({
  children,
  isPressed,
}: {
  children: React.ReactNode;
  isPressed: boolean;
}) => {
  return (
    <MotiView
      from={{opacity: 0, scale: 0}}
      animate={{
        opacity: 1,
        scale: 1,
        transform: [{translateX: isPressed ? -10 : 0}],
      }}
      transition={{
        type: 'timing',
        duration: 350,
        scale: {
          delay: 200,
          type: 'spring',
        },
        opacity: {delay: 200, type: 'spring'},
      }}>
      {children}
    </MotiView>
  );
};

interface Props {
  onPress: () => void;
  isShow?: boolean;
}

export const ArrowBack = ({isShow = true, onPress = () => {}}: Props) => {
  return (
    <Pressable style={{}} onPress={onPress}>
      {({pressed}) => {
        return isShow ? (
          <AnimatedCantainer isPressed={pressed}>
            <Icon name="left" size={24} color="white" />
          </AnimatedCantainer>
        ) : null;
      }}
    </Pressable>
  );
};
