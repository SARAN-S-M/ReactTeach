//  /* eslint-disable */
//  import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";

//  import Login from "./login";
 
//  function AppRoutes() {
//      return (
//         <Router>
//          <Routes>
//             <Route path="/" element={<Login />}/>
//          </Routes>
//          </Router>
//      );
//  };
  
//  function ProtectedRoutes() {
//      return (
//          <Routes>
//               <Route path="/" element={<ProtectedRoute />}>
//               </Route>
//           </Routes>
//      );
//  }
 
//  function ProtectedRoute() { 
//     result = true;
//      return (result ? <Outlet /> : <Navigate to="/" />);
//  };
 
//  export { AppRoutes, ProtectedRoutes};
 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Home from './Home';

function AppRoutes() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
        </Router>
    );
}

export default AppRoutes;