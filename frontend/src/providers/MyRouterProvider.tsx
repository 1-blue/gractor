import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routerElements } from "@src/router";

import GeneralLayout from "@src/layout/GeneralLayout";

import Error from "@src/pages/Error";

/** 2023/06/19 - router ( <RouterProvider>에 사용 ) - by 1-blue */
const router = createBrowserRouter(
  routerElements.map(({ path, element }) => ({
    path,
    element: <GeneralLayout>{element}</GeneralLayout>,
    errorElement: <Error />,
  }))
);

/** 2023/08/07 - react-router-dom provider - by 1-blue */
const MyRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default MyRouterProvider;
