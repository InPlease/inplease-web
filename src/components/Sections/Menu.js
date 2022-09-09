// Dependencies
import React, { useEffect } from 'react';

const MenuComponent = ({ menuTexts }) => {
  return (
    <ul className="menu">
      {menuTexts.map((e) => (
        <li key={e}>
          {e}
          <div></div>
        </li>
      ))}
    </ul>
  );
};

export default MenuComponent;
