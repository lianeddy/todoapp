import * as React from 'react';
import { FlatList } from 'react-native';

export interface PostGridProps {}

const PostGrid: React.FC<PostGridProps> = () => {
  return (
    <FlatList
      header
      refreshing={todo.loading}
      onRefresh={() => dispatch(fetchTodo(auth.id))}
      data={todo.dataList}
      numColumns={3}
      contentContainerStyle={styles.todoContainer}
      renderItem={({ item }) => (
        <Image
          source={{ uri: `${url}/${item.imagePath}` }}
          style={styles.imageTodo}
        />
      )}
    />
  );
};

export default PostGrid;
