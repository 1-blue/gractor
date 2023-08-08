import { twMerge } from "tailwind-merge";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 이름 */
  label: string;
  /** 기본 디자인 */
  primary?: boolean;
  /** 성공 디자인 */
  success?: boolean;
  /** 위험 디자인 */
  danger?: boolean;
}

/** 2023/08/07 - button 컴포넌트 - by 1-blue */
const Button: React.FC<Props> = ({
  label,
  primary,
  success,
  danger,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={twMerge(
        "px-3 py-2 rounded-md transition-colors",
        primary &&
          "bg-main-500 hover:bg-main-500/80 focus:outline-none focus:ring-2 focus:ring-main-500 focus:ring-offset-4 focus:ring-offset-main-bg",
        success &&
          "text-blue-500 border border-blue-500 hover:border-blue-600 hover:text-blue-600 focus:border-blue-700 focus:text-blue-700",
        danger &&
          "text-red-500 border border-red-500 hover:border-red-600 hover:text-red-600 focus:border-red-700 focus:text-red-700",
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
