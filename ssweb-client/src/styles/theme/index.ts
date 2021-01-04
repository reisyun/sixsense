import size, { ISize } from '@styles/theme/size';
import palette, { IPalette } from '@styles/theme/palette';

export interface ITheme {
  size: ISize;
  palette: IPalette;
}

const theme: ITheme = {
  size,
  palette,
};

export default theme;
