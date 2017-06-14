import relayTestingUtils from 'relay-testing-utils';
import { mount } from 'enzyme';
import City from './index';

const City_item = {
  _id: 1
}

describe('map should', () => {
  const elJson = mount(
    relayTestingUtils.wrapRelay(<City {...City_item} />)
   );
  it('match a snapshot', () => {
    //expect(elJson).toMatchSnapshot();
  });
});
