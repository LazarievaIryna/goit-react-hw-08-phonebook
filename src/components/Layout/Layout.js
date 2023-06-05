// import PropTypes from 'prop-types';
// import {Wrapper} from './Layout.styled'
// export const Layout = ({ children }) => {
//   return <Wrapper >{children}</Wrapper>;
// };
// Layout.propTypes = {
  
//   children: PropTypes.array.isRequired,
   
//   }

import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Wrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Wrapper>
  );
};
