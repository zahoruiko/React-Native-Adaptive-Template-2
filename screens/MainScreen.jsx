import React, { useState } from 'react';

import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import data from '../assets/data/data.json';
import UserDetail from '../components/UserDetail';
import UsersList from '../components/UsersList';

const MainScreen = () => {
  const [isLandscape, setIsLandscape] = useState(false);
  const [itemId, setItemId] = useState(1);
  const usersData = data.users;

  const determineOrientation = () => {
    const { width, height } = Dimensions.get('window');
    if (width > height) {
      setIsLandscape(true);
    } else {
      setIsLandscape(false);
    }
  };

  const renderUsersList = () => {
    return (
      <UsersList
        data={usersData}
        itemId={itemId}
        setItemId={setItemId}
        isLandscape={isLandscape}
      />
    );
  };

  const renderDetail = () => {
    const userData = usersData.filter(item => item.id === itemId);
      return <UserDetail contact={userData[0]} isLandscape={isLandscape} />;
  };

  return (
    <SafeAreaView
      style={styles.container}
      onLayout={() => determineOrientation()}>
      <View style={styles.content}>
        {renderUsersList()}
        {renderDetail()}
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});
