import {Text, View} from 'react-native';
import React from 'react';
import {NotifcationLogoIcon} from '@assets'; // Assuming this is your notification logo
import {styles} from './style';

export const NotiCard = ({title, time, description}) => {
  return (
    <View style={styles.container}>
      <View>
        <NotifcationLogoIcon />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.airlines}>{title}</Text>
          <Text>{time}</Text>
        </View>
        <View>
          <Text style={styles.text}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

// import React from 'react';
// import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
// import {CrossIcon, NotifcationLogoIcon} from '@assets'; // Assuming this is your notification logo
// import {Swipeable} from 'react-native-reanimated';

// export const NotiCard = ({title, time, description, type}) => {
//   // Render the cross icon when swiped
//   const renderRightActions = () => (
//     <TouchableOpacity
//       style={styles.crossButton}
//       onPress={() => console.log('Delete notification')}>
//       <CrossIcon />
//     </TouchableOpacity>
//   );

//   return (
//     <Swipeable renderRightActions={renderRightActions}>
//       <View style={styles.container}>
//         <View>
//           <NotifcationLogoIcon />
//         </View>
//         <View style={styles.innerContainer}>
//           <View style={styles.textContainer}>
//             <Text style={styles.airlines}>{title}</Text>
//             <Text>{time}</Text>
//           </View>
//           <View>
//             <Text style={styles.text}>{description}</Text>
//           </View>
//         </View>
//       </View>
//     </Swipeable>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 15,
//     backgroundColor: 'white',
//     flexDirection: 'row',
//     marginHorizontal: 10,
//     borderRadius: 10,
//     alignItems: 'center',
//     gap: 20,
//     marginBottom: 10,
//   },
//   textContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '90%',
//   },
//   innerContainer: {
//     justifyContent: 'space-between',
//   },
//   airlines: {
//     color: '#022541',
//     fontSize: 14,
//   },
//   text: {
//     color: '#022541',
//   },
//   crossButton: {
//     backgroundColor: '#f8d7da', // Light red background
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 70,
//     height: '100%',
//     borderRadius: 10,
//   },
// });
