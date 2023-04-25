import { StButton, StButtonCon, StLabel } from "../styles/Button.styles";

function Button({
  name,
  children,
  size,
  width,
  height,
  color,
  bgColor,
  border,
  borderColor,
  onClick,
}) {
  return (
    <StButtonCon
      size={size}
      width={width}
      height={height}
      border={border}
      color={color}
      bgColor={bgColor}
      borderColor={borderColor}
      onClick={onClick}
    >
      <StButton size={size}>{name}</StButton>
      {children ? <StLabel>{children}</StLabel> : ""}
    </StButtonCon>
  );
}

export default Button;
