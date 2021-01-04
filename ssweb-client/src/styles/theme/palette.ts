enum Color {
  main = '#489cea',
  sub = '#225C86',
  primary = '#191919',
  secondary = '#767676',
  hint = '#999999',
  white = '#FFF',
  black = '#000',
}

enum TagColor {
  all = '#767676',
  dataScience = '#2C3E50',
  frontEnd = '#2980B9',
  backEnd = '#40407A',
  devOps = '#CD6133',
}

enum Background {
  default = '#F7F9FC',
  level1 = '#EFEFE',
  divider = '#E0E0E0',
}

export type ColorType = typeof Color;
export type TagColorType = typeof TagColor;
export type BackgroundType = typeof Background;

export interface IPalette {
  color: ColorType;
  tagColor: TagColorType;
  background: BackgroundType;
}

const palette: IPalette = {
  color: Color,
  tagColor: TagColor,
  background: Background,
};

export default palette;
