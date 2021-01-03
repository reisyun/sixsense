enum FontSize {
  xs = '12px',
  sm = '14px',
  md = '16px',
  lg = '20px',
  xl = '24px',
}

enum IconSize {
  small = '16px',
  medium = '20px',
  large = '24px',
}

export type TypeFontSize = typeof FontSize;
export type TypeIconSize = typeof IconSize;

export interface ISize {
  fontSize: TypeFontSize;
  iconSize: TypeIconSize;
}

const size: ISize = {
  fontSize: FontSize,
  iconSize: IconSize,
};

export default size;
