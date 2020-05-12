import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeTabProps} from '../Navigation/HomeTab';

type HomeScreenNavigationProps = StackNavigationProp<HomeTabProps, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProps;
  route: HomeTabProps;
};

const HomeScreen: React.FC<Props> = ({route: {params}}) => {
  console.log(params.color);
  return (
    <View>
      <Button
        title="Home"
        color={params.color}
        onPress={() => console.log('hello')}
      />
    </View>
  );
};

export default HomeScreen;
