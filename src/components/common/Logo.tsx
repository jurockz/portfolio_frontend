import { StyledLogoContainer } from "../../styles/Logo.styled";
import Text from "./Text";

interface LogoProps {
  src: string;
  width: number;
  height: number;
  alt?: string;
  href?: string;
  newPage?: boolean;
  paddingBottom?: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  title?: string;
  titleFontSize?: number;
  titlePaddingBottom?: number;
}

export default function Logo({
  src,
  width,
  height,
  alt,
  href,
  newPage = true,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  title,
  titleFontSize,
  titlePaddingBottom,
}: LogoProps) {
  return (
    <StyledLogoContainer
      $paddingBottom={paddingBottom}
      $paddingTop={paddingTop}
      $paddingLeft={paddingLeft}
      $paddingRight={paddingRight}
    >
      {title && (
        <Text
          $fontSize={titleFontSize}
          $paddingBottom={titlePaddingBottom}
          $color="black"
          $maxWidth="100%"
        >
          {title}
        </Text>
      )}
      {href ? (
        <a href={href} target={newPage ? "_blank" : "_self"}>
          <img src={src} width={width} height={height} alt={alt} />
        </a>
      ) : (
        <img src={src} width={width} height={height} alt={alt} />
      )}
    </StyledLogoContainer>
  );
}
