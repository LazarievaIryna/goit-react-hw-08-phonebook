// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';

import { Username, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  // const dispatch = useDispatch();
  // const { user } = useAuth();

  return (
    <Wrapper >
      <Username >Welcome, </Username>
      <button type="button" >
        Logout
      </button>
    </Wrapper>
  );
};
