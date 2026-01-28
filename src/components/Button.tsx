import './Button.css'; 

export const Button = ({
  className = '',
  ...props
}) => {
  return (
    <a
      {...props}
      className={`custom-frame-button relative px-15 py-5 text-sm font-semibold text-white cursor-pointer ${className}`}
    />
  );
};
