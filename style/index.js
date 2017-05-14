/**
 * makes a simple flex box setting
 * @ param {Number} grow - flex-grow num
 * @ param {Number} shrink - flex-shrink num
 * @ param {String} basis  the smallest size the flex box can reach
 */
export const flex = function(grow, shrink, basis){
  return {
    display: 'flex',
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis
  };
};

/**
 * flatten takes any number of objects and merges then into a single object
 * @ param {[Object]} ...args the styleobjects to be flattened
 */
export const flatten = function(...args){
  return args.reduce((acc, cur) => Object.assign(acc, cur), {});
}
