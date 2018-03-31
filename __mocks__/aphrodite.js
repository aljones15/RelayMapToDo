const aphrodite = jest.genMockFromModule('aphrodite');
aphrodite.css = jest.fn(classObj => 'test_class_name');
aphrodite.StyleSheet = {
  create: jest.fn(classObj => classObj),
};
module.exports = aphrodite;
