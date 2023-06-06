import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks';
// import css from './AppBar.module.css';
import { Wrapper } from './AppBar.styled';

export const AppBar = () => {
//   const { isLoggedIn } = useAuth();

  return (
    <Wrapper >
      <Navigation />
      <UserMenu /> 
       <AuthNav />
    </Wrapper>
  );
};
