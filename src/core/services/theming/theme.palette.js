(function() {
'use strict';

angular.module('material.core.theming.palette', [])
.constant('$mdColorPalette', {
  'red': {
    '50': '#ffebee',
    '100': '#ffcdd2',
    '200': '#ef9a9a',
    '300': '#e57373',
    '400': '#ef5350',
    '500': '#f44336',
    '600': '#e53935',
    '700': '#d32f2f',
    '800': '#c62828',
    '900': '#b71c1c',
    'A100': '#ff8a80',
    'A200': '#ff5252',
    'A400': '#ff1744',
    'A700': '#d50000',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700'
  },
  'pink': {
    '50': '#fce4ec',
    '100': '#f8bbd0',
    '200': '#f48fb1',
    '300': '#f06292',
    '400': '#ec407a',
    '500': '#e91e63',
    '600': '#d81b60',
    '700': '#c2185b',
    '800': '#ad1457',
    '900': '#880e4f',
    'A100': '#ff80ab',
    'A200': '#ff4081',
    'A400': '#f50057',
    'A700': '#c51162',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 A200 A400 A700'
  },
  'purple': {
    '50': '#f3e5f5',
    '100': '#e1bee7',
    '200': '#ce93d8',
    '300': '#ba68c8',
    '400': '#ab47bc',
    '500': '#9c27b0',
    '600': '#8e24aa',
    '700': '#7b1fa2',
    '800': '#6a1b9a',
    '900': '#4a148c',
    'A100': '#ea80fc',
    'A200': '#e040fb',
    'A400': '#d500f9',
    'A700': '#aa00ff',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 A100',
    'contrastStrongLightColors': '300 400 A200 A400 A700'
  },
  'deep-purple': {
    '50': '#ede7f6',
    '100': '#d1c4e9',
    '200': '#b39ddb',
    '300': '#9575cd',
    '400': '#7e57c2',
    '500': '#673ab7',
    '600': '#5e35b1',
    '700': '#512da8',
    '800': '#4527a0',
    '900': '#311b92',
    'A100': '#b388ff',
    'A200': '#7c4dff',
    'A400': '#651fff',
    'A700': '#6200ea',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 A100',
    'contrastStrongLightColors': '300 400 A200'
  },
  'indigo': {
    '50': '#e8eaf6',
    '100': '#c5cae9',
    '200': '#9fa8da',
    '300': '#7986cb',
    '400': '#5c6bc0',
    '500': '#3f51b5',
    '600': '#3949ab',
    '700': '#303f9f',
    '800': '#283593',
    '900': '#1a237e',
    'A100': '#8c9eff',
    'A200': '#536dfe',
    'A400': '#3d5afe',
    'A700': '#304ffe',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 A100',
    'contrastStrongLightColors': '300 400 A200 A400'
  },
  'blue': {
    '50': '#e3f2fd',
    '100': '#bbdefb',
    '200': '#90caf9',
    '300': '#64b5f6',
    '400': '#42a5f5',
    '500': '#2196f3',
    '600': '#1e88e5',
    '700': '#1976d2',
    '800': '#1565c0',
    '900': '#0d47a1',
    'A100': '#82b1ff',
    'A200': '#448aff',
    'A400': '#2979ff',
    'A700': '#2962ff',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '100 200 300 400 A100',
    'contrastStrongLightColors': '500 600 700 A200 A400 A700'
  },
  'light-blue': {
    '50': '#e1f5fe',
    '100': '#b3e5fc',
    '200': '#81d4fa',
    '300': '#4fc3f7',
    '400': '#29b6f6',
    '500': '#03a9f4',
    '600': '#039be5',
    '700': '#0288d1',
    '800': '#0277bd',
    '900': '#01579b',
    'A100': '#80d8ff',
    'A200': '#40c4ff',
    'A400': '#00b0ff',
    'A700': '#0091ea',
    'contrastDefaultColor': 'dark',
    'contrastLightColors': '500 600 700 800 900 A700',
    'contrastStrongLightColors': '500 600 700 800 A700'
  },
  'cyan': {
    '50': '#e0f7fa',
    '100': '#b2ebf2',
    '200': '#80deea',
    '300': '#4dd0e1',
    '400': '#26c6da',
    '500': '#00bcd4',
    '600': '#00acc1',
    '700': '#0097a7',
    '800': '#00838f',
    '900': '#006064',
    'A100': '#84ffff',
    'A200': '#18ffff',
    'A400': '#00e5ff',
    'A700': '#00b8d4',
    'contrastDefaultColor': 'dark',
    'contrastLightColors': '500 600 700 800 900',
    'contrastStrongLightColors': '500 600 700 800'
  },
  'teal': {
    '50': '#e0f2f1',
    '100': '#b2dfdb',
    '200': '#80cbc4',
    '300': '#4db6ac',
    '400': '#26a69a',
    '500': '#009688',
    '600': '#00897b',
    '700': '#00796b',
    '800': '#00695c',
    '900': '#004d40',
    'A100': '#a7ffeb',
    'A200': '#64ffda',
    'A400': '#1de9b6',
    'A700': '#00bfa5',
    'contrastDefaultColor': 'dark',
    'contrastLightColors': '500 600 700 800 900',
    'contrastStrongLightColors': '500 600 700'
  },
  'green': {
    '50': '#e8f5e9',
    '100': '#c8e6c9',
    '200': '#a5d6a7',
    '300': '#81c784',
    '400': '#66bb6a',
    '500': '#4caf50',
    '600': '#43a047',
    '700': '#388e3c',
    '800': '#2e7d32',
    '900': '#1b5e20',
    'A100': '#b9f6ca',
    'A200': '#69f0ae',
    'A400': '#00e676',
    'A700': '#00c853',
    'contrastDefaultColor': 'dark',
    'contrastLightColors': '500 600 700 800 900',
    'contrastStrongLightColors': '500 600 700'
  },
  'light-green': {
    '50': '#f1f8e9',
    '100': '#dcedc8',
    '200': '#c5e1a5',
    '300': '#aed581',
    '400': '#9ccc65',
    '500': '#8bc34a',
    '600': '#7cb342',
    '700': '#689f38',
    '800': '#558b2f',
    '900': '#33691e',
    'A100': '#ccff90',
    'A200': '#b2ff59',
    'A400': '#76ff03',
    'A700': '#64dd17',
    'contrastDefaultColor': 'dark',
    'contrastLightColors': '800 900',
    'contrastStrongLightColors': '800 900'
  },
  'lime': {
    '50': '#f9fbe7',
    '100': '#f0f4c3',
    '200': '#e6ee9c',
    '300': '#dce775',
    '400': '#d4e157',
    '500': '#cddc39',
    '600': '#c0ca33',
    '700': '#afb42b',
    '800': '#9e9d24',
    '900': '#827717',
    'A100': '#f4ff81',
    'A200': '#eeff41',
    'A400': '#c6ff00',
    'A700': '#aeea00',
    'contrastDefaultColor': 'dark',
    'contrastLightColors': '900',
    'contrastStrongLightColors': '900'
  },
  'yellow': {
    '50': '#fffde7',
    '100': '#fff9c4',
    '200': '#fff59d',
    '300': '#fff176',
    '400': '#ffee58',
    '500': '#ffeb3b',
    '600': '#fdd835',
    '700': '#fbc02d',
    '800': '#f9a825',
    '900': '#f57f17',
    'A100': '#ffff8d',
    'A200': '#ffff00',
    'A400': '#ffea00',
    'A700': '#ffd600',
    'contrastDefaultColor': 'dark'
  },
  'amber': {
    '50': '#fff8e1',
    '100': '#ffecb3',
    '200': '#ffe082',
    '300': '#ffd54f',
    '400': '#ffca28',
    '500': '#ffc107',
    '600': '#ffb300',
    '700': '#ffa000',
    '800': '#ff8f00',
    '900': '#ff6f00',
    'A100': '#ffe57f',
    'A200': '#ffd740',
    'A400': '#ffc400',
    'A700': '#ffab00',
    'contrastDefaultColor': 'dark'
  },
  'orange': {
    '50': '#fff3e0',
    '100': '#ffe0b2',
    '200': '#ffcc80',
    '300': '#ffb74d',
    '400': '#ffa726',
    '500': '#ff9800',
    '600': '#fb8c00',
    '700': '#f57c00',
    '800': '#ef6c00',
    '900': '#e65100',
    'A100': '#ffd180',
    'A200': '#ffab40',
    'A400': '#ff9100',
    'A700': '#ff6d00',
    'contrastDefaultColor': 'dark',
    'contrastLightColors': 'A100 A200 800 900',
    'contrastStrongLightColors': '800 900'
  },
  'deep-orange': {
    '50': '#fbe9e7',
    '100': '#ffccbc',
    '200': '#ffab91',
    '300': '#ff8a65',
    '400': '#ff7043',
    '500': '#ff5722',
    '600': '#f4511e',
    '700': '#e64a19',
    '800': '#d84315',
    '900': '#bf360c',
    'A100': '#ff9e80',
    'A200': '#ff6e40',
    'A400': '#ff3d00',
    'A700': '#dd2c00',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300 400 A100 A200',
    'contrastStrongLightColors': '500 600 700 800 900 A400 A700'
  },
  'brown': {
    '50': '#efebe9',
    '100': '#d7ccc8',
    '200': '#bcaaa4',
    '300': '#a1887f',
    '400': '#8d6e63',
    '500': '#795548',
    '600': '#6d4c41',
    '700': '#5d4037',
    '800': '#4e342e',
    '900': '#3e2723',
    'A100': '#d7ccc8',
    'A200': '#bcaaa4',
    'A400': '#8d6e63',
    'A700': '#5d4037',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200',
    'contrastStrongLightColors': '300 400'
  },
  'grey': {
    '0': '#ffffff',
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#eeeeee',
    '300': '#e0e0e0',
    '400': '#bdbdbd',
    '500': '#9e9e9e',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121',
    '1000': '#000000',
    'A100': '#ffffff',
    'A200': '#eeeeee',
    'A400': '#bdbdbd',
    'A700': '#616161',
    'contrastDefaultColor': 'dark',
    'contrastLightColors': '600 700 800 900',
  },
  'blue-grey': {
    '50': '#eceff1',
    '100': '#cfd8dc',
    '200': '#b0bec5',
    '300': '#90a4ae',
    '400': '#78909c',
    '500': '#607d8b',
    '600': '#546e7a',
    '700': '#455a64',
    '800': '#37474f',
    '900': '#263238',
    'A100': '#cfd8dc',
    'A200': '#b0bec5',
    'A400': '#78909c',
    'A700': '#455a64',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300',
    'contrastStrongLightColors': '400 500'
  },
    'ad-999999previous': {
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#e5e5e5',
    '300': '#e0e0e0',
    '400': '#bdbdbd',
    '500': '#9e9e9e', /* Selected Sidenav Menu Item */
    '600': '#757575',
    '700': '#4f4f4f',
    '800': '#424242',
    '900': '#212121',
    'A100': '#faf5c8',
    'A200': '#f5f0c4',
    'A400': '#f0ebc0',
    'A700': '#e5e1b8',
    'contrastDefaultColor': 'dark',
    'contrastDarkColors': 'A100 A200 A400 A700',
    'contrastStrongLightColors': 'A100 A200 A400 A700'
  },
    'ad-999999': {
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#e5e5e5',
    '300': '#e0e0e0',
    '400': '#bdbdbd',
    '500': '#9e9e9e', /* Selected Sidenav Menu Item */
    '600': '#757575',
    '700': '#4f4f4f',
    '800': '#424242',
    '900': '#212121',
    'A100': '#faf5c8',
    'A200': '#f5f0c4',
    'A400': '#f0ebc0',
    'A700': '#e5e1b8',
    'contrastDefaultColor': 'dark',
    'contrastDarkColors': 'A100 A200 A400 A700',
    'contrastStrongLightColors': 'A100 A200 A400 A700'
  },
    'ad-cc0000': {
    '50': '#cc0000',
    '100': '#cc0000',
    '200': '#cc0000',
    '300': '#cc0000',
    '400': '#cc0000',
    '500': '#cc0000',
    '600': '#cc0000',
    '700': '#cc0000',
    '800': '#cc0000',
    '900': '#cc0000',
    'A100': '#cc0000',
    'A200': '#cc0000',
    'A400': '#cc0000',
    'A700': '#cc0000',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300',
    'contrastStrongLightColors': '400 500'
  },
    'ad-0f4C8c': {
    '50': '#1b87fa',
    '100': '#1b84f5',
    '200': '#197ce5',
    '300': '#1979e0',
    '400': '#1566bd',
    '500': '#11559e',
    '600': '#0d3f75',
    '700': '#092b4f',
    '800': '#072442',
    '900': '#041221',
    'A100': '#1aa3dd',
    'A200': '#1aa3dd',
    'A400': '#1aa3dd',
    'A700': '#1aa3dd',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300',
    'contrastStrongLightColors': '400 500'
  },
    'ad-4c4c4c': {
    '50': '#E8E8E8',
    '100': '#c7c7c7',
    '200': '#a6a6a6',
    '300': '#818181',
    '400': '#666666',
    '500': '#4c4c4c',
    '600': '#454545',
    '700': '#3D3D3D',
    '800': '#363636',
    '900': '#272727',
    'A100': '#c7c7c7',
    'A200': '#a6a6a6',
    'A400': '#666666',
    'A700': '#3D3D3D',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '',
    'contrastStrongLightColors': '50 100 200 300 400 500 A700'
  },
    'ad-0F4C8C2': {
    '50': '#0F4C8C',
    '100': '#0F4C8C',
    '200': '#0F4C8C',
    '300': '#0F4C8C',
    '400': '#0F4C8C',
    '500': '#0F4C8C',
    '600': '#0F4C8C',
    '700': '#0F4C8C',
    '800': '#0F4C8C',
    '900': '#0F4C8C',
    'A100': '#0F4C8C',
    'A200': '#0F4C8C',
    'A400': '#0F4C8C',
    'A700': '#0F4C8C',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300',
    'contrastStrongLightColors': '400 500'
  },
    'ad-0672c6': {
    '50': '#1079bf',
    '100': '#1079bf',
    '200': '#1079bf',
    '300': '#1079bf',
    '400': '#1079bf',
    '500': '#1079bf',
    '600': '#1079bf',
    '700': '#1079bf',
    '800': '#1079bf',
    '900': '#1079bf',
    'A100': '#1079bf',
    'A200': '#1079bf',
    'A400': '#1079bf',
    'A700': '#1079bf',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300',
    'contrastStrongLightColors': '400 500'
  },
    'ad-ff8a28': {
    '50': '#FF860F',
    '100': '#FF860F',
    '200': '#FF860F',
    '300': '#FF860F',
    '400': '#FF860F',
    '500': '#FF860F',
    '600': '#FF860F',
    '700': '#FF860F',
    '800': '#FF860F',
    '900': '#FF860F',
    'A100': '#FF860F',
    'A200': '#FF860F',
    'A400': '#FF860F',
    'A700': '#FF860F',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300',
    'contrastStrongLightColors': '400 500'
  },
    'ad-424242': { /* Rich AD dark grey */
    '50': '#424242',
    '100': '#0070CC', /* Select List Selected Item */
    '200': '#424242',
    '300': '#424242',
    '400': '#206FCA',
    '500': '#0070CC', /* 0099cc OurWorld Blue*/
    '600': '#104FAC',
    '700': '#0E4695',
    '800': '#0C3B7E',
    '900': '#4c4c4c',
    'A100': '#B8B8B8',
    'A200': '#d5ffff',
    'A400': '#0070CC',
    'A700': '#d5ffff',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300',
    'contrastStrongLightColors': '400 500'
  },
    'ad-000000': {
    '50': '#000000',
    '100': '#000000',
    '200': '#000000',
    '300': '#000000',
    '400': '#000000',
    '500': '#000000',
    '600': '#000000',
    '700': '#000000',
    '800': '#000000',
    '900': '#000000',
    'A100': '#000000',
    'A200': '#000000',
    'A400': '#000000',
    'A700': '#000000',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '',
    'contrastStrongLightColors': '50 100 200 300 400 500'
  },
    'ad-660099': { /* AD Websafe Purple Pantone 2597 Monochrome*/
    '50': '#EBDEF2',
    '100': '#CFB0DF',
    '200': '#B380CC',
    '300': '#934CB7',
    '400': '#7C26A8',
    '500': '#660099',
    '600': '#5C008B',
    '700': '#52007C',
    '800': '#48006C',
    '900': '#350050',
    'A100': '#CFB0DF',
    'A200': '#B380CC',
    'A400': '#7C26A8',
    'A700': '#52007C',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200',
    'contrastStrongLightColors': '300 400 500'
  },
    'ad-1c83c3': {
    '50': '#1c83c3',
    '100': '#1c83c3',
    '200': '#1c83c3',
    '300': '#1c83c3',
    '400': '#1c83c3',
    '500': '#1c83c3',
    '600': '#1c83c3',
    '700': '#1c83c3',
    '800': '#1c83c3',
    '900': '#1c83c3',
    'A100': '#1c83c3',
    'A200': '#1c83c3',
    'A400': '#1c83c3',
    'A700': '#1c83c3',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50',
    'contrastStrongLightColors': '400 500'
  },
    'ad-ff0014': { /*Warning AD Red*/
    '50': '#ff0014',
    '100': '#ff0014',
    '200': '#ff0014',
    '300': '#ff0014',
    '400': '#ff0014',
    '500': '#ff0014',
    '600': '#ff0014',
    '700': '#ff0014',
    '800': '#ff0014',
    '900': '#ff0014',
    'A100': '#ff0014',
    'A200': '#ff0014',
    'A400': '#ff0014',
    'A700': '#ff0014',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300',
    'contrastStrongLightColors': '400 500'
  },
    'ad-489fe1': { /*Warning AD Red*/
    '50': '#489fe1',
    '100': '#489fe1',
    '200': '#489fe1',
    '300': '#489fe1',
    '400': '#489fe1',
    '500': '#489fe1',
    '600': '#489fe1',
    '700': '#489fe1',
    '800': '#489fe1',
    '900': '#489fe1',
    'A100': '#489fe1',
    'A200': '#489fe1',
    'A400': '#489fe1',
    'A700': '#489fe1',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '',
    'contrastStrongLightColors': '50 100 200 300 400 500 600 700 800 900 A100 A200 A400 A700'
  },
    'ad-e21a23': { /*Warning AD Exact PMS Red*/
    '50': '#000000',
    '100': '#e21a23',
    '200': '#FF0000',
    '300': '#e21a23',
    '400': '#000000',
    '500': '#e21a23',
    '600': '#FF0000',
    '700': '#e21a23',
    '800': '#000000',
    '900': '#e21a23',
    'A100': '#000000',
    'A200': '#999999',
    'A400': '#ffffff',
    'A700': '#e21a23',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '',
    'contrastStrongLightColors': '50 100 200 300 400 500 600 700 800 900 A100 A200 A400 A700'
  },
    'ad-005cb8': { /*Warning AD Exact PMS 75% PMS 300 Blue*/
    '50': '#D7E5F4',
    '100': '#A1C1E4',
    '200': '#6D9CD3',
    '300': '#3D78C2',
    '400': '#1F5EB6',
    '500': '#0E45A9',
    '600': '#0C3F96',
    '700': '#0B3783',
    '800': '#092F70',
    '900': '#05224D',
    'A100': '#A1C1E4',
    'A200': '#6D9CD3',
    'A400': '#1F5EB6',
    'A700': '#000000',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '',
    'contrastStrongLightColors': '50 100 200 300 400 500 600 700 800 900 A100 A200 A400 A700'
  },
    'ad-cc3333': { /* Warning Websafe Red Pantone 1797 */
    '50': '#cc3333',
    '100': '#A1C1E4',
    '200': '#cc3333',
    '300': '#cc3333',
    '400': '#cc3333',
    '500': '#cc3333',
    '600': '#cc3333',
    '700': '#cc3333',
    '800': '#cc3333',
    '900': '#cc3333',
    'A100': '#cc3333',
    'A200': '#cc3333',
    'A400': '#cc3333',
    'A700': '#cc3333',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '',
    'contrastStrongLightColors': '50 100 200 300 400 500 600 700 800 900 A100 A200 A400 A700'
  },
    'ad-EF1D2D': { /* Warning Saturated Red Pantone 1797 */
    '50': '#FCDBDE',
    '100': '#F7A9B1',
    '200': '#F37884',
    '300': '#EF4759',
    '400': '#EB263C',
    '500': '#EF1D2D',
    '600': '#CC001F',
    '700': '#B3001B',
    '800': '#980018',
    '900': '#680212',
    'A100': '#EF1D2D',
    'A200': '#EF1D2D',
    'A400': '#EF1D2D',
    'A700': '#EF1D2D',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '',
    'contrastStrongLightColors': '50 100 200 300 400 500 600 700 800 900 A100 A200 A400 A700'
  },
    'ad-0070CC': { /* Warning Saturated Red Pantone 1797 */
    '50': '#DEECF9',
    '100': '#B0D3EF',
    '200': '#80B8E6',
    '300': '#4C9ADB',
    '400': '#2685D3',
    '500': '#0070CC',
    '600': '#0065B9',
    '700': '#005BA5',
    '800': '#004F91',
    '900': '#003A6A',
    'A100': '#B0D3EF',
    'A200': '#80B8E6',
    'A400': '#2685D3',
    'A700': '#005BA5',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '',
    'contrastStrongLightColors': '50 100 200 300 400 500 600 700 800 900 A100 A200 A400 A700'
  },
    'ad-78be20': { /* Warning Saturated Red Pantone 1797 */
    '50': '#EDF7E2',
    '100': '#D5EBBA',
    '200': '#BCDF90',
    '300': '#A0D162',
    '400': '#8CC741',
    '500': '#78be20',
    '600': '#6DAC1D',
    '700': '#619A1A',
    '800': '#558716',
    '900': '#3E6310',
    'A100': '#D5EBBA',
    'A200': '#BCDF90',
    'A400': '#8CC741',
    'A700': '#619A1A',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 300',
    'contrastStrongLightColors': '400 500'
  }

});
})();
