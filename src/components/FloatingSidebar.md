# FloatingSidebar Component

<!-- 
Development & Code by Ultra Cube Team
www.ucubetech.com
https://github.com/ultra-cube
-->

A reusable, elegant floating sidebar navigation component for React applications with TypeScript support.

## Features

✅ **Auto Section Detection** - Automatically detects and highlights active sections using Intersection Observer  
✅ **Dark Mode Support** - Seamlessly adapts to light/dark themes  
✅ **Multilingual** - Built-in support for Arabic (RTL) and English (LTR)  
✅ **Smooth Scrolling** - Smooth navigation between sections with customizable offset  
✅ **Responsive Design** - Hidden on mobile by default, optionally visible  
✅ **Beautiful Animations** - Framer Motion powered transitions and hover effects  
✅ **Tooltip Bubbles** - Elegant tooltips that show section names on hover  
✅ **Customizable** - Flexible props for different use cases  
✅ **TypeScript** - Full type safety and IntelliSense support  

## Installation

The component requires these dependencies:

```bash
npm install framer-motion react-intersection-observer lucide-react
```

## Basic Usage

```tsx
import FloatingSidebar, { SidebarSection } from '@/components/FloatingSidebar';

const MyPage = () => {
  const [currentLang] = useState<'ar' | 'en'>('ar');

  const sections: SidebarSection[] = [
    { id: 'hero', icon: 'home', label: 'Home', labelAr: 'الرئيسية' },
    { id: 'about', icon: 'info', label: 'About', labelAr: 'من نحن' },
    { id: 'contact', icon: 'messageSquare', label: 'Contact', labelAr: 'تواصل' }
  ];

  return (
    <div>
      {/* Your page sections with matching IDs */}
      <section id="hero">Hero Section</section>
      <section id="about">About Section</section>
      <section id="contact">Contact Section</section>

      {/* Floating Sidebar */}
      <FloatingSidebar 
        sections={sections}
        currentLang={currentLang}
      />
    </div>
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sections` | `SidebarSection[]` | **Required** | Array of section definitions |
| `currentLang` | `'ar' \| 'en'` | `'ar'` | Current language for labels |
| `className` | `string` | `''` | Additional CSS classes |
| `offset` | `number` | `80` | Scroll offset for fixed headers |
| `threshold` | `number` | `0.3` | Intersection observer threshold |
| `showOnMobile` | `boolean` | `false` | Show sidebar on mobile devices |

## Section Definition

```tsx
interface SidebarSection {
  id: string;           // Must match section ID in DOM
  icon: keyof typeof iconMap;  // Icon name from available icons
  label: string;        // English label
  labelAr: string;      // Arabic label
}
```

## Available Icons

The component includes these built-in icons:

- `home` - Home icon
- `info` - Information icon  
- `target` - Target/goal icon
- `eye` - Vision icon
- `heart` - Values/love icon
- `trendingUp` - Statistics icon
- `award` - Services/award icon
- `calendar` - Milestones/date icon
- `rocket` - Goals/rocket icon
- `messageSquare` - Contact icon
- `shield` - Trust/security icon
- `users` - People/team icon
- `globe` - Global/world icon

## Advanced Usage

### Custom Offset and Threshold

```tsx
<FloatingSidebar 
  sections={sections}
  currentLang={currentLang}
  offset={120}        // Custom header height
  threshold={0.5}     // More strict intersection detection
/>
```

### Mobile Support

```tsx
<FloatingSidebar 
  sections={sections}
  currentLang={currentLang}
  showOnMobile={true}  // Show on mobile devices
/>
```

### Custom Styling

```tsx
<FloatingSidebar 
  sections={sections}
  currentLang={currentLang}
  className="right-8"  // Custom positioning
/>
```

## Page Setup

For the sidebar to work properly, your page sections must have matching IDs:

```tsx
// ✅ Correct - IDs match the section definitions
<section id="hero">...</section>
<section id="about">...</section>
<section id="contact">...</section>

// ❌ Incorrect - IDs don't match
<section id="hero-section">...</section>  // Won't work
<section id="about-us">...</section>       // Won't work
```

## Theme Integration

The component automatically detects and adapts to:

- **Dark mode** via `localStorage.theme` or `prefers-color-scheme`
- **System theme changes** in real-time
- **Manual theme toggles** in your application

## Animation Details

- **Entry animation**: Scale and fade in (0.5s)
- **Hover effects**: Scale up (1.05x) with smooth transitions
- **Active indicator**: Animated background with layoutId
- **Tooltip bubbles**: Slide in from right with scale effect
- **Glow effect**: Pulsing background animation

## Performance

- Uses `IntersectionObserver` for efficient scroll detection
- Optimized re-renders with proper dependency arrays
- Hardware-accelerated animations via CSS transforms
- Minimal DOM impact with single observer instance

## Browser Support

- **Modern browsers**: Full support
- **Intersection Observer**: Required (IE11 not supported)
- **CSS animations**: Supported in all modern browsers

## Troubleshooting

### Sections not being detected
- Ensure section IDs match the `id` property in section definitions
- Check that sections have sufficient height/content
- Verify the `threshold` value isn't too strict

### Sidebar not visible
- Check if `showOnMobile` is needed for mobile devices
- Verify z-index conflicts with other elements
- Ensure parent container has `position: relative` if needed

### Theme not switching
- Verify `localStorage.theme` is being set correctly
- Check for CSS class conflicts
- Ensure the component mounts after theme initialization

## Examples

See `src/examples/FloatingSidebarExample.tsx` for complete usage examples including:

- Basic implementation
- Custom configuration
- Mobile support
- Different page layouts

## License

This component is part of the BSE Website project and follows the same licensing terms.
