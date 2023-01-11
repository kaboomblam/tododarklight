# Styles
Application styles; attempt to use [Material Design](https://m3.material.io/) (colors, concepts) with [tailwind css utility classes](https://tailwindcss.com/docs). 


## Resources
- [Material 3 Theme Builder](https://m3.material.io/theme-builder)
- [Tailwind CSS Color Palette](https://tailwindcss.com/docs/customizing-colors)

## Color theory
[Source (Smashing Magazine)](https://www.smashingmagazine.com/2010/02/color-theory-for-designers-part-2-understanding-concepts-and-terminology/)

**Hue** - Hue is the most basic of color terms and denotes an object’s color. When we say “blue,” “green,” or “red,” we’re talking about hue. The hues you use in your designs convey important messages to your website’s visitors.

**Chroma** - Chroma refers to the purity of a color. A hue with high chroma has no black, white, or gray added to it. Conversely, adding white, black, or gray reduces its chroma. It’s similar to saturation but not quite the same. Chroma can be thought of as the brightness of a color in comparison to white.

**Saturation** - Saturation refers to how a hue appears under particular lighting conditions. Think of saturation in terms of weak vs. strong or pale vs. pure hues.

## From Material 3 Docs

[Read Source](https://m3.material.io/styles/color/the-color-system/key-colors-tones#843634bc-6816-480e-8367-7b6d58b2bb96).

### Accent colors
The **primary key** color is used to derive roles for key components across the UI.

The **secondary key** color is used for less prominent components in the UI such as filter chips, while expanding the opportunity for color expression.

The **tertiary key** color is used to derive the roles of contrasting accents that can be used to balance primary and secondary colors or bring heightened attention to an element.

### Neutral colors
The **neutral key** color is used to derive the roles of surface and background, as well as high emphasis text and icons.

The **neutral variant** key color is used to derive medium emphasis text and icons, surface variants, and component outlines. 

### Additional colors

- Error colors - semantic color for the error
- Custom colors - give teams more control and customization alongside the variability of a dynamic color environment

### Material Theme Builder

Can create and export color palettes.

[Material Theme Builder](https://m3.material.io/theme-builder).

## Tailwind CSS Color Palette

[Read Information Source](https://tailwindcss.com/docs/customizing-colors).

Incase you want to use tailwind css color palette.

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

# Application colors

These are **work in progress** colors:

## Dark theme
[Color inspiration; view on `Coolors.co`](https://coolors.co/a300a3-f2dfd7-ccccf5-14110f-3d3d3d).

[Selected Colors (which also work with default tailwind css palette)](https://coolors.co/f472b6-fbcfe8-bfdbfe-262626-52525b)

> **Note:** These colors are not final and are subject to change. I am only use similar colors from the tailwind colors because I enjoy the tailwind color palette. I use these colors to generate a theme from [Material Theme Builder](https://m3.material.io/theme-builder#/custom)

primary: `#f472b6`

secondary: `#fbcfe8`

tertiary: `#bfdbfe`

neutral: `#262626`

neutral-variant: `#52525b`
> Neutral variant doesn't have a place input in Material Theme Builder

# Credits
Material 3 Documentation: 
https://m3.material.io/styles/color/the-color-system/key-colors-tones#843634bc-6816-480e-8367-7b6d58b2bb96

Color Theory for Designer, Part 2: Understanding Concepts and Terminology: https://www.smashingmagazine.com/2010/02/color-theory-for-designers-part-2-understanding-concepts-and-terminology/