# Profile Card Component

A modern, accessible, and responsive profile card component built with semantic HTML, CSS, and vanilla JavaScript.

## Features

- Fully accessible with ARIA labels and semantic HTML
- Responsive design (mobile, tablet, desktop)
- All elements include data-testid attributes for automated testing
- Real-time timestamp display in milliseconds
- Keyboard navigable with visible focus states
- Modern UI with Lucide icons

## Live Demo

**Live URL:** []

## Requirements Met

All required data-testid attributes are implemented:
- test-profile-card - Root container
- test-user-name - User name
- test-user-bio - Biography
- test-user-time - Current timestamp (milliseconds)
- test-user-avatar - Profile image
- test-user-social-links - Social links container
- test-user-social-linkedin, test-user-social-github, test-user-social-instagram - Individual links
- test-user-hobbies - Hobbies list
- test-user-dislikes - Dislikes list

## Technology Stack

- HTML5 - Semantic markup
- CSS3 - Flexbox, Grid, CSS Variables
- Vanilla JavaScript - No frameworks required
- Lucide Icons - SVG icon library

## Run Locally

### Option 1: Direct File Open
1. Clone this repository:
```bash
   git clone https://github.com/
```
2. Navigate to the project folder:
```bash
   cd profile-card-project
```
3. Open index.html in your browser:
   - Windows: Double-click the file or right-click, Open with, Browser
   - Mac: Double-click the file or use `open index.html`
   - Linux: `xdg-open index.html`

### Option 2: Local Server (Recommended)

Using VS Code:
1. Install "Live Server" extension
2. Right-click index.html
3. Select "Open with Live Server"

Using Node.js (if you have it installed):
```bash
# Install a simple server globally
npm install -g http-server

# Run the server
http-server

# Then visit: http://localhost:8080
```

## Testing

### Manual Testing Checklist
- All data-testid attributes are present and correct
- Timestamp displays current time in milliseconds
- Avatar image loads with proper alt text
- All social links open in new tabs with security attributes
- Keyboard navigation works (Tab through all interactive elements)
- Focus states are visible
- Layout is responsive on mobile (< 640px), tablet (641-1024px), and desktop (> 1024px)
- Hobbies and dislikes are displayed as separate lists


## Responsive Breakpoints

- Mobile: < 640px (single column, stacked layout)
- Tablet: 641px - 1024px (two-column lists)
- Desktop: > 1024px (full grid layout)

## Accessibility Features

- Semantic HTML5 elements (article, nav, section, figure)
- Proper heading hierarchy
- Alt text on images
- ARIA labels for navigation
- Keyboard-accessible interactive elements
- Visible focus indicators
- Color contrast meets WCAG AA standards

## Customization

### Change Colors
Edit the gradient in the CSS:
```css
body {
  background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
}
```

### Change Avatar
Replace the image URL in index.html:
```html
<img src="YOUR_IMAGE_URL" alt="Your name profile picture">
```

### Add More Social Links
Follow the existing pattern in the HTML:
```html
<li>
  <a href="YOUR_URL" target="_blank" rel="noopener noreferrer" 
     class="social-link" data-testid="test-user-social-NETWORK">
    <i data-lucide="ICON_NAME" class="icon"></i>
    <span>Platform Name</span>
  </a>
</li>
```

## License

This project is open source and available under the MIT License.

## Author

[Your Name]
- GitHub: [@Enioluwafe1](https://github.com/Enioluwafe1)
- LinkedIn: [Enioluwafe Odunayo](https://www.linkedin.com/in/enioluwafe-odunayo-050321338)

## Acknowledgments

- Icons by Lucide Icons (https://lucide.dev/)
