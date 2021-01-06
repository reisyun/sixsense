import { rgba } from 'polished';

const color = {
  main: '#489cea',
  sub: '#225C86',
  primary: '#212121',
  secondary: '#757575',
  hint: '#BDBDBD',
  white: '#FFF',
  black: '#000',
};

const tagColor = {
  all: '#767676',
  dataScience: '#2C3E50',
  frontEnd: '#2980B9',
  backEnd: '#40407A',
  devOps: '#CD6133',
};

const background = {
  default: '#F7F9FC',
  disabled: '#EEEEEE',
  level1: '#EFEFE',
};

const divider = rgba(color.black, 0.12);

const overlay = {
  hover: rgba(color.black, 0.04),
  focus: rgba(color.black, 0.12),
  selected: rgba(color.main, 0.08),
  activated: rgba(color.main, 0.12),
};

export type ColorType = typeof color;
export type TagColorType = typeof tagColor;
export type BackgroundType = typeof background;
export type DividerType = typeof divider;
export type OverlayType = typeof overlay;

export interface IPalette {
  color: ColorType;
  tagColor: TagColorType;
  background: BackgroundType;
  divider: DividerType;
  overlay: OverlayType;
}

const palette: IPalette = {
  color,
  tagColor,
  background,
  divider,
  overlay,
};

export default palette;
