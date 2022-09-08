// Dependencies
import { useState } from 'react'

/* 
    @description - This hooks will hide and show the menu
*/
export const useMenu = () => {
  const [isShow, setIsShow] = useState(false)

  const isShowEvent = () => {
    setIsShow(!isShow)
  }

  return [isShow, isShowEvent]
}
