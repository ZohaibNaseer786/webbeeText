import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DatePickerModal } from 'react-native-paper-dates';
import { theme } from '~theme';

interface DateComponentProps {
  title: string;
  iconName: string;
  value: string;
  item: any;
  dateObj: (date: date) => void;
}

const DateComponent: React.FC<DateComponentProps> = ({
  title,
  value,
  dateObj,
}) => {
  const dateCheck = new Date();
  dateCheck.setDate(dateCheck.getDate());

  const [date, setDate] = React.useState();

  const [open, setOpen] = useState(false);

  const onDismiss = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback(
    params => {
      setOpen(false);

      setDate(params.date);
      dateObj(params.date);
    },
    [setOpen, setDate],
  );

  return (
    <>
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.fieldSet}>
          <Text style={styles.legend}>{title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* <Feather
              name={iconName}
              size={24}
              color={theme.colors.textPlaceholder}
            /> */}
            <Text numberOfLines={1} style={styles.valueTxt}>
              {value}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <DatePickerModal
        locale="en"
        mode="single"
        visible={open}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
      />
    </>
  );
};

export default DateComponent;

const styles = StyleSheet.create({
  fieldSet: {
    width: '90%',
    padding: 16,
    margin: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 10,
    paddingHorizontal: 8,
    color: theme.colors.secondary,
    backgroundColor: theme.colors.white,
  },
  valueTxt: {
    fontSize: 14,
    lineHeight: 17.07,
    marginRight: 8,
    padding: 8,
  },
});
