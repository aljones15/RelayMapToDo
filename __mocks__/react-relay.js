const relay = jest.genMockFromModule('react-relay');

relay.createFragmentContainer = (c) => c;
relay.createPaginationContainer = (c) => c;

module.exports = relay;
