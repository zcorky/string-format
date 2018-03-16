/**
 * string format for js, like python
 * @param {*} map 
 */

String.prototype.format = function format(map = {}) {
  const args = Array.prototype.slice.call(arguments);
  if (args.length > 1) {
    let index = 0;
    return this.replace(/{([^}]*)}/g, () => {
      return typeof args[index] !== 'undefined' ? args[index++] : '';
    });
  }

  if (Array.isArray(map)) {
    let index = 0;
    return this.replace(/{([^}]*)}/g, () => {
      return typeof map[index] !== 'undefined' ? map[index++] : '';
    });
  }

  return this.replace(/{([^}]*)}/g, (_, key) => {
	  return typeof map[key] !== 'undefined' ? map[key] : '';
  });
}