import Header from "@src/layout/Header";
import Nav from "@src/layout/Nav";
import Main from "@src/layout/Main";
import Footer from "@src/layout/Footer";

/** 2023/08/07 - 일반 레이아웃 컴포넌트 - by 1-blue */
const GeneralLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header>
        <Nav />
      </Header>

      <Main>{children}</Main>

      <Footer />
    </>
  );
};

export default GeneralLayout;
