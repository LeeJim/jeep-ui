export default {
  isEmpty(target) {
    if (typeof target === 'object') {
      return (Array.isArray(target) && target.length === 0) || Object.keys(target).length === 0
    } else if (typeof target === 'function') {
      return target.length === 0
    }
    return target === '' || target === 0 || target === undefined
  }
}
