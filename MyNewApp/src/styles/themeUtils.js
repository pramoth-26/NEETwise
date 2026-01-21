/**
 * Theme utilities and helper functions
 * Provides easy access to colors, spacing, fonts, and other design system constants
 */

import { spacing, fontSizes, fontWeights, borderRadius, colors, shadows } from './globalStyles';

/**
 * Design system constants exported for easy access throughout the app
 */
export const designSystem = {
  spacing,
  fontSizes,
  fontWeights,
  borderRadius,
  colors,
  shadows,
};

/**
 * Helper to create flex layouts
 * @param {number} flex - Flex value
 * @returns {Object} Flex style object
 */
export const createFlex = (flex = 1) => ({
  flex,
});

/**
 * Helper to create padding
 * @param {number|Object} value - Padding value or object with specific sides
 * @returns {Object} Padding style object
 */
export const createPadding = (value) => {
  if (typeof value === 'number') {
    return {
      paddingTop: value,
      paddingRight: value,
      paddingBottom: value,
      paddingLeft: value,
    };
  }
  const { top = 0, right = 0, bottom = 0, left = 0, horizontal = 0, vertical = 0 } = value;
  return {
    paddingTop: top || vertical,
    paddingRight: right || horizontal,
    paddingBottom: bottom || vertical,
    paddingLeft: left || horizontal,
  };
};

/**
 * Helper to create margin
 * @param {number|Object} value - Margin value or object with specific sides
 * @returns {Object} Margin style object
 */
export const createMargin = (value) => {
  if (typeof value === 'number') {
    return {
      marginTop: value,
      marginRight: value,
      marginBottom: value,
      marginLeft: value,
    };
  }
  const { top = 0, right = 0, bottom = 0, left = 0, horizontal = 0, vertical = 0 } = value;
  return {
    marginTop: top || vertical,
    marginRight: right || horizontal,
    marginBottom: bottom || vertical,
    marginLeft: left || horizontal,
  };
};

/**
 * Helper to create flex row with alignment
 * @param {string} justify - justify-content value
 * @param {string} align - align-items value
 * @returns {Object} Flex row style object
 */
export const createFlexRow = (justify = 'flex-start', align = 'center') => ({
  flexDirection: 'row',
  justifyContent: justify,
  alignItems: align,
});

/**
 * Helper to create flex column
 * @param {string} justify - justify-content value
 * @param {string} align - align-items value
 * @returns {Object} Flex column style object
 */
export const createFlexColumn = (justify = 'flex-start', align = 'flex-start') => ({
  flexDirection: 'column',
  justifyContent: justify,
  alignItems: align,
});

/**
 * Helper to combine multiple style objects
 * @param {...Object} styles - Style objects to merge
 * @returns {Object} Merged style object
 */
export const mergeStyles = (...styles) => {
  return Object.assign({}, ...styles);
};

/**
 * Helper to create responsive font sizes based on screen width
 * @param {number} baseSize - Base font size
 * @returns {Object} Responsive font size object
 */
export const createResponsiveFontSize = (baseSize) => ({
  fontSize: baseSize,
});

/**
 * Helper to create rounded corners
 * @param {number} radius - Border radius value
 * @param {string} position - Position (all, top, bottom, left, right)
 * @returns {Object} Border radius style object
 */
export const createBorderRadius = (radius = borderRadius.md, position = 'all') => {
  const baseStyle = { borderRadius: radius };
  
  if (position === 'top') {
    return {
      borderTopLeftRadius: radius,
      borderTopRightRadius: radius,
    };
  }
  if (position === 'bottom') {
    return {
      borderBottomLeftRadius: radius,
      borderBottomRightRadius: radius,
    };
  }
  if (position === 'left') {
    return {
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius,
    };
  }
  if (position === 'right') {
    return {
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius,
    };
  }
  return baseStyle;
};

/**
 * Helper to create border style
 * @param {string} color - Border color
 * @param {number} width - Border width
 * @returns {Object} Border style object
 */
export const createBorder = (color, width = 1) => ({
  borderWidth: width,
  borderColor: color,
});

/**
 * Helper to create text shadow
 * @param {Object} theme - Theme object
 * @param {number} offsetX - Horizontal offset
 * @param {number} offsetY - Vertical offset
 * @param {number} radius - Shadow radius
 * @returns {Object} Text shadow style object
 */
export const createTextShadow = (theme, offsetX = 0, offsetY = 1, radius = 1) => ({
  textShadowColor: theme.colors.border,
  textShadowOffset: { width: offsetX, height: offsetY },
  textShadowRadius: radius,
});

export default designSystem;
