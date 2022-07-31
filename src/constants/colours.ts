const brandColours = {
  brandColour: '#6A158E',
};
const actionColours = {
  action: 'linear-gradient(90deg, #4F5AD8 0%, #3B46C4 100%)',
  actionPlain: '#3B46C4',
  actionDark: '#21247F',
  actionLight: '#E9EAFA',
};

const neutralColours = {
  black:'#000000',
  white: '#FFFFFF',
  greyLightest: '#F7F7F7',
  greyLighter: '#EFEFEF',
  greyLight: '#D4D7D9',
  grey: '#818F9B',
  greyDark: '#4A545E',
  greyDarkest: '#2C3236',
};

const notificationColours = {
  alert: '#FF4539',
  alertDark: '#940700',
  alertLight: '#FFDAD8',
  warning: '#FF9F0A',
  warningDark: '#704300',
  warningLight: '#FFECCE',
  success: '#3EBC64',
  successDark: '#17592B',
  successLight: '#DDFDE5',
};

const colours = {
  ...actionColours,
  ...brandColours,
  ...neutralColours,
  ...notificationColours,
};

export type Colours = typeof colours;

type colourKeys = keyof Colours;
export type colourValues = typeof colours[colourKeys];

export { colours, actionColours, neutralColours, notificationColours };
