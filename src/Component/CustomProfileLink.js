import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const CustomProfileLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
        <Link
          style={{ textDecoration: match ? "none" : "none" , color: match? "white" : "rgb(26, 24, 24)", padding:"8px" , backgroundColor: match? "rgb(255, 65, 141)" : "transparent" , borderRadius:"10px"}}
          to={to}
          {...props}
        >
          {children}
        </Link>
       
      </div>
    );
};

export default CustomProfileLink;