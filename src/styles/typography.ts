import { scaleFont } from './mixins';

// FONT FAMILY
export const FONT_FAMILY_LIGHT = 'Rubik-Light';
export const FONT_FAMILY_REGULAR = 'Rubik-Regular';
export const FONT_FAMILY_MEDIUM = 'Rubik-Medium';
export const FONT_FAMILY_SEMI_BOLD = 'Rubik-SemiBold';
export const FONT_FAMILY_BOLD = 'Rubik-Bold';

// FONT WEIGHT
export const FONT_WEIGHT_LIGHT = '300';
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_MEDIUM = '500';
export const FONT_WEIGHT_SEMI_BOLD = '600';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_22 = scaleFont(22);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_LIGHT = {
  fontFamily: FONT_FAMILY_LIGHT,
  fontWeight: FONT_WEIGHT_LIGHT as '300',
};
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR as '400',
};
export const FONT_MEDIUM = {
  fontFamily: FONT_FAMILY_MEDIUM,
  fontWeight: FONT_WEIGHT_MEDIUM as '500',
};
export const FONT_SEMI_BOLD = {
  fontFamily: FONT_FAMILY_SEMI_BOLD,
  fontWeight: FONT_WEIGHT_SEMI_BOLD as '600',
};
export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD as '700',
};
