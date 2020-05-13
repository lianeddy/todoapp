import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { WelcomeIcon } from '../Components';
import { RootStackParamList } from '../Navigation/Authstack';

type RegisterScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

type Props = {
  navigation: RegisterScreenNavigationProps;
};

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <WelcomeIcon />
      <View style={styles.textInput}>
        <Input
          onChangeText={(e) => setUsername(e)}
          value={username}
          placeholder="Username"
          leftIcon={<Icon name="account-box" size={24} color="black" />}
        />
        <Input
          onChangeText={(e) => setEmail(e)}
          value={email}
          placeholder="Email"
          leftIcon={<Icon name="mail" size={24} color="black" />}
        />
        <Input
          onChangeText={(e) => setPassword(e)}
          value={password}
          placeholder="Password"
          leftIcon={<Icon name="lock" size={24} color="black" />}
        />
        <Input
          onChangeText={(e) => setConfirmPassword(e)}
          value={confirmPassword}
          placeholder="Confirm Password"
          leftIcon={<Icon name="lock" size={24} color="black" />}
        />
      </View>
      <View>
        <Button
          title="Register"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.buttonStyle}
        />
        <Button
          title="Login"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.buttonStyle}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  textInput: {
    marginTop: 50,
    marginBottom: 50,
    width: '100%',
  },
  buttonContainer: {
    // width: '95%',
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 12,
  },
});

export default RegisterScreen;
