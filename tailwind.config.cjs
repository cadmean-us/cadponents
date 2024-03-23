/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
      extend:{
          colors:{
              background01: '#FFFFFF',
              background02: '#FCFCFC',
              textPrimary: '#071A2B',
              textSecondary: '#838D95',
              textPlaceholder: '#C1C6CA',
              textDisabled: '#DADDDF',
              textOnColor: '#FFFFFF',
              textOnColorDisabled: '#C6C8C9',
              textAccent: '#7EB3FF',
              layer01: '#FFFFFF',
              layer01Hover: '#F8F9F9',
              layer01Active: '#F3F3F4',
              layer02: '#F5F5F6',
              layer02Hover: '#EEEFEF',
              layer02Active: '#E4E5E6',
              layerDisabled: '#F8F9F9',
              layerAccent: '#7EB3FF',
              layerAccentHover: '#F2F7FF',
              layerAccentActive: '#DFECFF',
              borderDefault: '#E1E2E3',
              borderFocus: '#BFC1C3',
              borderSelected: '#7EB3FF',
              borderDisabled: '#EEEFEF',
              supportError: '#FF0000',
              supportSuccess: '#0E8345',
              supportWarning: '#DCAE0C',
              supportInfo: '#0D97D2',
              iconPrimary: '#1E2126',
              iconSecondary: '#A8AFB5',
              iconDisabled: '#CDD1D5',
              iconOnColor: '#FFFFFF',
              iconOnColorDisabled: '#B5BABF',
              iconAccent: '#7EB3FF',
              buttonPrimaryEnabled: '#7EB3FF',
              buttonPrimaryHover: '#9EC6FF',
              buttonPrimaryActive: '#71A1E6',
              buttonSecondaryEnabled: '#ECF4FF',
              buttonSecondaryHover: '#DFECFF',
              buttonSecondaryActive: '#D2E4FF',
              buttonDisabled: '#F8F9F9',
              buttonAnimating: 'rgba(126, 179, 255, 0.30)',
          },
          borderRadius: {
              'c': '8px'
          },
          borderWidth: {
              'c': '1px'
          },
      }

  },
  plugins: []
};
