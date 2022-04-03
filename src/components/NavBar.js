import React from 'react';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


export default function NavBar() {
  return (
    /**Reference: https://getbootstrap.com/docs/5.1/examples/headers/#
     * The tenth header at the bottom, but changed to navbar-expand-sm,
     * and changed all <a> tag to NavLink.
     */ 

    <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Tenth navbar example">
     <div className="container-fluid">
       <a class="navbar-brand" href="/">Navbar</a>
       <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="navbar-collapse justify-content-md-center collapse" id="navbarsExample08">
         <ul className="navbar-nav">
           <li className="nav-item">
            <NavLink className="nav-link px-5" extact to="/" activeClassName="active">Home</NavLink>
           </li>
           <li className="nav-item">
            <NavLink className="nav-link px-5" extact to="/rule" activeClassName="active">Rule</NavLink>
           </li>
           {/* <li className="nav-item">
             <a className="nav-link disabled">Disabled</a>
           </li> */}
           <li className="nav-item dropdown">
             <NavLink className="nav-link dropdown-toggle px-5" extact to="/game" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false" activeClassName="active">Game</NavLink>
             {/* <a className="nav-link dropdown-toggle" href="#" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a> */}
             
             <ul className="dropdown-menu" aria-labelledby="dropdown08">
               {/* <li><a className="dropdown-item" href="#">Action</a></li>
               <li><a className="dropdown-item" href="#">Another action</a></li>
               <li><a className="dropdown-item" href="#">Something else here</a></li> */}

               <li><NavLink className="dropdown-item" to="/game">Easy</NavLink></li>
               <li><NavLink className="dropdown-item" to="/game">Medium</NavLink></li>
               <li><NavLink className="dropdown-item" to="/game">Hard</NavLink></li>
             </ul>
           </li>
         </ul>
       </div>
     </div>
    </nav> 
  
  )
};



// <header>
// <div className="px-3 py-2 bg-dark text-white">
//   <div className="container">
//     <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//       {/* <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
//         <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
//       </a> */}

//       <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
//         <li>
//           {/* <a href="#" className="nav-link text-secondary">
//             <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"></use></svg>
//             Home
//           </a> */}

//           <NavLink className="nav-link text-white">
//             <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#home"></use></svg>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           {/* <a href="#" className="nav-link text-white">
//             <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"></use></svg>
//             Dashboard
//           </a> */}
//           <NavLink className="nav-link text-white">
//             <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#speedometer2"></use></svg>
//             Rule
//           </NavLink>
//         </li>
//         <li>
//           <NavLink className="nav-link text-white">
//             <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#grid"></use></svg>
//             Game
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>
// </header>