import { flatten, flex } from './index';

function testFlexBox(box, grow, shrink){
  expect(box.flexGrow).toBe(grow);
  expect(box.flexShrink).toBe(shrink);
  expect(box.display).toBe('flex');
};

describe('should return a flex box with', () => {
  it('grow 1 shrink 1', () => {
    const box = flex(1,1);
    testFlexBox(box, 1, 1);
  }),
  it('grow 1 shrink 2', () => {
    const box = flex(1,2);
    testFlexBox(box,1, 2);
  }),
  it('grow 2 shrink 2 basis 5rem', () => {
    const box = flex(2,2,'5rem');
    testFlexBox(box, 2, 2);
    expect(box.flexBasis).toBe('5rem');
  })
});

describe('should flatten objects', () => {
  it('to one object', () => {
    const box = flex(1,1);
    const colors = {
      backGroundColor: '#FFFFFF',
      color: '#000000'
    };
    const result = flatten(box, colors);
    testFlexBox(result, 1, 1);
    expect(result.backGroundColor).toBe('#FFFFFF');
    expect(result.color).toBe('#000000');
  }),
  it('and merge keys', () => {
    const box1 = flex(1,1);
    const box2 = flex(2,2);
    const result = flatten(box1, box2);
    testFlexBox(result, 2, 2);
  })

});
