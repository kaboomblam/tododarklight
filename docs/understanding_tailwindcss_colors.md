# Tailwind Css

Utility-first CSS framework for rapidly building custom designs.

## Tailwind CSS Color Palette

[Read Source](https://tailwindcss.com/docs/customizing-colors).

Tailwind includes an expertly-crafted default [color palettes](https://tailwindcss.com/docs/customizing-colors) out-of-the-box that is a great starting point if you don’t have your own specific branding in mind.

### Customizing

In tailwind css you can update [tailwind config](https://tailwindcss.com/docs/configuration) file i.e. `tailwind.config.js` to customize colors.

> Example for color with multiple shades

```js
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'tahiti': {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
      // ...
    },
  },
}
```
Example use: `bg-tahiti-400`

> Example for color with `light` and `dark` variants

```js
module.exports = {
  theme: {
    colors: {
      // ...
      'tahiti': {
        light: '#67e8f9',
        DEFAULT: '#06b6d4',
        dark: '#0e7490',
      },
      // ...
    },
  },
}
```
Example user: `bg-tahiti-light`

### Extending Colors

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      }
    },
  },
}
```