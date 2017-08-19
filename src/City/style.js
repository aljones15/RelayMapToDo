const K_WIDTH = 40;
const K_HEIGHT = 40;
import { StyleSheet } from 'aphrodite';

// initially any map object has left top corner at lat lng coordinates
// it's on you to set object origin to 0,0 coordinates

export const style = StyleSheet.create({
  Icon: {
    position: 'absolute',
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT / 2,
    border: '5px solid rgba(0,0,0,0)',
    borderRadius: K_HEIGHT,
    backgroundColor: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4,
    cursor: 'context-menu',
  },
  List: {
    position: 'absolute',
    width: K_WIDTH * 10,
    height: K_HEIGHT * 10,
    left: (-K_WIDTH * 10) / 2,
    top: (-K_HEIGHT * 10) / 2,
    backgroundColor: 'rgba(0,0,0,0.2)',
    overflow: 'auto'
  },
  Container: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    position: 'relative',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    overflow: 'auto'
  },
  CloseBar: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    height: '2rem',
    maxHeight: '2rem',
    width: K_WIDTH * 10,
    maxWidth: '100%',
    backgroundColor: 'rgba(10,10,10,0.4)',
    cursor: 'context-menu',
    fontSize: '1rem',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
