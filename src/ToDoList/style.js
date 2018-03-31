import { StyleSheet } from 'aphrodite';
import { flatten } from '../../style/';

export const style = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pagBtn: {
    display: 'flex',
    margin: '1rem',
    padding: '1rem',
    flexGrow: 1,
    flexShrink: 1,
  },
  toDo: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column',
    padding: '0px',
    color: 'white',
  },
  bordered: {
    border: '1px solid black',
  },
  toDoAdd: {
    display: 'flex',
    flexGrow: 2,
    flexShrink: 2,
    height: '30%',
    color: '#FFFFFF',
    flexDirection: 'column',
    padding: '3px',
  },
  toDoRow: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    padding: '1px',
    textAlign: 'center',
  },
  selfCenter: {
    alignSelf: 'center',
  },
});

export const ToDoRowStyle = {
  display: 'flex',
  flexGrow: 1,
  flexShrink: 1,
  padding: '1px',
};

export const AddToTitle = flatten({ alignSelf: 'center' }, ToDoRowStyle);
