import { Colors } from "./types";

export const baseColors = {
  failure: "#48c264",
  primary: "#48c264",
  primaryBright: "#48c264",
  primaryDark: "#48c264",
  secondary: "#48c264",
  success: "#48c264",
  warning: "#48c264",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#48c264",
  backgroundDisabled: "#48c264",
  contrast: "#48c264",
  invertedContrast: "#48c264",
  input: "#48c264",
  tertiary: "#48c264",
  text: "#48c264",
  textDisabled: "#48c264",
  textSubtle: "#48c264",
  borderColor: "#48c264",
  card: "#48c264",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#CFB732",
  background: "#CFB732",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#CFB732",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
