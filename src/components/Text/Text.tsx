import { fontSize } from "@/styles/typography";
import { StyledText } from "./Text.styled";

interface TextProps {
  as?: 'p' | 'span' | 'div';
  children: React.ReactNode;
  size?: keyof typeof fontSize.body;
}

export const Text = ({as, children, size='md'}: TextProps) => {
  return (
    <StyledText as={as} $size={size}>{children}</StyledText>
  )
}
