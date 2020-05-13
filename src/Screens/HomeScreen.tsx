import * as React from 'react';
import {View, Button} from 'react-native';

const HomeScreen: React.FC = () => {
  // console.log(params.color);
  return (
    <View>
      <Button
        title="Home"
        // color={params.color}
        onPress={() => console.log('hello')}
      />
    </View>
  );
};

export default HomeScreen;
