// Legacy v3 config. Prefer tokens.theme.css for Tailwind v4.
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      // ========================================================
      // breakpoints.Mode-1.tokens.json
      // ========================================================
      screens: {
        xs:  '444px',
        sm:  '600px',
        md:  '900px',
        lg:  '1200px',
        xl:  '1536px',
        xxl: '1904px',
      },

      // ========================================================
      // sizing.Mode-1.tokens.json
      // ========================================================
      spacing: {
        '1':  '8px',
        '2':  '16px',
        '3':  '24px',
        '4':  '32px',
        '5':  '40px',
        '6':  '48px',
        '7':  '56px',
        '8':  '64px',
        '9':  '72px',
        '10': '80px',
        '11': '88px',
        '12': '96px',
      },

      // ========================================================
      // shape.Mode-1.tokens.json
      // ========================================================
      borderRadius: {
        'none': '0px',
        'sm':   '4px',
        'md':   '8px',
        'lg':   '12px',
        'xl':   '16px',
        'xxl':  '20px',
        '3xl':  '24px',
        'full': '100px',
      },

      // ========================================================
      // effect.styles.tokens.json — elevation shadows
      // ========================================================
      boxShadow: {
        '1':  '0px 2px 1px -1px #00000033, 0px 1px 1px 0px #00000024, 0px 1px 3px 0px #0000001f',
        '2':  '0px 3px 1px -2px #00000033, 0px 2px 2px 0px #00000024, 0px 1px 5px 0px #0000001f',
        '3':  '0px 3px 3px -2px #00000033, 0px 3px 4px 0px #00000024, 0px 1px 8px 0px #0000001f',
        '4':  '0px 2px 4px -1px #00000033, 0px 4px 5px 0px #00000024, 0px 1px 10px 0px #0000001f',
        '5':  '0px 3px 5px -1px #00000033, 0px 5px 8px 0px #00000024, 0px 1px 14px 0px #0000001f',
        '6':  '0px 3px 5px -1px #00000033, 0px 6px 10px 0px #00000024, 0px 1px 18px 0px #0000001f',
        '7':  '0px 4px 5px -2px #00000033, 0px 7px 10px 1px #00000024, 0px 2px 16px 1px #0000001f',
        '8':  '0px 5px 5px -3px #00000033, 0px 8px 10px 1px #00000024, 0px 3px 14px 2px #0000001f',
        '9':  '0px 5px 6px -3px #00000033, 0px 9px 12px 1px #00000024, 0px 3px 16px 2px #0000001f',
        '10': '0px 6px 6px -3px #00000033, 0px 10px 14px 1px #00000024, 0px 4px 18px 3px #0000001f',
        '11': '0px 6px 7px -4px #00000033, 0px 11px 15px 1px #00000024, 0px 4px 20px 3px #0000001f',
        '12': '0px 7px 8px -4px #00000033, 0px 12px 17px 2px #00000024, 0px 5px 22px 4px #0000001f',
        '13': '0px 7px 8px -4px #00000033, 0px 13px 19px 2px #00000024, 0px 5px 24px 4px #0000001f',
        '14': '0px 7px 9px -4px #00000033, 0px 14px 21px 2px #00000024, 0px 5px 26px 4px #0000001f',
        '15': '0px 8px 9px -5px #00000033, 0px 15px 22px 2px #00000024, 0px 6px 28px 5px #0000001f',
        '16': '0px 8px 10px -5px #00000033, 0px 16px 24px 2px #00000024, 0px 6px 30px 5px #0000001f',
        '17': '0px 8px 11px -5px #00000033, 0px 17px 26px 2px #00000024, 0px 6px 32px 5px #0000001f',
        '18': '0px 9px 11px -5px #00000033, 0px 18px 28px 2px #00000024, 0px 7px 34px 6px #0000001f',
        '19': '0px 9px 12px -6px #00000033, 0px 19px 29px 2px #00000024, 0px 7px 36px 6px #0000001f',
        '20': '0px 10px 13px -6px #00000033, 0px 20px 31px 3px #00000024, 0px 8px 38px 7px #0000001f',
        '21': '0px 10px 13px -6px #00000033, 0px 21px 33px 3px #00000024, 0px 8px 40px 7px #0000001f',
        '22': '0px 10px 14px -6px #00000033, 0px 22px 35px 3px #00000024, 0px 8px 42px 7px #0000001f',
        '23': '0px 11px 14px -7px #00000033, 0px 23px 36px 3px #00000024, 0px 9px 44px 8px #0000001f',
        '24': '0px 11px 15px -7px #00000033, 0px 24px 38px 3px #00000024, 0px 9px 46px 8px #0000001f',
      },

      // ========================================================
      // text.styles.tokens.json — typography
      // fontSize tuples: [size, { lineHeight, letterSpacing, fontWeight }]
      // ========================================================
      fontSize: {
        // Core scale
        'display-1': ['6rem', { lineHeight: '1.167', letterSpacing: '-1.5px', fontWeight: '300' }],
        'display-2': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.5px', fontWeight: '300' }],
        'display-3': ['3rem', { lineHeight: '1.167', letterSpacing: '0px', fontWeight: '400' }],
        'display-4': ['2.125rem', { lineHeight: '1.235', letterSpacing: '0.25px', fontWeight: '400' }],
        'header-1':  ['1.5rem', { lineHeight: '1.1', letterSpacing: '0px', fontWeight: '400' }],
        'header-2':  ['1.25rem', { lineHeight: '1.2', letterSpacing: '0.15px', fontWeight: '500' }],
        'header-3':  ['1.125rem', { lineHeight: '1.25', letterSpacing: '0.15px', fontWeight: '600' }],
        'body-lg':   ['1rem', { lineHeight: '1.5', letterSpacing: '0.15px', fontWeight: '400' }],
        'body-md':   ['0.875rem', { lineHeight: '1.43', letterSpacing: '0.17px', fontWeight: '400' }],
        'subtitle-lg': ['1rem', { lineHeight: '1.75', letterSpacing: '0.15px', fontWeight: '400' }],
        'subtitle-md': ['0.875rem', { lineHeight: '1.57', letterSpacing: '0.1px', fontWeight: '500' }],
        'label-overline': ['0.75rem', { lineHeight: '2.66', letterSpacing: '1px', fontWeight: '400' }],
        'label-caption':  ['0.75rem', { lineHeight: '1.66', letterSpacing: '0.4px', fontWeight: '400' }],
        // Component tokens
        'alert-title':   ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.15px', fontWeight: '500' }],
        'alert-body':    ['0.875rem', { lineHeight: '1.43', letterSpacing: '0.15px', fontWeight: '500' }],
        'avatar-initials': ['1.25rem', { lineHeight: '1', letterSpacing: '0.14px', fontWeight: '400' }],
        'badge-label':   ['0.75rem', { lineHeight: '1.667', letterSpacing: '0.14px', fontWeight: '500' }],
        'bottom-nav-active': ['0.875rem', { lineHeight: '1.66', letterSpacing: '0.4px', fontWeight: '400' }],
        'button-lg':     ['0.9375rem', { lineHeight: '1.6', letterSpacing: '0.46px', fontWeight: '500' }],
        'button-md':     ['0.875rem', { lineHeight: '1.429', letterSpacing: '0.4px', fontWeight: '500' }],
        'button-sm':     ['0.8125rem', { lineHeight: '1.231', letterSpacing: '0.46px', fontWeight: '500' }],
        'chip-label':    ['0.8125rem', { lineHeight: '1.385', letterSpacing: '0.16px', fontWeight: '400' }],
        'date-picker-month': ['1rem', { lineHeight: '1.5', letterSpacing: '0.15px', fontWeight: '500' }],
        'input-label':   ['0.75rem', { lineHeight: '1', letterSpacing: '0.15px', fontWeight: '600' }],
        'input-value':   ['0.875rem', { lineHeight: '1.429', letterSpacing: '0.15px', fontWeight: '400' }],
        'input-helper':  ['0.75rem', { lineHeight: '1.66', letterSpacing: '0.4px', fontWeight: '400' }],
        'list-subheader': ['0.875rem', { lineHeight: '3.429', letterSpacing: '0.1px', fontWeight: '500' }],
        'menu-item-default': ['1rem', { lineHeight: '1.5', letterSpacing: '0.15px', fontWeight: '400' }],
        'menu-item-dense':   ['0.875rem', { lineHeight: '1.714', letterSpacing: '0.17px', fontWeight: '400' }],
        'table-header':  ['0.875rem', { lineHeight: '1.714', letterSpacing: '0.17px', fontWeight: '700' }],
        'tooltip-label': ['0.625rem', { lineHeight: '1.4', letterSpacing: '0px', fontWeight: '500' }],
        'data-grid-aggregation-header': ['0.75rem', { lineHeight: '1', letterSpacing: '0.15px', fontWeight: '500' }],
        // TODO: internal library token — include only if needed for consumer projects
        'library-heading': ['4rem', { lineHeight: '1.167', letterSpacing: '-1.5px', fontWeight: '500' }],
      },

      // ========================================================
      // colors.Mode-1.tokens.json + palette.Light.tokens.json
      // ========================================================
      colors: {
        // --- base palette ---

        // amber
        amber: {
          '50': '#fff8e1', '100': '#ffecb3', '200': '#ffe082', '300': '#ffd54f',
          '400': '#ffca28', '500': '#ffc107', '600': '#ffb300', '700': '#ffa000',
          '800': '#ff8f00', '900': '#ff6f00',
          'a100': '#ffe57f', 'a200': '#ffd740', 'a400': '#ffc400', 'a700': '#ffab00',
        },
        // blue
        blue: {
          '50': '#d2e2ed', '100': '#a5c6da', '200': '#77aac8', '300': '#468db5',
          '400': '#026ea1', '500': '#215671', '600': '#1b4960', '700': '#123b50',
          '800': '#0e2c3b', '900': '#0c202b',
          'a100': '#82b1ff', 'a200': '#448aff', 'a400': '#2979ff', 'a700': '#2962ff',
        },
        // blue-grey
        'blue-grey': {
          '50': '#eceff1', '100': '#cfd8dc', '200': '#b0bec5', '300': '#90a4ae',
          '400': '#78909c', '500': '#607d8b', '600': '#546e7a', '700': '#455a64',
          '800': '#37474f', '900': '#263238',
          'a100': '#cfd8dc', 'a200': '#b0bec5', 'a400': '#78909c', 'a700': '#455a64',
        },
        // cyan
        cyan: {
          '50': '#e0f7fa', '100': '#b2ebf2', '200': '#80deea', '300': '#4dd0e1',
          '400': '#26c6da', '500': '#00bcd4', '600': '#00acc1', '700': '#0097a7',
          '800': '#00838f', '900': '#006064',
          'a100': '#84ffff', 'a200': '#18ffff', 'a400': '#00e5ff', 'a700': '#00b8d4',
        },
        // deep-orange
        'deep-orange': {
          '50': '#fbe9e7', '100': '#ffccbc', '200': '#ffab91', '300': '#ff8a65',
          '400': '#ff7043', '500': '#ff5722', '600': '#f4511e', '700': '#e64a19',
          '800': '#d84315', '900': '#bf360c',
          'a100': '#ff9e80', 'a200': '#ff6e40', 'a400': '#ff3d00', 'a700': '#dd2c00',
        },
        // deep-purple
        'deep-purple': {
          '50': '#ede7f6', '100': '#d1c4e9', '200': '#b39ddb', '300': '#9575cd',
          '400': '#7e57c2', '500': '#673ab7', '600': '#5e35b1', '700': '#512da8',
          '800': '#4527a0', '900': '#311b92',
          'a100': '#b388ff', 'a200': '#7c4dff', 'a400': '#651fff', 'a700': '#6200ea',
        },
        // green
        green: {
          '50': '#bfdfd8', '100': '#a9d5cb', '200': '#94cabe', '300': '#7ebfb0',
          '400': '#69b5a3', '500': '#53aa96', '600': '#3ea089', '700': '#28957c',
          '800': '#248670', '900': '#1c6857',
          'a100': '#a9d5cb', 'a200': '#94cabe', 'a400': '#69b5a3', 'a700': '#28957c',
        },
        // grey
        grey: {
          '50': '#fafafa', '100': '#f5f5f5', '200': '#eeeeee', '300': '#e0e0e0',
          '400': '#bdbdbd', '500': '#9e9e9e', '600': '#757575', '700': '#616161',
          '800': '#424242', '900': '#212121',
          'a100': '#f5f5f5', 'a200': '#eeeeee', 'a400': '#bdbdbd', 'a700': '#616161',
        },
        // indigo
        indigo: {
          '50': '#e8eaf6', '100': '#c5cae9', '200': '#9fa8da', '300': '#7986cb',
          '400': '#5c6bc0', '500': '#3f51b5', '600': '#3949ab', '700': '#303f9f',
          '800': '#283593', '900': '#1a237e',
          'a100': '#8c9eff', 'a200': '#536dfe', 'a400': '#3d5afe', 'a700': '#304ffe',
        },
        // light-blue
        'light-blue': {
          '50': '#c8dde9', '100': '#b5d1e1', '200': '#a3c6da', '300': '#90bbd3',
          '400': '#7eafcb', '500': '#6ba4c4', '600': '#5998bc', '700': '#468db5',
          '800': '#3f7fa3', '900': '#31637f',
          'a100': '#b5d1e1', 'a200': '#a3c6da', 'a400': '#7eafcb', 'a700': '#468db5',
        },
        // light-green
        'light-green': {
          '50': '#f1f8e9', '100': '#dcedc8', '200': '#c5e1a5', '300': '#aed581',
          '400': '#8bc34a', '500': '#8bc34a', '600': '#7cb342', '700': '#689f38',
          '800': '#558b2f', '900': '#33691e',
          'a100': '#ccff90', 'a200': '#b2ff59', 'a400': '#76ff03', 'a700': '#64dd17',
        },
        // lime
        lime: {
          '50': '#f9fbe7', '100': '#f0f4c3', '200': '#e6ee9c', '300': '#dce775',
          '400': '#d4e157', '500': '#cddc39', '600': '#c0ca33', '700': '#afb42b',
          '800': '#9e9d24', '900': '#827717',
          'a100': '#f4ff81', 'a200': '#eeff41', 'a400': '#c6ff00', 'a700': '#aeea00',
        },
        // orange
        orange: {
          '50': '#fce2be', '100': '#fbd8a8', '200': '#face92', '300': '#f9c47c',
          '400': '#f8ba66', '500': '#f7b151', '600': '#f6a73b', '700': '#ff9800',
          '800': '#ac6e1a', '900': '#7b4f13',
          'a100': '#fbd8a8', 'a200': '#face92', 'a400': '#f8ba66', 'a700': '#f59d25',
        },
        // pink
        pink: {
          '50': '#fce4ec', '100': '#f8bbd0', '200': '#f48fb1', '300': '#f06292',
          '400': '#ec407a', '500': '#e91e63', '600': '#d81b60', '700': '#c2185b',
          '800': '#ad1457', '900': '#880e4f',
          'a100': '#ff80ab', 'a200': '#ff4081', 'a400': '#f50057', 'a700': '#c51162',
        },
        // purple
        purple: {
          '50': '#f3e5f5', '100': '#e1bee7', '200': '#ce93d8', '300': '#ba68c8',
          '400': '#ab47bc', '500': '#9c27b0', '600': '#8e24aa', '700': '#7b1fa2',
          '800': '#6a1b9a', '900': '#4a148c',
          'a100': '#ea80fc', 'a200': '#e040fb', 'a400': '#d500f9', 'a700': '#aa00ff',
        },
        // red
        red: {
          '50': '#efccd2', '100': '#df99a6', '200': '#d88090', '300': '#d06679',
          '400': '#c84d63', '500': '#c0334d', '600': '#b81a36', '700': '#b00020',
          '800': '#8d001a', '900': '#6a0013',
          'a100': '#c84d63', 'a200': '#c0334d', 'a400': '#b81a36', 'a700': '#b00020',
        },
        // teal
        teal: {
          '50': '#e0f2f1', '100': '#b2dfdb', '200': '#80cbc4', '300': '#4db6ac',
          '400': '#26a69a', '500': '#009688', '600': '#00897b', '700': '#00796b',
          '800': '#00695c', '900': '#004d40',
          'a100': '#a7ffeb', 'a200': '#64ffda', 'a400': '#1de9b6', 'a700': '#00bfa5',
        },
        // yellow
        yellow: {
          '50': '#fffde7', '100': '#fff9c4', '200': '#fff59d', '300': '#fff176',
          '400': '#ffee58', '500': '#ffeb3b', '600': '#fdd835', '700': '#fbc02d',
          '800': '#f9a825', '900': '#f57f17',
          'a100': '#ffff8d', 'a200': '#ffff00', 'a400': '#ffea00', 'a700': '#ffd600',
        },

        // --- semantic / light mode (palette.Light.tokens.json) ---

        // text
        text: {
          primary:       '#000000de',
          secondary:     '#00000099',
          disabled:      '#00000061',
          hover:         '#0000000a',
          selected:      '#00000014',
          focus:         '#0000001f',
          'focus-visible': '#0000004d',
        },

        // primary
        primary: {
          main:             '#123b50',
          dark:             '#1b4960',
          light:            '#026ea1',
          contrast:         '#ffffff',
          hover:            '#026ea10a',
          selected:         '#026ea114',
          focus:            '#026ea11f',
          'focus-visible':  '#026ea14d',
          'outlined-border': '#026ea180',
        },

        // secondary
        secondary: {
          main:             '#9c27b0',
          dark:             '#7b1fa2',
          light:            '#ba68c8',
          contrast:         '#ffffff',
          hover:            '#9c27b00a',
          selected:         '#9c27b014',
          focus:            '#9c27b01f',
          'focus-visible':  '#9c27b04d',
          'outlined-border': '#9c27b080',
        },

        // action
        action: {
          active:      '#0000008f',
          hover:       '#0000000a',
          selected:    '#00000014',
          focus:       '#0000001f',
          disabled:    '#00000061',
          'disabled-bg': '#0000001f',
        },

        // error
        error: {
          main:             '#b00020',
          dark:             '#8d001a',
          light:            '#c84d63',
          contrast:         '#ffffff',
          hover:            '#d32f2f0a',
          selected:         '#d32f2f14',
          'focus-visible':  '#d32f2f4d',
          'outlined-border': '#d32f2f80',
        },

        // warning
        warning: {
          main:             '#ffa000',
          dark:             '#ff6f00',
          light:            '#ffc107',
          contrast:         '#ffffff',
          hover:            '#ef6c000a',
          selected:         '#ef6c0014',
          'focus-visible':  '#ef6c004d',
          'outlined-border': '#ef6c0080',
        },

        // info
        info: {
          main:             '#468db5',
          dark:             '#31637f',
          light:            '#6ba4c4',
          contrast:         '#ffffff',
          hover:            '#0288d10a',
          selected:         '#0288d114',
          'focus-visible':  '#0288d14d',
          'outlined-border': '#0288d180',
        },

        // success
        success: {
          main:             '#248670',
          dark:             '#1c6857',
          light:            '#53aa96',
          contrast:         '#ffffff',
          hover:            '#2e7d320a',
          selected:         '#2e7d3214',
          'focus-visible':  '#2e7d324d',
          'outlined-border': '#2e7d3280',
        },

        // common
        common: {
          black:                 '#000000',
          'black-hover':         '#0000000a',
          'black-selected':      '#00000014',
          'black-focus':         '#0000001f',
          'black-focus-visible': '#0000004d',
          'black-outlined-border': '#00000080',
          white:                 '#ffffff',
          'white-hover':         '#ffffff0a',
          'white-selected':      '#ffffff14',
          'white-focus':         '#ffffff1f',
          'white-focus-visible': '#ffffff4d',
          'white-outlined-border': '#ffffff80',
        },

        // background
        bg: {
          body:        '#ffffff',
          'surface-0':  '#ffffff',
          'surface-1':  '#ffffff',
          'surface-2':  '#ffffff',
          'surface-3':  '#ffffff',
          'surface-4':  '#ffffff',
          'surface-5':  '#ffffff',
          'surface-6':  '#ffffff',
          'surface-7':  '#ffffff',
          'surface-8':  '#ffffff',
          'surface-9':  '#ffffff',
          'surface-10': '#ffffff',
          'surface-11': '#ffffff',
          'surface-12': '#ffffff',
          'surface-13': '#ffffff',
          'surface-14': '#ffffff',
          'surface-15': '#ffffff',
          'surface-16': '#ffffff',
          'surface-17': '#ffffff',
          'surface-18': '#ffffff',
          'surface-19': '#ffffff',
          'surface-20': '#ffffff',
          'surface-21': '#ffffff',
          'surface-22': '#ffffff',
          'surface-23': '#ffffff',
          'surface-24': '#ffffff',
        },

        // border
        border: {
          divider: '#0000001f',
        },

        // components
        component: {
          switch: {
            'slide-track-fill':   '#000000',
            'knob-fill-enabled':  '#fafafa',
            'knob-fill-disabled': '#f5f5f5',
          },
          avatar: {
            fill: '#bdbdbd',
          },
          input: {
            standard: {
              'enabled-border': '#0000006b',
              'hover-border':   '#000000',
            },
            filled: {
              'enabled-fill': '#0000000f',
              'hover-fill':   '#00000017',
            },
            outlined: {
              'enabled-border': '#0000003b',
              'hover-border':   '#000000',
            },
          },
          rating: {
            'enabled-border': '#0000003b',
            'active-fill':    '#ffb400',
          },
          snackbar: {
            fill: '#323232',
          },
          stepper: {
            connector: '#bdbdbd',
          },
          appbar: {
            'default-fill': '#f5f5f5',
          },
          chip: {
            'default-enabled-border': '#bdbdbd',
            'default-close-fill':     '#000000',
            'default-hover-fill':     '#0000001f',
            'default-focus-fill':     '#00000033',
          },
          backdrop: {
            fill: '#00000080',
          },
          alert: {
            error: {
              text: '#b00020',
              bg:   '#fdeded',
            },
            warning: {
              bg:   '#fff4e5',
              text: '#ff6f00',
            },
            info: {
              text: '#123b50',
              bg:   '#e5f6fd',
            },
            success: {
              text: '#248670',
              bg:   '#edf7ed',
            },
          },
          breadcrumbs: {
            'collapse-fill': '#f5f5f5',
          },
          tooltip: {
            fill: '#616161e5',
          },
        },

        // elevation color
        elevation: {
          'outlined-border': '#e0e0e0',
        },

        // native
        native: {
          'scrollbar-bg': '#eeeeee',
        },
      },
    },
  },
  plugins: [],
}

