import { useLocation } from "react-router-dom";

import { routerElements } from "@src/router";

import NavLink from "@src/components/Nav/NavLink";

/** 2023/08/07 - 네비게이션 컴포넌트 - by 1-blue */
const Nav: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      {routerElements
        .filter((element): element is Required<typeof element> => true)
        .map(({ path, icon, label }) => (
          <NavLink
            key={path}
            path={path}
            icon={icon}
            label={label}
            isActive={
              path === "/" ? pathname === path : pathname.includes(path)
            }
          />
        ))}
    </nav>
  );
};

export default Nav;
