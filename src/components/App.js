import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import {Home} from 'pages/Home';

import Register from 'pages/Register';

export const App=()=>{
    return (
<Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route
          path="/register"
          element={
           <Register /> 
          }
        />
    </Route>
</Routes>
    )
}