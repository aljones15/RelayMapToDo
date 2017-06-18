const relay = jest.genMockFromModule('react-relay');

relay.createFragmentContainer = (c) => c;

module.exports = relay;
