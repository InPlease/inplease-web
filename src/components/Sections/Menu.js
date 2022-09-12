// Dependenceis
import { Link } from 'react-router-dom';

const MenuComponent = ({ menuTexts }) => {
  return (
    <ul className="menu">
      {menuTexts.map((e) => (
        <li key={e.name}>
          <Link to={e.path}>{e.name}</Link>
          <div></div>
        </li>
      ))}
    </ul>
  );
};

export default MenuComponent;
