import { flatten } from '../../style/';
import { StyleSheet } from 'aphrodite';

export const style = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  pagBtn: {
    display: 'flex',
    margin: '1rem',
    padding: '1rem',
    flexGrow: 1,
    flexShrink: 1
  },
  toDo: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column',
    padding: '0px',
    color: 'white'
  },
  toDoAdd: {
    display: 'flex',
    flexGrow: 2,
    flexShrink: 2,
    color: '#FFFFFF',
    flexDirection: 'column',
  },
  toDoRow: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    padding: '1px',
    textAlign: 'center'
  },
  selfCenter: {
   alignSelf: 'center'
  }
});

export const ToDoStyle = {
  display: 'flex',
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: 'column',
  padding: '0px',
};

export const ToDoAddStyle = {
  display: 'flex',
  flexGrow: 2,
  flexShrink: 2,
  color: '#FFFFFF',
  flexDirection: 'column',
};

export const ToDoRowStyle = {
  display: 'flex',
  flexGrow: 1,
  flexShrink: 1,
  padding: '1px'
}

export const AddToTitle = flatten({alignSelf: 'center'}, ToDoRowStyle);
