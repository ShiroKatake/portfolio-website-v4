import styled from "styled-components";
import Line from "./Line.svg";
import Swirl from "./Vector 1.svg";

export const StyledPageBreak = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const LineVector = styled(Line)<{ $isReversed?: boolean }>`
  --line-width: 95;
  stroke-dasharray: 95 1000;
  animation: ${({ $isReversed }) => ($isReversed ? "line-reverse" : "line")} 2s
    linear alternate infinite;

  @keyframes line {
    from {
      stroke-dasharray: 0 1000;
    }
    to {
      stroke-dasharray: 95 1000;
    }
  }

  @keyframes line-reverse {
    from {
      stroke-dashoffset: -95;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export const SwirlVector = styled(Swirl)`
  --swirl-width: 85;
  stroke-dasharray: 0 1000;
  stroke-dashoffset: -85;
  animation: dash 2s linear alternate infinite;

  @keyframes dash {
    from {
      stroke-dasharray: 0 1000;
      stroke-dashoffset: -85;
    }
    to {
      stroke-dasharray: 170 1000;
      stroke-dashoffset: 0;
    }
  }
`;
