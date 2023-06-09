import "./button.css";
export const Button = ({ title, classes, func }) => {
  return (
    <button className={classes} onClick={func}>
      {title}
    </button>
  );
};
