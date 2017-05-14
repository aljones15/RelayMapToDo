import React from 'react';
import renderer from 'react-test-renderer';

export class mockGoogleMap extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    <div>test</div>
  }
}

jest.mock('google-map-react', () => { return new mockGoogleMap } );

import Map from './index';

describe('map should', () => {
  const mapJson = renderer.create(<Map />).toJSON();
  it('match a snapshot', () => {
    expect(mapJson).toMatchSnapshot();
  });
});
