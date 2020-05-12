import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {HomeTabProps} from '../Navigation/HomeTab';
import {useSelector, useDispatch} from 'react-redux';
import {url} from '../config/API_URL';
import {MainDrawerParams} from '../Navigation/MainDrawer';
import {fetchTodo} from '../Redux/todo';
import {Button} from 'react-native-elements';

type ProfileScreenNavigationProps = DrawerNavigationProp<
  MainDrawerParams,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProps;
  route: HomeTabProps;
};

const ProfileScreen: React.SFC<Props> = ({route: {params}, navigation}) => {
  const auth = useSelector(state => state.auth);
  const todo = useSelector(state => state.todo);
  const dispatch = useDispatch();
  console.log(todo);
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
          buttonStyle={{backgroundColor: params.color}}
        />
      </View>
    );
  };

  return (
    <View>
      {renderProfileInfo()}
      <FlatList
        // ListHeaderComponent={renderProfileInfo}
        keyExtractor={item => item.id}
        refreshing={todo.loading}
        onRefresh={() => dispatch(fetchTodo(auth.id))}
        data={todo.dataList}
        numColumns={3}
        contentContainerStyle={styles.todoContainer}
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
