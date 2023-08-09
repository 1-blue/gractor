/** 2023/08/07 - 헤더 컨텐츠를 감싸는 컴포넌트 - by 1-blue */
const Header: React.FC<React.PropsWithChildren> = ({ children }) => (
  <header>{children}</header>
);

export default Header;
