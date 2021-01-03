import { pxToEm, generateMedia } from 'styled-media-query';

enum Media {
  sm = '768px',
  md = '1024px',
  lg = '1200px',
  xl = '1440px',
}

const breakpoints = pxToEm(Media);
const customMedia = generateMedia(breakpoints);

const media = {
  sm: customMedia.lessThan('sm'),
  md: customMedia.between('sm', 'md'),
  lg: customMedia.between('md', 'lg'),
  xl: customMedia.between('lg', 'xl'),
  xxl: customMedia.greaterThan('xl'),
};

export default media;
