// Dependencies
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
/* 
    @description - This hooks will hide and show the menu
*/
export const useMenu = () => {
  const navigate = useNavigate()
  const [isShow, setIsShow] = useState(false)

  const goMenuManager = () => {
    setIsShow(!isShow)
    if (!isShow) {
      navigate('/menu')
      return
    }
    navigate(-1)
  }

  return [isShow, goMenuManager]
}
