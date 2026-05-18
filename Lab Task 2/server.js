// ==========================================
// MAJESTIC MARQUEE EXPRESS SERVER
// ==========================================
// This is the main Express application file
// It sets up the server, configures EJS as the view engine,
// and defines routes for serving the landing page.

// Import the Express framework
const express = require('express');

// Create an Express application instance
const app = express();

// Set the port for the server to listen on
const PORT = 3000;

// ==========================================
// MIDDLEWARE CONFIGURATION
// ==========================================

// Set EJS as the view engine
// This tells Express to use EJS for rendering HTML templates
app.set('view engine', 'ejs');

// Set the directory where EJS templates (views) are stored
// By default, Express looks for views in a folder called 'views'
app.set('views', './views');

// Serve static files (CSS, JavaScript, images) from the 'public' directory
// With this middleware, files in 'public/' are served at the root URL (/)
// Example: public/css/style.css is accessible at /css/style.css
app.use(express.static('public'));

// Parse incoming JSON request bodies
app.use(express.json());

// Parse incoming form data (URL-encoded)
app.use(express.urlencoded({ extended: true }));

// ==========================================
// ROUTES
// ==========================================

// Home route - serves the main landing page
app.get('/', (req, res) => {
  // res.render() finds the EJS template in the 'views' folder and sends it to the client
  // 'homepage' will render 'views/homepage.ejs'
  res.render('homepage');
});

// Contact Us route - serves the contact page
app.get('/contact-us', (req, res) => {
  res.render('contact');
});

// ==========================================
// ERROR HANDLING
// ==========================================

// 404 Error - Route not found
app.use((req, res) => {
  res.status(404).render('404');
});

// ==========================================
// START THE SERVER
// ==========================================

// Listen on the specified port
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📄 Homepage: http://localhost:${PORT}/`);
  console.log(`📧 Contact: http://localhost:${PORT}/contact-us`);
  console.log(`\n💡 Tip: Press Ctrl+C to stop the server`);
  console.log(`💡 Use 'npm run dev' to run with auto-restart on file changes`);
});
