import type { FC, AnchorHTMLAttributes } from "react";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
}

export const NavLink: FC<NavLinkProps> = ({
  className = "",
  isActive = false,
  ...props
}) => (
  <a
    {...props}
    aria-current={isActive ? "page" : undefined}
    className={`
      font-semibold
      text-base md:text-lg lg:text-xl
      text-yellow-400 hover:text-yellow-300
      transition-colors duration-200
      ${isActive ? "text-yellow-300 underline" : ""}
      ${className}
    `}
  />
);
