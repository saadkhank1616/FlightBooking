import React from 'react';
import {COLORS, SCREEN} from '@enums';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as ui from '@modules';
import {enableScreens} from 'react-native-screens';
// import {HomeTabicon, ListTabicon, NotiTabicon, ProfileTabicon} from '@common';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

enableScreens();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptionStyles = {
  headerShown: false,
  tabBarActiveTintColor: '#626262',
  tabBarInactiveTintColor: '#979797',
};

const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={SCREEN.Home} component={ui.HomeScreen} />
  </Stack.Navigator>
);
const ListStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={SCREEN.List} component={ui.ListScreen} />
  </Stack.Navigator>
);
const NotiStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      name={SCREEN.Notification}
      component={ui.NotificationScreen}
    />
  </Stack.Navigator>
);
const ProfileStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={SCREEN.Profile} component={ui.ProfileScreen} />
  </Stack.Navigator>
);

// const BottomTabNavigation = () => {
//   return (
//     <Tab.Navigator screenOptions={screenOptionStyles}>
//       <Tab.Screen
//         name="Home"
//         component={HomeStack}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({color}) => <HomeTabicon color={color} />,
//         }}
//       />
//       <Tab.Screen
//         name="List"
//         component={ListStack}
//         options={{
//           tabBarLabel: 'Location',
//           tabBarIcon: ({color}) => <ListTabicon color={color} />,
//         }}
//       />
//       <Tab.Screen
//         name="Noti"
//         component={NotiStack}
//         options={{
//           tabBarLabel: 'Finance',
//           tabBarIcon: ({color}) => <NotiTabicon color={color} />,
//         }}
//       />
//       <Tab.Screen
//         name="profile"
//         component={ProfileStack}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({color}) => <ProfileTabicon color={color} />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
// export default BottomTabNavigation;

// const Tab = createBottomTabNavigator();

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const Icon = options.tabBarIcon;

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[styles.tabButton, isFocused && styles.activeTabButton]}>
            <View style={styles.iconAndLabel}>
              {Icon && <Icon color={isFocused ? '#0B6E4F' : '#B0B0B0'} />}
              {isFocused && (
                <Text
                  style={[
                    styles.tabLabel,
                    {color: isFocused ? '#0B6E4F' : '#B0B0B0'},
                  ]}>
                  {label}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptionStyles}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/fonts/hometab.png')}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={ListStack}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/fonts/listtab.png')}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Noti"
        component={NotiStack}
        options={{
          tabBarLabel: 'Noti',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/fonts/Notificationstab.png')}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/fonts/profiletab.png')}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  tabBarContainer: {
    // position: 'absolute',
    flexDirection: 'row',
    height: 64,
    backgroundColor: 'white',
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
    // paddingHorizontal: 16,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowOffset: {width: 0, height: -3},
    // shadowRadius: 6,
    // elevation: 4,
    borderRadius: 32,
    bottom: 20,
    marginHorizontal: 10,
    // width: 343,
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    // marginLeft: 20,
    padding: 10,
    // marginLeft: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 8,
    // marginHorizontal: 4,
    // padding: 20,
    // marginLeft: 40,
    // marginTop: 10,
    // marginBottom: 10,
    // paddingLeft: 10,
    // padding: 15,
  },
  activeTabButton: {
    backgroundColor: '#DCE3DE',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconAndLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    marginLeft: 6, // Add space between the icon and the label
    color: COLORS.green,
  },
  icon: {
    // width: 24,
    // height: 24,
  },
});
