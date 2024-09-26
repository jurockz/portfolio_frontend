import {
  StyledChip,
  StyledChipContainer,
  StyledChipWrapper,
} from "../../styles/Chips.styled";

import { AnimationI, PaddingI } from "../../types/common";
import AnimationWrapper, { ChipsWrapperProps } from "./ChipWrapper";
import Text, { CompTextI } from "./Text";

interface ChipsProps extends AnimationI {
  content: string[];
  $color?: string;
  $background?: string;
  title?: CompTextI;
  chipWrapper?: ChipsWrapperProps;
  padding?: PaddingI;
}

export default function Chips({
  content,
  $color,
  $background,
  title,
  chipWrapper,
  padding,
}: ChipsProps) {
  console.log(chipWrapper);
  return (
    <StyledChipContainer {...padding}>
      {title && <Text {...title}>{title.children}</Text>}
      <AnimationWrapper {...chipWrapper}>
        {content.map((chipContent) => {
          return (
            <StyledChip
              key={chipContent}
              $background={$background || "black"}
              $color={$color || "white"}
            >
              {chipContent}
            </StyledChip>
          );
        })}
      </AnimationWrapper>
    </StyledChipContainer>
  );
}
