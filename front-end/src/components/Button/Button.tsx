import styles from "./Button.module.css";

interface ButtonProps {
  children: string;
  color?: "primary" | "primary" | "success";
  onClick: () => void;
}
const Button = ({ children, color = "success", onClick }: ButtonProps) => {
  return (
    <>
      <button type="button" className={styles[color]} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

console.log("styles", styles);
export default Button;
