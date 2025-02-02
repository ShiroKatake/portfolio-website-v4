import styled from "styled-components";
import Line from "./Line.svg";
import Swirl from "./Swirl.svg";

export const StyledPageBreak = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const LineVector = styled(Line)<{ $isReversed?: boolean }>`
  animation: line linear forwards;
  animation-timeline: view();
  animation-range-start: contain;
  animation-range-end: 25vh;
  scale: 0 1;
  transform-origin: ${({ $isReversed }) => ($isReversed ? "right" : "left")};

  @keyframes line {
    to {
      scale: 1 1;
    }
  }
`;

export const SwirlVector = styled(Swirl)`
  stroke-dasharray: 0 1000;
  stroke-dashoffset: -85;
  animation: rotate linear forwards;
  animation-timeline: view();
  animation-range-start: contain;
  animation-range-end: 25vh;

  @keyframes rotate {
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
