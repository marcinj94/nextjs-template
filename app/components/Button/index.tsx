type BaseButtonProps = React.ComponentPropsWithoutRef<'button'>;

interface ButtonProps extends BaseButtonProps {
  label: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  type = 'button',
  onClick,
}) => (
  <button type={type} disabled={disabled} onClick={onClick}>
    <span>{label}</span>
  </button>
);
