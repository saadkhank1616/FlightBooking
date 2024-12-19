import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, Switch} from 'react-native';
import {styles} from './style';
import {LeftIcon, MiddleIcon, RightIcon} from '@assets';
import {Button} from '@common/button';
import {Spacer} from '@common/spacer';
import {hp} from '@enums';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  // isSameDay,
  // getWeekday,
  // parse,
} from 'date-fns';

export const CustomCalendar = ({onPress}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState({});
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  // Get start and end date of the current month
  const startOfCurrentMonth = startOfMonth(currentDate);
  const endOfCurrentMonth = endOfMonth(currentDate);

  // Get days of the current month
  const daysInMonth = eachDayOfInterval({
    start: startOfCurrentMonth,
    end: endOfCurrentMonth,
  });

  // Get the weekday labels
  const weeks = ['Su', 'M', 'T', 'W', 'Th', 'F', 'S'];

  const onDateSelect = day => {
    if (!isRoundTrip) {
      setSelectedDates({
        [format(day, 'yyyy-MM-dd')]: {selected: true, color: '#4F755B'},
      });
    } else {
      if (Object.keys(selectedDates).length < 2) {
        setSelectedDates(prev => ({
          ...prev,
          [format(day, 'yyyy-MM-dd')]: {selected: true, color: '#FCB21C'},
        }));
      } else {
        setSelectedDates({
          [format(day, 'yyyy-MM-dd')]: {selected: true, color: '#4F755B'},
        });
      }
    }
  };

  const renderDay = ({item}) => {
    const isSelected = selectedDates[format(item, 'yyyy-MM-dd')]?.selected;
    const selectedColor =
      selectedDates[format(item, 'yyyy-MM-dd')]?.color || 'transparent';

    // Determine label based on the position of the selected date
    const selectedKeys = Object.keys(selectedDates);
    let label = '';
    if (selectedKeys[0] === format(item, 'yyyy-MM-dd')) {
      label = 'Depart';
    } else if (selectedKeys[1] === format(item, 'yyyy-MM-dd')) {
      label = 'Return';
    }

    return (
      <TouchableOpacity
        style={[
          styles.day,
          isSelected && {
            backgroundColor: selectedColor,
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 5,
          },
        ]}
        onPress={() => onDateSelect(item)}>
        <Text style={[styles.dayText, isSelected && {color: '#fff'}]}>
          {format(item, 'd')}
        </Text>
        {label ? <Text style={styles.label}>{label}</Text> : null}
      </TouchableOpacity>
    );
  };

  const handleMonthChange = direction => {
    setCurrentDate(prevDate =>
      direction === 'next' ? addMonths(prevDate, 1) : subMonths(prevDate, 1),
    );
  };

  const handleRoundTripToggle = () => {
    setIsRoundTrip(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <Spacer height={hp(2)} />
      {/* Month and Navigation */}
      <View style={styles.header}>
        <Text style={styles.monthText}>{format(currentDate, 'MMMM yyyy')}</Text>
        <View style={styles.navButtons}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => handleMonthChange('prev')}>
            <LeftIcon />
          </TouchableOpacity>
          <MiddleIcon />
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => handleMonthChange('next')}>
            <RightIcon />
          </TouchableOpacity>
        </View>
      </View>
      <Spacer height={hp(3)} />

      {/* Inputs for Depart and Return */}
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Depart</Text>
          <Text style={styles.inputText}>
            {Object.keys(selectedDates)[0] || 'Choose date'}
          </Text>
        </View>
        {isRoundTrip && (
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Return</Text>
            <Text style={styles.inputText}>
              {Object.keys(selectedDates)[1] || 'Choose date'}
            </Text>
          </View>
        )}
      </View>
      <Spacer height={hp(4)} />

      {/* Weekdays */}
      <View style={styles.weekContainer}>
        {weeks.map(day => (
          <Text key={day} style={styles.weekDay}>
            {day}
          </Text>
        ))}
      </View>

      {/* Calendar Grid */}
      <FlatList
        data={daysInMonth}
        numColumns={7}
        keyExtractor={item => format(item, 'yyyy-MM-dd')}
        renderItem={renderDay}
        contentContainerStyle={styles.calendarGrid}
      />
      <Spacer height={hp(5)} />

      {/* Round Trip Toggle */}
      <View style={styles.roundTripContainer}>
        <Text style={styles.roundTripText}>Round trip</Text>
        <View style={styles.switchContainer}>
          <Switch
            value={isRoundTrip}
            onValueChange={handleRoundTripToggle}
            trackColor={{false: '#ddd', true: 'white'}}
            thumbColor={isRoundTrip ? '#4F755B' : '#f4f3f4'}
            style={styles.switch}
          />
        </View>
      </View>
      <Spacer height={hp(6)} />
      <Button title="Done" onPress={onPress} />
      <Spacer />
    </View>
  );
};
