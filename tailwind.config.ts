
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        onesec: {
          dark: '#0A0F29',   // Colore di sfondo scuro dall'immagine
          light: '#F8FAFC',  // Colore chiaro per il contrasto
          primary: '#54A9FF', // Colore blu principale dall'immagine del logo
          secondary: '#7E64E0', // Sfumatura violetta/blu dall'immagine
          accent: '#06DCFF'  // Colore accent ciano dall'immagine
        }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'slide-in': {
          '0%': {
            transform: 'translateX(-20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        'pulse-light': {
          '0%, 100%': {
            opacity: '0.6'
          },
          '50%': {
            opacity: '0.8'
          }
        },
        // Enhanced animations
        'float-enhanced': {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)'
          },
          '25%': {
            transform: 'translateY(-15px) rotate(2deg)'
          },
          '75%': {
            transform: 'translateY(15px) rotate(-2deg)'
          }
        },
        'rotate-3d': {
          '0%': {
            transform: 'rotateX(0deg) rotateY(0deg)'
          },
          '50%': {
            transform: 'rotateX(5deg) rotateY(10deg)'
          },
          '100%': {
            transform: 'rotateX(0deg) rotateY(0deg)'
          }
        },
        'scroll-indicator': {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
          '30%': {
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(10px)',
            opacity: '0'
          }
        },
        'wave': {
          '0%, 100%': {
            transform: 'translateX(-25%) scaleY(0.8)'
          },
          '50%': {
            transform: 'translateX(-25%) scaleY(1.2)'
          }
        },
        'bg-pan': {
          '0%': {
            'background-position': '0% center'
          },
          '100%': {
            'background-position': '200% center'
          }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'pulse-light': 'pulse-light 2s infinite',
        // Enhanced animations
        'float-enhanced': 'float-enhanced 9s ease-in-out infinite',
        'rotate-3d': 'rotate-3d 8s ease-in-out infinite',
        'scroll-indicator': 'scroll-indicator 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'wave': 'wave 12s linear infinite',
        'bg-pan': 'bg-pan 15s linear infinite'
			},
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'glow-primary': '0 0 15px 5px rgba(84,169,255,0.2)',
        'glow-secondary': '0 0 15px 5px rgba(126,100,224,0.2)',
        'glow-accent': '0 0 15px 5px rgba(6,220,255,0.2)',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'bounce-custom': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
