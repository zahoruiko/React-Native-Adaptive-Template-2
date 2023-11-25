import React from 'react';
import { FlatList } from 'react-native';
import { UsersListItem } from '../UsersListItem';
import { isTablet } from '../../utils/Device';
import styles from './styles';

const UsersList = ({
  data,
  itemId,
  setItemId,
  isLandscape,
}) => {
  const handleOnItemPress = id => {
    setItemId(id);
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === itemId ? 'white' : 'white';
    const color = item.id === itemId ? 'black' : 'gray';
    const borderColor = item.id === itemId ? 'gray' : 'lightgray';

    return (
      <UsersListItem
        item={item}
        onPress={() => handleOnItemPress(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
        borderColor={borderColor}
        isTablet={isTablet()}
        isLandscape={isLandscape}
      />
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={itemId}
      style={styles.flatListWrapper}
    />
  );
};

export default UsersList;
