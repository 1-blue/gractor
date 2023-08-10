/** 2023/08/07 - 메인 컨텐츠를 감싸는 컴포넌트 - by 1-blue */
const Main: React.FC<React.PropsWithChildren> = ({ children }) => (
  <main className="max-w-[1024px] mx-auto p-8 w-full relative">{children}</main>
);

export default Main;
