import uuid from 'react-native-uuid';

export const FieldDataList = [
  {
    id: uuid.v4(),
    title: 'Text',
    type: 'string',
  },
  {
    id: uuid.v4(),
    title: 'Checkbox',
    type: 'boolean',
  },
  {
    id: uuid.v4(),
    title: 'Date',
    type: 'date',
  },
  {
    id: uuid.v4(),
    title: 'Number',
    type: 'number',
  },
];
