import {Dimensions, View} from 'react-native';
import Animated from 'react-native-reanimated';

const DetailScreen = ({route}) => {
  const {item} = route.params;
  return (
    <View style={{flex: 1}}>
      <Animated.Image
        source={{uri: item.uri}}
        sharedTransitionTag={`image${item.id}${item.name}`}
        style={{height: Dimensions.get('window').height / 2, width: '100%'}}
      />
    </View>
  );
};

export default DetailScreen;
