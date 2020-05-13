import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainDrawerParams} from '../Navigation/MainDrawer';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useTypedSelector} from '../Redux/reducer';
import {useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import {fetchTodo} from '../Redux/todo';
import {View, Image, Text, Button, StyleSheet} from 'react-native';
import {url} from '../config/API_URL';
import {FlatList} from 'react-native-gesture-handler';

type ProfileScreenNavigationProps = DrawerNavigationProp<
  MainDrawerParams,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProps;
  route: BottomTabBarProps;
};

interface DataListParams {
  id: string;
  imagePath: string;
}

// export type AuthState = {
//   auth: {
//     id: number;
//     displayPicture: number;
//     username: string;
//   };
//   todo: {
//     dataList: Array<DataListParams>;
//     loading: boolean;
//   };
// };

const ProfileScreen: React.SFC<Props> = ({navigation}) => {
  const auth = useTypedSelector(state => state.auth);
  const todo = useTypedSelector(state => state.todo);
  console.log(todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo(auth.id));
  }, [auth.id, dispatch]);

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  const renderProfileInfo = () => {
    return (
      <View style={styles.profileInfoContainer}>
        <Image
          source={{uri: `${url}/${auth.displayPicture}`}}
          style={styles.displayPicture}
        />
        <View>
          <Text style={styles.username}>{auth.username}</Text>
        </View>
        <Button
          title="Profile"
          onPress={() => navigation.toggleDrawer()}
          // buttonStyle={{backgroundColor: params.color}}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderProfileInfo()}
      <FlatList
        keyExtractor={item => item.id.toString()}
        refreshing={todo.loading}
        onRefresh={() => dispatch(fetchTodo(auth.id))}
        data={todo.dataList}
        numColumns={3}
        ItemSeparatorComponent={renderSeparator}
        renderItem={({item}) => (
          <Image
            source={{uri: `${url}/${item.imagePath}`}}
            style={styles.imageTodo}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  displayPicture: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
  container: {
    flex: 1,
  },
  profileInfoContainer: {
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: 'center',
  },
  username: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  todoContainer: {
    flex: 1,
    backgroundColor: '#ddd',
    alignContent: 'center',
  },
  imageTodo: {
    height: 125,
    width: '33.33%',
    margin: 1,
  },
  separator: {
    height: 1,
    width: '86%',
    backgroundColor: '#CED0CE',
    marginLeft: '14%',
  },
});

export default ProfileScreen;
