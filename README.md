# English Tutor Website

A modern, responsive website for English tutoring services built with React and Vite. The site features information about classes, booking, FAQ, and more.

## 🌐 Live Site

- **Domain**: [veronikafranz.ru](https://veronikafranz.ru) / [veronikafranz.com](https://veronikafranz.com)

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Multi-page Navigation**: Home, About, Classes, Booking, and FAQ pages
- **Modern UI**: Clean and professional design with smooth animations
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Image Carousels**: Student reviews and testimonials using react-slick
- **SEO Friendly**: Proper routing and meta tags
- **Fast Performance**: Built with Vite for optimal build times and HMR

## 🛠️ Tech Stack

- **React 19.1.0** - UI library
- **Vite 6.3.5** - Build tool and dev server
- **React Router DOM 7.6.2** - Client-side routing
- **TypeScript** - Type safety (partial implementation)
- **SCSS/Sass** - Styling with variables and mixins
- **React Burger Menu** - Mobile navigation menu
- **React Slick** - Image carousel component
- **Font Awesome** - Icons
- **ESLint** - Code linting

## 📁 Project Structure

```
english-tutor-2/
├── src/
│   ├── components/          # Reusable components
│   │   ├── BurgerMenu.tsx   # Mobile navigation menu
│   │   ├── Footer.tsx       # Site footer
│   │   └── ScrollToTop.tsx  # Scroll to top on route change
│   ├── pages/               # Page components
│   │   ├── Home/            # Home page
│   │   ├── About/           # About page
│   │   ├── Classes/         # Classes information
│   │   ├── Booking/         # Booking/scheduling
│   │   └── Faq/             # Frequently asked questions
│   ├── styles/              # Global styles
│   │   ├── colors.scss      # Color variables
│   │   ├── fonts.scss       # Font definitions
│   │   ├── mobile.scss      # Mobile styles
│   │   ├── tablet.scss      # Tablet styles
│   │   └── desktop.scss     # Desktop styles
│   ├── assets/              # Static assets
│   │   ├── fonts/           # Custom fonts
│   │   └── *.png            # Images
│   ├── App.jsx              # Main app component with routes
│   └── main.jsx             # Entry point
├── public/                  # Public assets
├── dist/                    # Build output
├── nginx.conf               # Nginx configuration
├── deploy.sh                # Deployment script
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd english-tutor-2
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

## 📜 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (outputs to `dist/` folder)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist/` directory, ready to be deployed to a web server.

## 🚢 Deployment

The project includes a deployment script (`deploy.sh`) that:

1. Builds the project
2. Syncs the built files to the server via rsync
3. Updates nginx configuration files
4. Reloads nginx

### Deployment Process

1. Ensure you have SSH access to the server configured as `english`
2. Make sure the server has nginx installed and configured
3. Run the deployment script:

```bash
./deploy.sh
```

The script will:
- Build the project (`npm run build`)
- Copy `dist/*` to `/root/projects/english-tutor` on the server
- Copy `nginx.conf` to `/etc/nginx/conf.d/nginx.conf`
- Copy `default` to `/etc/nginx/sites-available/default`
- Reload nginx service

### Manual Deployment

If you prefer to deploy manually:

1. Build the project: `npm run build`
2. Upload the `dist/` folder contents to your web server
3. Configure your web server to serve the `index.html` for all routes (SPA routing)
4. Ensure static assets are cached appropriately

## 🌐 Routes

The application uses the following routes:

- `/` - Home page
- `/about` - About page
- `/classes` - Classes information
- `/booking` - Booking and scheduling
- `/faq` - Frequently asked questions

## 🎨 Styling

The project uses SCSS with a mobile-first approach:

- **Mobile styles** (`mobile.scss`) - Base styles for mobile devices
- **Tablet styles** (`tablet.scss`) - Styles for tablet breakpoints
- **Desktop styles** (`desktop.scss`) - Styles for desktop breakpoints
- **Color variables** (`colors.scss`) - Centralized color definitions
- **Font definitions** (`fonts.scss`) - Custom font imports

## 🔧 Configuration

### Vite Configuration

The Vite configuration is in `vite.config.js`. It uses the React plugin for Fast Refresh.

### Nginx Configuration

The `nginx.conf` file includes:
- SSL/TLS configuration
- Static asset caching
- SPA routing support (all routes serve `index.html`)
- Optimized caching headers

## 📝 Development Notes

- The project uses a mix of JavaScript (`.jsx`) and TypeScript (`.tsx`) files
- Components are organized by page with separate mobile and desktop versions
- The `PageTemplate` component provides consistent page structure
- Scroll to top functionality is implemented for better UX on route changes

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly on different devices
4. Submit a pull request

## 📄 License

This project is private and proprietary.

## 👤 Author

**Nika Churikova** - English Tutor

---

For questions or support, please contact through the website.
