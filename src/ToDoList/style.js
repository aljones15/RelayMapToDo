import { flatten } from '../../style/';

export const ToDoStyle = {
  display: 'flex',
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: 'column',
  padding: '0px',
};

export const ToDoAddStyle = {
  display: 'flex',
  flexGrow: 1,
  flexShrink: 1,
  color: '#FFFFFF',
  flexDirection: 'column',
  height: '50%'
};

export const ToDoRowStyle = {
  display: 'flex',
  flexGrow: 1,
  flexShrink: 1,
  padding: '1px'
}

export const AddToTitle = flatten({alignSelf: 'center'}, ToDoRowStyle);
export const AddToDoInput = flatten(ToDoRowStyle);
export const AddToDoSubmit = flatten(ToDoRowStyle);
