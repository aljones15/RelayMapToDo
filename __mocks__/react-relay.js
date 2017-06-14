import relayTestingUtils from 'relay-testing-utils'
const relay = jest.genMockFromModule('react-relay');
 
export default relayTestingUtils.relayMock(relay);
