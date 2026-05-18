# Majestic Marquee - Express.js Landing Page

A fully converted Express.js based web application of the Majestic Marquee wedding venue landing page.

## Project Structure

```
Lab Task 2/
├── server.js                 # Main Express server
├── package.json              # Project dependencies
├── .gitignore                # Git ignore file
├── views/
│   ├── homepage.ejs          # Main landing page (EJS template)
│   └── 404.ejs               # Error page
├── public/
│   ├── css/
│   │   └── style.css         # Stylesheet
│   ├── js/
│   │   └── app.js            # Client-side JavaScript (Carousel & Menu)
│   └── images/               # Image files
│       ├── Event Setup.jpeg
│       ├── Banquet Hall.jpeg
│       ├── Wedding Hall.jpeg
│       ├── Location View.jpeg
│       ├── Wedding Venue.jpeg
│       └── Interior.jpeg
```

## Prerequisites

- **Node.js** (v14 or higher) - Download from [nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js)

## Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd "Lab Task 2"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   This will install:
   - `express` - Web framework for Node.js
   - `ejs` - Templating engine
   - `nodemon` - Auto-restart server during development (dev dependency)

## Running the Application

### Development Mode (with auto-restart)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3000`

**Access the application:**
- Homepage: [http://localhost:3000/](http://localhost:3000/)
- Contact: [http://localhost:3000/contact-us](http://localhost:3000/contact-us)

## What's New in Express Version

### Key Changes from Static HTML:
1. ✅ **Server-side rendering** with Express.js
2. ✅ **EJS templating engine** for dynamic content
3. ✅ **Static file serving** from the `public/` folder
4. ✅ **Routing system** for multiple pages
5. ✅ **Better project structure** following Node.js best practices
6. ✅ **Easy to add backend features** like forms, API endpoints, database integration

### File Path References:
- **CSS**: `<link rel="stylesheet" href="/css/style.css">`
- **JavaScript**: `<script src="/js/app.js"></script>`
- **Images**: `<img src="/images/Event Setup.jpeg" alt="Event Setup">`

Note: All static file paths start with `/` because they are served from the `public/` folder root.

## How Express Serves Files

### Express Middleware
```javascript
app.use(express.static('public'));
```

This line tells Express to:
- Look for files in the `public/` folder when receiving requests
- Serve CSS, JS, and images without any special routing

### Example Request Flow:
1. Browser requests `/css/style.css`
2. Express looks in `public/css/style.css`
3. File is served to the browser

## Stopping the Server

Press `Ctrl + C` in the terminal to stop the server.

## Troubleshooting

### Port 3000 is already in use:
Edit `server.js` and change the PORT:
```javascript
const PORT = 3001; // Change to another port
```

### Images not loading:
Make sure all image files are in the `public/images/` folder with the correct names (check capitalization):
- `Event Setup.jpeg`
- `Banquet Hall.jpeg`
- `Wedding Hall.jpeg`
- `Location View.jpeg`
- `Wedding Venue.jpeg`
- `Interior.jpeg`

### Modules not found:
Run `npm install` again to ensure all dependencies are installed.

## Features

- ✨ Responsive design for all devices
- 🎠 Interactive carousel for photo gallery
- 📱 Mobile hamburger menu
- 🎨 Beautiful UI with golden accents
- 📍 Location and contact information
- 🎯 Service listing
- ⚡ Fast and lightweight

## Next Steps

You can now:
1. Add a contact form with backend validation
2. Connect to a database
3. Create an admin panel
4. Deploy to a hosting service (Heroku, DigitalOcean, etc.)
5. Add more pages/routes

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [EJS Documentation](https://ejs.co/)
- [Node.js Documentation](https://nodejs.org/docs/)

---

**Created:** May 2026  
**Version:** 1.0.0
