import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`flex justify-center  items-center bg-[#F9F9F9] ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
