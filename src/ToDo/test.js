import relayTestingUtils from 'relay-testing-utils';
import { mount } from 'enzyme';
import ToDo from './index';

const todo = {
  text: "test",
  likes: 1,
  _id: 1
};

describe('ToDo Should', () => {
  const elJson = mount(
    relayTestingUtils.wrapRelay(<ToDo {...todo} />)
  );
  it('match a snapshot', () => {
    //expect(elJson).toMatchSnapshot();
  });
});
