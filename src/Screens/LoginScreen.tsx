import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { StackActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { WelcomeIcon } from '../Components';
import { useTypedSelector } from '../Redux/reducer';
import { LoginAction } from '../Redux/auth';
import { RootStackParamList } from '../Navigation/Authstack';

type LoginScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProps;
};

interface AuthState {
  auth: {
    loading: boolean;
    username: string;
  };
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const loading = useTypedSelector((state) => state.auth.loading);
  const userData = useTypedSelector((state) => state.auth);
  useEffect(() => {
    if (userData.username) {
      navigation.dispatch(StackActions.replace('MainApp'));
    }
  }, [userData.username, navigation]);

  return (
    <View style={styles.container}>
      <WelcomeIcon />
      <View style={styles.textInput}>
        <Input
          onChangeText={(e) => setUsername(e)}
          value={username}
          placeholder="Username"
          leftIcon={<Icon name="email" size={24} color="black" />}
        />

        <Input
          onChangeText={(e) => setPassword(e)}
          value={password}
          placeholder="Password"
          leftIcon={<Icon name="lock" size={24} color="black" />}
          secureTextEntry={true}
        />
      </View>
      <View>
        <Button
          title="Login"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.buttonStyle}
          // onPress={handleLogin}
          onPress={() => dispatch(LoginAction({ username, password }))}
          loading={loading}
        />
        <Button
          title="Register"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.buttonStyle}
          onPress={() => navigation.navigate('Register')}
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
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 12,
  },
});

export default LoginScreen;
