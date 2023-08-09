import MyRouterProvider from "@src/providers/MyRouterProvider";
import MyReactQueryProvider from "@src/providers/MyReactQueryProvider";

const App: React.FC = () => (
  <MyReactQueryProvider>
    <MyRouterProvider />
  </MyReactQueryProvider>
);

export default App;
