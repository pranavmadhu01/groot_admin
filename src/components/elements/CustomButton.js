import { Button } from "@mantine/core";

export default function CustomButton({
  label,
  variant,
  type,
  color,
  borderColor,
  backgroundColor,
  borderRadius,
}) {
  return (
    <Button
      variant={variant || 'outline'}
      type={type || "button"}
      
      style={{
        marginTop: 30,
        marginBottom: 50,
        color: color || 'white',
        backgroundColor: backgroundColor,
        borderWidth: 1,
        borderRadius: borderRadius || 30,
        borderColor: borderColor || 'green',
        paddingVertical: 10,
        paddingHorizontal: 50,
      }}
    >
      {label}
    </Button>
  );
}
