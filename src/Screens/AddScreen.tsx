import * as React from 'react';
import { View, Button } from 'react-native';

const AddScreen: React.FC = () => {
  return (
    <View>
      <Button
        title="Add"
        onPress={() => console.log('Add')}
        // color={params.color}
      />
    </View>
  );
};

export default AddScreen;
