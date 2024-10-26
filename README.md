
# @precooked/react-icon

![Precooked Logo](https://precookedcode.com/assets/logos/logo-horizontal-dark.svg)

`@precooked/react-icon` is a customizable icon component for React projects. It supports dynamic icon paths, sizes, and colors, allowing users to use predefined icons or custom SVG paths.

## Installation

```bash
npm install @precooked/react-icon
```

## Props

| Prop   | Type                        | Default | Description                                                                                         |
|--------|-----------------------------|---------|-----------------------------------------------------------------------------------------------------|
| `name` | `string`                    | `undefined` | The name of the icon to display, based on the `icons` data array. Optional if `paths` is provided.   |
| `paths`| `IconPath[]`                | `undefined` | Array of custom SVG path objects to render instead of a predefined icon.                            |
| `size` | `number`                    | `24`    | The size of the icon in pixels.                                                                     |
| `styles` | `React.CSSProperties`      | `{}`    | Custom styles for the icon container.                                                               |
| `color` | `keyof colors \| string`  | `undefined` | Override color for the icon, using a color key from `colors` or a valid color string.               |

### `IconPath` interface

```ts
interface IconPath {
    d: string;
    color?: keyof typeof colors \| string;
}
```

## Example Usage

```tsx
import React from 'react';
import Icon from '@precooked/react-icon';

const MyComponent = () => (
  <div>
    <Icon name="home" size={32} color="primary" />
    <Icon 
      paths={[
        { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z", color: "secondary" },
      ]}
      size={40}
      styles={{ margin: '10px' }}
    />
  </div>
);

export default MyComponent;
```

## License

MIT

---

For more information, visit [Precooked](https://precookedcode.com).
