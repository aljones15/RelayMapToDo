import { flex, flatten } from '../../style';

const containerSize = flex(1, 1);
const container = {
  color: 'rgba(255,255,255,1.0)',
  backGroundColor: 'rgba(55, 55, 55, 1.0)',
};

export default flatten(containerSize, container);
