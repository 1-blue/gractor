import { HomeIcon as OHomeIcon } from "@heroicons/react/24/outline";
import { HomeIcon as SHomeIcon } from "@heroicons/react/24/solid";

import Home from "@src/pages/Home";

export interface RouterElement {
  /** 페이지 경로 */
  path: string;
  /** 네비게이션바에 표시할 페이지 이름 */
  label?: string;
  /** 페이지 엘리먼트 */
  element: React.ReactNode;
  /** 페이지 아이콘 */
  icon?: [React.ReactNode, React.ReactNode];
}

/** 2023/08/07 - router elements ( 여러가지 처리를 위해 사용 ) - by 1-blue */
export const routerElements: RouterElement[] = [
  {
    path: "/",
    label: "메인",
    element: <Home />,
    icon: [
      <OHomeIcon className="h-6 w-6" />,
      <SHomeIcon className="h-6 w-6" />,
    ],
  },
];
