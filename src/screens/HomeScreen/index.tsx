import {useNavigation} from '@react-navigation/native';
import {FlatList, Text, TouchableHighlight, View} from 'react-native';
import Animated from 'react-native-reanimated';
import data from './data';
import RednerItem from './organization';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f1f1',
      }}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return <RednerItem item={item} index={index} />;
        }}
        numColumns={2}
      />
    </View>
  );
};

export default HomeScreen;
