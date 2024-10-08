import { useSelector } from 'react-redux';

export function useAuth() {
  const { email, token } = useSelector(state => state.auth);

  return {
    isAuth: !!email,
    email,
    token,
  };
}
