import { getAuth, signOut } from 'firebase/auth';
import { ButtonRegistration } from 'components/UserMenu/UserMenu.styled';

import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/auth/authSlice';
import { toast } from 'react-hot-toast';
import { clearFavorites } from '../../redux/favorites/favoritesSlice';

export const LogOut = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const auth = getAuth();
   
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(clearFavorites());
        toast.success('Logout successful');
      })
      .catch(error => {
        toast.error('Sorry, an error occurred. Please try again');
      });
  };
  return (
    <>
      <ButtonRegistration onClick={handleClick}>Logout</ButtonRegistration>{' '}
    </>
  );
};
