import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSProperties } from 'react';
import './button.scss';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'lg' | 'md' | 'sm';
  style?: CSSProperties;
  className?: string;
  icon?: IconProp;
}

export const Button = ({
  label,
  onClick = () => void 0,
  disabled = false,
  style = {},
  size = 'md',
  className = '',
  icon,
}: ButtonProps) => {
  return (
    <button
      style={style}
      disabled={disabled}
      className={`button button__${size} ${className} button__${
        disabled ? 'disabled' : ''
      }`}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon className="button__icon" icon={icon} />}
      <span className="button__label">{label}</span>
    </button>
  );
};

export default Button;
