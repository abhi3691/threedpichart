import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';

const RednerItem = ({item, index}) => {
  const navigation = useNavigation();

  const goToScreen = item => {
    navigation.navigate('Screen2', {item: item});
  };
  return (
    <TouchableHighlight
      underlayColor={'transprent'}
      onPress={() => goToScreen(item)}
      style={styles.container}>
      <>
        <Animated.Image
          source={{uri: item.uri}}
          sharedTransitionTag={`image${item.id}${item.name}`}
          style={{height: 100, width: '100%'}}
        />
        <View style={{height: 10}} />
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.emailText}>abc@gmail.com</Text>
        <Text style={styles.star}>****</Text>
      </>
    </TouchableHighlight>
  );
};

export default RednerItem;
