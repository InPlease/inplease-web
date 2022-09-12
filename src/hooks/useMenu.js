// Dependencies
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
/* 
    @description - This hooks will hide and show the menu
*/
export const useMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    location.pathname === '/menu' ? setIsShow(true) : setIsShow(false);
  }, [location]);

  const goMenuManager = () => {
    setIsShow(!isShow);
    if (!isShow) {
      navigate('/menu');
      return;
    }
    navigate(-1);
  };

  return [isShow, goMenuManager];
};
