// Dependencies
import { useTranslation } from 'react-i18next'

export const useTranslate = (keys) => {
  const [t] = useTranslation()
  const translation = () => {
  const tmpObj = {}

    for (let i = 0; i < keys.length; i++) {
      Object.assign(tmpObj, {
        [`${keys[i].word}`]: t(keys[i].word, {
          returnObjects: keys[i].isObject,
        }),
      })
    }

    return tmpObj
  }

  return [translation]
}
