import React, {
  RefObject,
  useEffect,
  useRef,
} from 'react';

import {
  Image,
  ScrollView,
  View,
} from 'react-native';
import { DataTable } from 'react-native-paper';

import { isTablet } from '../../utils/Device';
import stylesPhone from './stylesPhone';
import stylesPhoneLandscape from './stylesPhoneLandscape';
import stylesTablet from './stylesTablet';
import stylesTabletPortrait from './stylesTabletPortrait';

type TUserDetailProps = {
  contact: any;
  isLandscape: boolean;
}

const UserDetail: React.FC<TUserDetailProps> = ({ contact, isLandscape }) => {
  const styles =
    isTablet() && isLandscape
      ? stylesTablet
      : isTablet() && !isLandscape
      ? stylesTabletPortrait
      : !isTablet() && isLandscape
      ? stylesPhoneLandscape
      : stylesPhone;

  const scrollRef = useRef<ScrollView>(null);
  
  useEffect(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }, [contact])

  return (
    <View style={styles.main}>
      <ScrollView ref={scrollRef}>
        <View style={styles.container}>
          <View style={styles.userPhotoWrapper}>
            <Image
              source={{ uri: `${contact.image}` }}
              style={[styles.userPhoto]}
            />
          </View>
          <DataTable style={styles.userDetailsTable}>
            <DataTable.Row>
              <DataTable.Title
                style={styles.userDetailsTitle}
                textStyle={styles.userDetailsTitleTextStyle}>
                First name:
              </DataTable.Title>
              <DataTable.Cell
                style={styles.userDetailsContent}
                textStyle={styles.userDetailsContentTextStyle}>
                {contact.firstName}
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Title
                style={styles.userDetailsTitle}
                textStyle={styles.userDetailsTitleTextStyle}>
                Last name:
              </DataTable.Title>
              <DataTable.Cell
                style={styles.userDetailsContent}
                textStyle={styles.userDetailsContentTextStyle}>
                {contact.lastName}
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Title
                style={styles.userDetailsTitle}
                textStyle={styles.userDetailsTitleTextStyle}>
                Maiden name:
              </DataTable.Title>
              <DataTable.Cell
                style={styles.userDetailsContent}
                textStyle={styles.userDetailsContentTextStyle}>
                {contact.maidenName}
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Title
                style={styles.userDetailsTitle}
                textStyle={styles.userDetailsTitleTextStyle}>
                Birthday:
              </DataTable.Title>
              <DataTable.Cell
                style={styles.userDetailsContent}
                textStyle={styles.userDetailsContentTextStyle}>
                {contact.birthDate}
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Title
                style={styles.userDetailsTitle}
                textStyle={styles.userDetailsTitleTextStyle}>
                Gender:
              </DataTable.Title>
              <DataTable.Cell
                style={styles.userDetailsContent}
                textStyle={styles.userDetailsContentTextStyle}>
                {contact.gender}
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Title
                style={styles.userDetailsTitle}
                textStyle={styles.userDetailsTitleTextStyle}>
                Hair:
              </DataTable.Title>
              <DataTable.Cell
                style={styles.userDetailsContent}
                textStyle={styles.userDetailsContentTextStyle}>
                {contact.hair.color}, {contact.hair.type}
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Title
                style={styles.userDetailsTitle}
                textStyle={styles.userDetailsTitleTextStyle}>
                E-mail:
              </DataTable.Title>
              <DataTable.Cell
                style={styles.userDetailsContent}
                textStyle={styles.userDetailsContentTextStyle}>
                {contact.email}
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Title
                style={styles.userDetailsTitle}
                textStyle={styles.userDetailsTitleTextStyle}>
                Phone:
              </DataTable.Title>
              <DataTable.Cell
                style={styles.userDetailsContent}
                textStyle={styles.userDetailsContentTextStyle}>
                {contact.phone}
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Title
                style={styles.userDetailsTitle}
                textStyle={styles.userDetailsTitleTextStyle}>
                Address:
              </DataTable.Title>
              <DataTable.Cell
                style={styles.userDetailsContent}
                textStyle={styles.userDetailsContentTextStyle}>
                {contact.address.address}
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Title
                style={styles.userDetailsTitle}
                textStyle={styles.userDetailsTitleTextStyle}>
                City:
              </DataTable.Title>
              <DataTable.Cell
                style={styles.userDetailsContent}
                textStyle={styles.userDetailsContentTextStyle}>
                {contact.address.city}
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Title
                style={styles.userDetailsTitle}
                textStyle={styles.userDetailsTitleTextStyle}>
                ZIP:
              </DataTable.Title>
              <DataTable.Cell
                style={styles.userDetailsContent}
                textStyle={styles.userDetailsContentTextStyle}>
                {contact.address.postalCode}
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserDetail;
