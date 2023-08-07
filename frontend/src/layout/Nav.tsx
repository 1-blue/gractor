/** 2023/08/07 - 네비게이션 컨텐츠를 감싸는 컴포넌트 - by 1-blue */
const Nav: React.FC<React.PropsWithChildren> = ({ children }) => (
  <nav>{children}</nav>
);

export default Nav;
