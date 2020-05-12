import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Icon} from 'react-native-elements';

const WelcomeIcon: React.FC = () => {
  return (
    <View>
      <Icon type="material" size={100} name="explore" />
      <Text style={styles.mainText}>TodoApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
  },
});

export default WelcomeIcon;
