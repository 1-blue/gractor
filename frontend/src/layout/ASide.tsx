import { Link } from "react-router-dom";

/** 2023/08/07 - 사이드 컨텐츠를 감싸는 컴포넌트 - by 1-blue */
const ASide: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <aside className="sticky top-0 flex-shrink-0 md:w-[300px] h-auto md:h-screen bg-main-bg border-r-2 border-main-line border-b-main-line overflow-y-auto ">
      <Link to="/" className="block border-b-2 border-b-main-line">
        <img src="/logo.svg" alt="로고" className="mx-auto py-10" />
      </Link>

      {children}
    </aside>
  );
};

export default ASide;
