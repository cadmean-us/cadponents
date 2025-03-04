/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@cadmean-us/cadponents/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				background: {
					DEFAULT: '#FFFFFF',
					secondary: '#FAFAFA'
				},
				t: {
					DEFAULT: '#071A2B',
					secondary: '#838D95',
					placeholder: '#C1C6CA',
					disabled: '#DADDDF',
					onColor: '#FFFFFF',
					onColorDisabled: '#C6C8C9',
					accent: '#7EB3FF'
				},
				layer: {
					'01': {
						DEFAULT: '#FFFFFF',
						hover: '#F8F9F9',
						active: '#F3F3F4'
					},
					'02': {
						DEFAULT: '#F5F5F6',
						hover: '#EEEFEF',
						active: '#E4E5E6'
					},
					disabled: '#F8F9F9',
					accent: {
						DEFAULT: '#7EB3FF',
						hover: '#F2F7FF',
						active: '#DFECFF'
					}
				},
				border: {
					DEFAULT: '#E1E2E3',
					focus: '#BFC1C3',
					selected: '#7EB3FF',
					disabled: '#EEEFEF'
				},
				support: {
					error: '#FF0000',
					success: '#0E8345',
					warning: '#DCAE0C',
					info: '#0D97D2'
				},
				icon: {
					primary: '#1E2126',
					secondary: '#A8AFB5',
					disabled: '#CDD1D5',
					onColor: '#FFFFFF',
					onColorDisabled: '#B5BABF',
					accent: '#7EB3FF'
				},
				button: {
					primaryEnabled: '#7EB3FF',
					primaryHover: '#9EC6FF',
					primaryHoverBg: '#9EC6FF',
					primaryActive: '#71A1E6',
					secondaryEnabled: '#ECF4FF',
					secondaryHover: '#DFECFF',
					secondaryActive: '#D2E4FF',
					disabled: '#F8F9F9',
					animating: 'rgba(126, 179, 255, 0.3)'
				}
			},

			fontSize: {
				// H1 classes
				h1b: ['72px', { lineHeight: '72px', letterSpacing: '-3px', fontWeight: '700' }],
				h1sb: ['72px', { lineHeight: '72px', letterSpacing: '-3px', fontWeight: '600' }],
				h1m: ['72px', { lineHeight: '72px', letterSpacing: '-3px', fontWeight: '500' }],
				h1r: ['72px', { lineHeight: '72px', letterSpacing: '-3px', fontWeight: '400' }],

				// H2 classes
				h2b: ['56px', { lineHeight: '60px', letterSpacing: '-2px', fontWeight: '700' }],
				h2sb: ['56px', { lineHeight: '60px', letterSpacing: '-2px', fontWeight: '600' }],
				h2m: ['56px', { lineHeight: '60px', letterSpacing: '-2px', fontWeight: '500' }],
				h2r: ['56px', { lineHeight: '60px', letterSpacing: '-2px', fontWeight: '400' }],

				// H3 classes
				h3b: ['40px', { lineHeight: '44px', letterSpacing: '-1.5px', fontWeight: '700' }],
				h3sb: ['40px', { lineHeight: '44px', letterSpacing: '-1.5px', fontWeight: '600' }],
				h3m: ['40px', { lineHeight: '44px', letterSpacing: '-1.5px', fontWeight: '500' }],
				h3r: ['40px', { lineHeight: '44px', letterSpacing: '-1.5px', fontWeight: '400' }],

				// H4 classes
				h4b: ['32px', { lineHeight: '36px', letterSpacing: '-1px', fontWeight: '700' }],
				h4sb: ['32px', { lineHeight: '36px', letterSpacing: '-1px', fontWeight: '600' }],
				h4m: ['32px', { lineHeight: '36px', letterSpacing: '-1px', fontWeight: '500' }],
				h4r: ['32px', { lineHeight: '36px', letterSpacing: '-1px', fontWeight: '400' }],

				// H5 classes
				h5b: ['24px', { lineHeight: '32px', letterSpacing: '-1px', fontWeight: '700' }],
				h5sb: ['24px', { lineHeight: '32px', letterSpacing: '-1px', fontWeight: '600' }],
				h5m: ['24px', { lineHeight: '32px', letterSpacing: '-1px', fontWeight: '500' }],
				h5r: ['24px', { lineHeight: '32px', letterSpacing: '-1px', fontWeight: '400' }],

				// T1 classes
				t1b: ['20px', { lineHeight: '28px', letterSpacing: '-0.8px', fontWeight: '700' }],
				t1sb: ['20px', { lineHeight: '28px', letterSpacing: '-0.8px', fontWeight: '600' }],
				t1m: ['20px', { lineHeight: '28px', letterSpacing: '-0.8px', fontWeight: '500' }],
				t1r: ['20px', { lineHeight: '28px', letterSpacing: '-0.8px', fontWeight: '400' }],

				// T2 classes
				t2b: ['16px', { lineHeight: '24px', letterSpacing: '-0.6px', fontWeight: '700' }],
				t2sb: ['16px', { lineHeight: '24px', letterSpacing: '-0.6px', fontWeight: '600' }],
				t2m: ['16px', { lineHeight: '24px', letterSpacing: '-0.6px', fontWeight: '500' }],
				t2r: ['16px', { lineHeight: '24px', letterSpacing: '-0.6px', fontWeight: '400' }],

				// T3 classes
				t3b: ['14px', { lineHeight: '20px', letterSpacing: '-0.1px', fontWeight: '700' }],
				t3sb: ['14px', { lineHeight: '20px', letterSpacing: '-0.1px', fontWeight: '600' }],
				t3m: ['14px', { lineHeight: '20px', letterSpacing: '-0.1px', fontWeight: '500' }],
				t3r: ['14px', { lineHeight: '20px', letterSpacing: '-0.1px', fontWeight: '400' }],

				// T4 classes
				t4b: ['12px', { lineHeight: '16px', letterSpacing: '0.3px', fontWeight: '700' }],
				t4sb: ['12px', { lineHeight: '16px', letterSpacing: '0.3px', fontWeight: '600' }],
				t4m: ['12px', { lineHeight: '16px', letterSpacing: '0.3px', fontWeight: '500' }],
				t4r: ['12px', { lineHeight: '16px', letterSpacing: '0.3px', fontWeight: '400' }]
			}
		},
		screens: {
			md: '992px',
			lg: '1280px'
		}
	},
	plugins: []
};
