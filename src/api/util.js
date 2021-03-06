
import config from './config'
const basePath = config.api.base_path
const whitelist = `${basePath}jokes/random`

export function saveDataToStorage (path, data) {
  try {
    let obj = {
      data: data,
      created: new Date().getTime()
    }
    let dataString = JSON.stringify(obj)
    sessionStorage.setItem(path, dataString)
  } catch (error) {
    console.log('failed save to storage', error)
  }
}

export function checkDataFromStorage (path, checkWhitelist) {
  let res = null
  if (checkWhitelist && path.indexOf(whitelist) >= 0) return res
  try {
    let sessionDataString = sessionStorage.getItem(path)
    if (sessionDataString) {
      let temp = JSON.parse(sessionDataString)
      console.log('session', temp)
      if (temp.created) {
        res = temp.data
      }
    }
  } catch (error) {
    console.log('failed read from storage', error)
  }
  return res
}
