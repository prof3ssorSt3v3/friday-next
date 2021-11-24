import { polaris } from '@theme-ui/presets';

//see https://theme-ui.com/demo for Polaris colors
//see /styles/polaris-ref.json for full Polaris theme
//config - https://theme-ui.com/theming#configuration-flags

const theme = {
  ...polaris,
  config: {
    initialColorModeName: 'bubba',
    useBorderBox: true,
    useLocalStorage: true, //to save mode in localstorage
  },
  colors: {
    karim: '#bada55', //we can make up color names
    text: '#454f5b',
    background: '#fff',
    primary: '#5c6ac4',
    secondary: '#006fbb',
    highlight: '#47c1bf',
    muted: '#e6e6e6',
    gray: '#dfe3e8',
    accent: '#f49342',
    darken: '#00044c',
    modes: {
      dark: {
        text: '#3e4155',
        background: '#000639',
        primary: '#9c6ade',
        secondary: '#b4e1fa',
        highlight: '#b7ecec',
        muted: '#e6e6e6',
      },
    },
  },
  containers: {
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    },
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
  },
  styles: {
    ...polaris.styles,
    //your custom overrides for the styles
  },
};

export default theme;
