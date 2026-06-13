# Technical Requirements Document (TRD)
**Project Name:** DigitalBoost
**Tech Stack:** Vanilla HTML5, CSS3, JavaScript (ES6+). NO frameworks or libraries allowed.

## Architecture & File Structure
- `index.html`: Contains semantic HTML structure.
- `style.css`: Contains all styling, utilizing CSS variables for theming.
- `script.js`: Handles DOM manipulation, event listeners, and interactive logic.

## Technical Specifications

### HTML
- Use semantic tags (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
- Ensure all interactive elements are accessible (e.g., `aria-labels`, alt text for images).
- Use `picsum.photos` for image placeholders.

### CSS
- **Methodology**: Mobile-first approach using media queries. Use BEM-like naming for clarity if needed.
- **Variables**: Define `:root` variables for colors (primary blue, secondary purple, white, dark text), spacing, and font families.
- **Layout**: Heavy reliance on CSS Flexbox and CSS Grid for layout management.
- **Animations**:
  - `transition` for hover states.
  - `@keyframes` for the loading animation and scroll reveal setup.
  - Use `scroll-behavior: smooth` for anchor link navigation.

### JavaScript
- **Loading Screen**: Remove the loader overlay once the window fires the `load` event.
- **Mobile Menu**: Toggle CSS classes on the nav menu when the hamburger icon is clicked.
- **Scroll Reveal**: Use `IntersectionObserver` to trigger fade-in animations on elements as they enter the viewport.
- **Active Navigation**: Use `IntersectionObserver` on sections to update the active state of navigation links.
- **Testimonial Slider**: Implement a simple JS-based carousel modifying the `transform` property of the slider container.
- **Animated Counters**: Use `requestAnimationFrame` or `setInterval` to animate numbers from 0 to their target values when they intersect the viewport.
- **FAQ Accordion**: Toggle `.active` classes on FAQ items to expand/collapse content using `max-height` transitions.
- **Form Validation**: Prevent default form submission and check constraints (e.g., non-empty fields, valid email regex) before showing a success message.
- **Scroll-to-Top**: Show a fixed button when `window.scrollY` exceeds a threshold, and scroll to 0 when clicked.
