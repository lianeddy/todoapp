import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeTabProps} from '../Navigation/HomeTab';

type AddScreenNavigationProps = StackNavigationProp<HomeTabProps, 'Post'>;

type Props = {
  navigation: AddScreenNavigationProps;
  route: HomeTabProps;
};
const AddScreen: React.SFC<Props> = ({route: {params}}) => {
  return (
    <View>
      <Button
        title="Add"
        onPress={() => console.log('Add')}
        color={params.color}
      />
    </View>
  );
};

export default AddScreen;
