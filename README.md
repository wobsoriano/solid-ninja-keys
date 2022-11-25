# solid-ninja-keys

Add `cmd+k` interface to your solid site. Built on top of [ninja-keys](https://github.com/ssleptsov/ninja-keys).

## Quick start

Install it:

```bash
pnpm add solid-ninja-keys # or npm or yarn
```

Use it:

```tsx
import { createSignal } from 'solid-js'
import { NinjaKeys } from 'solid-ninja-keys'

function App() {
  const [isDark, setIsDark] = createSignal(false)
  const hotkeys = [
    {
      id: 'Home',
      title: 'Open Home',
      hotkey: 'cmd+h',
      mdIcon: 'home',
      handler: () => {
        console.log('navigation to home')
      },
    },
    {
      id: 'Theme',
      title: 'Change theme...',
      mdIcon: 'desktop_windows',
      children: [
        {
          id: 'Light Theme',
          title: 'Change theme to Light',
          mdIcon: 'light_mode',
          handler: () => {
            setIsDark(false)
          },
        },
        {
          id: 'Dark Theme',
          title: 'Change theme to Dark',
          mdIcon: 'dark_mode',
          keywords: 'lol',
          handler: () => {
            setIsDark(true)
          },
        },
      ],
    },
  ]

  return (
    <div>
      <NinjaKeys isDark={isDark()} hotkeys={hotkeys} />
    </div>
  )
}

export default App
```

## Props

All [attributes](https://github.com/ssleptsov/ninja-keys#attributes) from ninja-keys are available plus additional props below:

| Field                | Default                     | Description                                                 |
|----------------------|-----------------------------|-------------------------------------------------------------|
| hotkeys          | `[]` | Array of [ninja actions](https://github.com/ssleptsov/ninja-keys#data)                                  |
| isDark          | `false` | Apply dark theme                                 |

## Methods

You can access ninja-keys methods anywhere in your app via `createNinjaKeys` primitive.

| Name                | Arg                     | Description                                                 |
|----------------------|-----------------------------|-------------------------------------------------------------|
| `open`          | parent?: string | Open menu with parent, if null then open root menu                                |
| `close`          | | Close menu                                |
| `setParent`          | parent?: string | Navigate to parent menu                                |

Example

```tsx
import { createNinjaKeys } from 'solid-ninja-keys'

const {
  open,
  close,
  setParent,
} = createNinjaKeys()
```

## Styling

If you need more style control, use the [CSS variables](https://github.com/ssleptsov/ninja-keys#css-variables) available.

## Icons

By default, components use icons from https://fonts.google.com/icons
.
To add Material icons for your website, you need to add them to your HTML, for example

```html
<link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
```

You can also use `svg` or `img`. Please refer to the [icons docs](https://github.com/ssleptsov/ninja-keys#icons).

## License

MIT
