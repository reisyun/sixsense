enum Color {
  main = '#489cea',
  sub = '#225C86',
  primary = '#191919',
  secondary = '#767676',
  hint = '#999999',
  white = '#FFF',
  black = '#000',
}

enum Background {
  default = '#F7F9FC',
  level1 = '#EFEFE',
  divider = '#E0E0E0',
}

enum TagColor {
  all = '#767676',
  dataScience = '#2C3E50',
  frontEnd = '#2980B9',
  backEnd = '#40407A',
  devOps = '#CD6133',
}

export type TypeColor = typeof Color;
export type TypeBackground = typeof Background;
export type TypeTagColor = typeof TagColor;

export interface IPalette {
  color: TypeColor;
  background: TypeBackground;
  tagColor: TypeTagColor;
}

const palette: IPalette = {
  color: Color,
  background: Background,
  tagColor: TagColor,
};

export default palette;
