import media from '@styles/theme/media';
import size, { ISize } from '@styles/theme/size';
import palette, { IPalette } from '@styles/theme/palette';

export interface ITheme {
  media: typeof media;
  size: ISize;
  palette: IPalette;
}

const theme: ITheme = {
  media,
  size,
  palette,
};

export default theme;
