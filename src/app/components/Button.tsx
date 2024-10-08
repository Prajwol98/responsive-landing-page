import Image from "next/image";

type buttonProps = {
  varient: string;
  type: "button" | "submit";
  title: string;
  icon?: string;
};

const Button = ({ type, title, icon, varient }: buttonProps) => {
  return (
    <button
      type={type}
      className={` hidden md:flex gap-2 rounded-5xl  ${varient}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24}></Image>}
      <label>{title}</label>
    </button>
  );
};

export default Button;