export default config

// ============================================================
// Dark theme color overrides (palette.Dark.tokens.json)
// For use with JS-based theme switching.
// References have been resolved to hex values.
// ============================================================
export const darkTheme = {
  // text
  text: {
    primary:       '#ffffff',
    secondary:     '#ffffffb2',
    disabled:      '#ffffff61',
    hover:         '#ffffff14',
    selected:      '#ffffff29',
    focus:         '#ffffff1f',
    'focus-visible': '#ffffff4d',
  },

  // primary
  primary: {
    main:             '#026ea1',
    dark:             '#468db5',
    light:            '#d2e2ed',
    contrast:         '#000000de',
    hover:            '#90caf914',
    selected:         '#90caf929',
    focus:            '#90caf91f',
    'focus-visible':  '#90caf94d',
    'outlined-border': '#90caf980',
  },

  // secondary
  secondary: {
    main:             '#ce93d8',
    dark:             '#ab47bc',
    light:            '#f3e5f5',
    contrast:         '#000000de',
    hover:            '#ce93d814',
    selected:         '#ce93d829',
    focus:            '#ce93d81f',
    'focus-visible':  '#ce93d84d',
    'outlined-border': '#ce93d880',
  },

  // action
  action: {
    active:      '#ffffff8f',
    hover:       '#ffffff14',
    selected:    '#ffffff29',
    focus:       '#ffffff1f',
    disabled:    '#ffffff61',
    'disabled-bg': '#ffffff1f',
  },

  // error
  error: {
    main:             '#c0334d',
    dark:             '#b00020',
    light:            '#d06679',
    contrast:         '#ffffff',
    hover:            '#f4433614',
    selected:         '#f4433629',
    'focus-visible':  '#f443364d',
    'outlined-border': '#f4433680',
  },

  // warning
  warning: {
    main:             '#f8ba66',
    dark:             '#ff9800',
    light:            '#f9c47c',
    contrast:         '#000000de',
    hover:            '#ffa72614',
    selected:         '#ffa72629',
    'focus-visible':  '#ffa7264d',
    'outlined-border': '#ffa72680',
  },

  // info
  info: {
    main:             '#7eafcb',
    dark:             '#468db5',
    light:            '#90bbd3',
    contrast:         '#000000de',
    hover:            '#29b6f614',
    selected:         '#29b6f629',
    'focus-visible':  '#29b6f64d',
    'outlined-border': '#29b6f680',
  },

  // success
  success: {
    main:             '#69b5a3',
    dark:             '#28957c',
    light:            '#7ebfb0',
    contrast:         '#000000de',
    hover:            '#66bb6a14',
    selected:         '#66bb6a29',
    'focus-visible':  '#66bb6a4d',
    'outlined-border': '#66bb6a80',
  },

  // common (same structure as light)
  common: {
    black:                 '#000000',
    'black-hover':         '#00000014',
    'black-selected':      '#00000029',
    'black-focus':         '#0000001f',
    'black-focus-visible': '#0000004d',
    'black-outlined-border': '#00000080',
    white:                 '#ffffff',
    'white-hover':         '#ffffff14',
    'white-selected':      '#ffffff29',
    'white-focus':         '#ffffff1f',
    'white-focus-visible': '#ffffff4d',
    'white-outlined-border': '#ffffff80',
  },

  // background
  bg: {
    body:        '#121212',
    'surface-0':  '#121212',
    'surface-1':  '#1e1e1e',
    'surface-2':  '#232323',
    'surface-3':  '#252525',
    'surface-4':  '#272727',
    'surface-5':  '#2a2a2a',
    'surface-6':  '#2c2c2c',
    'surface-7':  '#2c2c2c',
    'surface-8':  '#2e2e2e',
    'surface-9':  '#2e2e2e',
    'surface-10': '#313131',
    'surface-11': '#313131',
    'surface-12': '#333333',
    'surface-13': '#333333',
    'surface-14': '#333333',
    'surface-15': '#333333',
    'surface-16': '#363636',
    'surface-17': '#363636',
    'surface-18': '#363636',
    'surface-19': '#363636',
    'surface-20': '#383838',
    'surface-21': '#383838',
    'surface-22': '#383838',
    'surface-23': '#383838',
    'surface-24': '#383838',
  },

  // border
  border: {
    divider: '#ffffff1f',
  },

  // components
  component: {
    switch: {
      'slide-track-fill':   '#ffffff61',
      'knob-fill-enabled':  '#e0e0e0',
      'knob-fill-disabled': '#757575',
    },
    avatar: {
      fill: '#757575',
    },
    input: {
      standard: {
        'enabled-border': '#ffffff6b',
        'hover-border':   '#ffffff',
      },
      filled: {
        'enabled-fill': '#ffffff17',
        'hover-fill':   '#ffffff1f',
      },
      outlined: {
        'enabled-border': '#ffffff3b',
        'hover-border':   '#ffffff',
      },
    },
    rating: {
      'enabled-border': '#ffffff3b',
      'active-fill':    '#ffb400',
    },
    snackbar: {
      fill: '#2c2c2c',
    },
    stepper: {
      connector: '#757575',
    },
    appbar: {
      'default-fill': '#272727',
    },
    chip: {
      'default-enabled-border': '#616161',
      'default-close-fill':     '#ffffff',
      'default-hover-fill':     '#ffffff1f',
      'default-focus-fill':     '#ffffff33',
    },
    backdrop: {
      fill: '#00000080',
    },
    alert: {
      error: {
        text: '#f4c7c7',
        bg:   '#160b0b',
      },
      warning: {
        bg:   '#191207',
        text: '#ffe2b7',
      },
      info: {
        text: '#b8e7fb',
        bg:   '#071318',
      },
      success: {
        text: '#cce8cd',
        bg:   '#0c130d',
      },
    },
    breadcrumbs: {
      'collapse-fill': '#757575',
    },
    tooltip: {
      fill: '#616161e5',
    },
  },

  // elevation color
  elevation: {
    'outlined-border': '#ffffff1f',
  },

  // native
  native: {
    'scrollbar-bg': '#616161',
  },
}
