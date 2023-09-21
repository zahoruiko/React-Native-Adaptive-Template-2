import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { stylesCommon } from './stylesCommon';
import { stylesPhonePortrait } from './stylesPhonePortrait';
import { stylesPhoneLandscape } from './stylesPhoneLandscape';


export const UsersListItem = ({
  item,
  onPress,
  backgroundColor,
  textColor,
  borderColor,
  isTablet,
  isLandscape,
}) => {
  let styles = !isTablet && !isLandscape ? stylesPhonePortrait : 
                  !isTablet && isLandscape ? stylesPhoneLandscape : stylesCommon;

  const listItemDetails = () => (
    <View style={[styles.info]}>
      <Text style={[styles.name, { color: textColor }]}>
        {item.firstName + ' ' + item.lastName + ' ' + item.maidenName}
      </Text>
      <Text style={[styles.country, { color: textColor }]}>
        {item.address.city}
      </Text>
    </View>
  );

  let usersListItemDetails = listItemDetails();
  if (!isTablet && !isLandscape) {
    usersListItemDetails = null;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.item,
        styles.wrapperElevation,
        { backgroundColor },
        { borderColor },
      ]}>
      <View style={styles.imageElevation}>
        <Image source={{ uri: `${item.image}` }} style={[styles.img]} />
      </View>
      {usersListItemDetails}
    </TouchableOpacity>
  );
};
