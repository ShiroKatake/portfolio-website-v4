import styled from "styled-components";
import { fontSize } from "@/styles/typography";

export const StyledText = styled.p<{$size: keyof typeof fontSize.body}>`
  font-size: ${({ $size }) => fontSize.body[$size]};
`;
