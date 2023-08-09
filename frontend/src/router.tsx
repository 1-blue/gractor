import {
  HomeIcon as OHomeIcon,
  MapIcon as OMapIcon,
  ClipboardDocumentListIcon as OClipboardDocumentListIcon,
  PencilSquareIcon as OPencilSquareIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as SHomeIcon,
  MapIcon as SMapIcon,
  ClipboardDocumentListIcon as SClipboardDocumentListIcon,
  PencilSquareIcon as SPencilSquareIcon,
} from "@heroicons/react/24/solid";

import Home from "@src/pages/Home";
import Dashboard from "@src/pages/Dashboard";
import Status from "@src/pages/Status";
import Manage from "@src/pages/Manage";

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
  {
    path: "/dashboard",
    label: "대시보드",
    element: <Dashboard />,
    icon: [<OMapIcon className="h-6 w-6" />, <SMapIcon className="h-6 w-6" />],
  },
  {
    path: "/status",
    label: "현황",
    element: <Status />,
    icon: [
      <OClipboardDocumentListIcon className="h-6 w-6" />,
      <SClipboardDocumentListIcon className="h-6 w-6" />,
    ],
  },
  {
    path: "/manage",
    label: "관리",
    element: <Manage />,
    icon: [
      <OPencilSquareIcon className="h-6 w-6" />,
      <SPencilSquareIcon className="h-6 w-6" />,
    ],
  },
];
