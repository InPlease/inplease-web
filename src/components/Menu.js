// Dependencies
import React, { useEffect } from 'react'

// Hooks
import { useTranslate } from '../hooks/useTranslate'

const MenuComponent = ({ menuTexts }) => {
  return (
    <ul>
      {menuTexts.map((e) => (
        <li>{e}</li>
      ))}
    </ul>
  )
}

export default MenuComponent
