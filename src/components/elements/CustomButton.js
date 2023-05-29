import { Button } from "@mantine/core";

export default function CustomButton({
  label,
  variant,
  type,
  color,
  borderColor,
  backgroundColor,
  borderRadius,
  width,
  height,
  marginVertical,
  onClick,
  border,
}) {
  return (
    <Button
      variant={variant || 'outline'}
      type={type || "submit"}
      onClick={onClick}
      
      style={{
        color: color || 'white',
        backgroundColor: backgroundColor,
        borderWidth: 1,
        borderRadius: borderRadius || 30,
        borderColor: borderColor || 'green',
        width: width,
        height: height || 45,
        marginVertical: marginVertical || 10,
        justifySelf: 'center',
      }}
    >
      {label}
    </Button>
  );
}
