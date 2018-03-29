const mapToArray = (obj, fn) => {
  let keys = Object.keys(obj)
  let ret = []

  let len = keys.length
  for (let i = 0; i < len; i++) {
    let key = keys[i]
    ret = ret.concat([fn(key, obj[key])])
  }

  return ret
}

module.exports = mapToArray
