export interface PaddingI {
  $paddingBottom?: number;
  $paddingTop?: number;
  $paddingLeft?: number;
  $paddingRight?: number;
}

export interface MediaPaddingI extends MediaI {
  $mediaPaddingBottom?: number;
  $mediaPaddingTop?: number;
  $mediaPaddingLeft?: number;
  $mediaPaddingRight?: number;
}

export interface TextI extends PaddingI, MediaTextI {
  $color?: string;
  $TextAlign?: alignT;
  $fontSize?: number;
  $fontWeight?: "bold" | "normal";
  $maxWidth?: string;
}

export interface MediaTextI extends MediaPaddingI {
  $mediaMaxWidth?: string;
  $mediaFontSize?: number;
}

export interface MediaI {
  $mediaWidth?: number;
}

export interface AnimationI {
  $animate?: boolean;
  $fadeIn?: "top" | "right" | "bottom" | "left";
}

export type alignT = "center" | "start" | "end";
