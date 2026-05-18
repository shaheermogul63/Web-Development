## 🚀 Express.js Conversion Complete!

Your landing page has been successfully converted into an Express.js application!

### 📁 New Project Structure

```
Lab Task 2/
├── 📄 server.js              ← Main Express server file
├── 📄 package.json            ← Dependencies and scripts
├── 📄 .gitignore              ← Git ignore configuration
├── 📄 SETUP.md                ← Detailed setup guide
├── 📁 views/                  ← EJS Templates (server-rendered HTML)
│   ├── homepage.ejs           ← Main landing page
│   └── 404.ejs                ← Error page
├── 📁 public/                 ← Static files served to browser
│   ├── css/
│   │   └── style.css          ← All your styling
│   ├── js/
│   │   └── app.js             ← Carousel & menu functionality
│   └── images/                ← Image folder (copy your images here)
└── 📁 Images/                 ← Original images (move to public/images)
```

---

## ⚡ Quick Start

### 1️⃣ Install Dependencies
```bash
cd "Lab Task 2"
npm install
```

### 2️⃣ Run the Server
```bash
npm start          # Production mode
# OR
npm run dev        # Development mode (auto-restart)
```

### 3️⃣ Access Your App
Open browser and go to: **http://localhost:3000**

---

## 📋 Important: Copy Your Images

Your image files are currently in the `Images/` folder (original structure).

**Move them to the Express folder:**

From: `Images/` → To: `public/images/`

Image files needed:
- Event Setup.jpeg
- Banquet Hall.jpeg
- Wedding Hall.jpeg
- Location View.jpeg
- Wedding Venue.jpeg
- Interior.jpeg

> **Tip:** Copy the contents of the `Images/` folder into `public/images/`

---

## 📚 Files Reference

| File | Purpose |
|------|---------|
| `server.js` | Express server & routing |
| `package.json` | Dependencies & scripts |
| `views/homepage.ejs` | Main page (dynamic HTML) |
| `views/404.ejs` | Error page |
| `public/css/style.css` | Styling (same as original) |
| `public/js/app.js` | JavaScript (Carousel + Menu) |
| `public/images/` | Image assets |

---

## 🔗 How Paths Work

### In EJS Templates:
```html
<!-- CSS -->
<link rel="stylesheet" href="/css/style.css">

<!-- JavaScript -->
<script src="/js/app.js"></script>

<!-- Images -->
<img src="/images/Event Setup.jpeg" alt="Event Setup">
```

All paths start with `/` because Express serves the `public/` folder at the root.

---

## ✨ What Changed From Static HTML

| Feature | Before | After |
|---------|--------|-------|
| **Rendering** | Client-side (HTML files) | Server-side (EJS templates) |
| **Server** | Static file server | Express.js application |
| **Routing** | File paths | URL routes |
| **Scalability** | Limited | Ready for backend features |
| **Future Features** | Hard to add | Easy to integrate |

---

## 🛠 Troubleshooting

### Issue: "Cannot find module 'express'"
**Solution:** Run `npm install`

### Issue: "Port 3000 is already in use"
**Solution:** Edit `server.js` and change:
```javascript
const PORT = 3001;  // Use a different port
```

### Issue: Images not loading
**Solution:** Make sure images are in `public/images/` folder

### Issue: Styles/JS not loading
**Solution:** Check that files are in:
- `public/css/style.css`
- `public/js/app.js`

---

## 📖 Learn More

- **[Express.js Docs](https://expressjs.com/)** - Full documentation
- **[EJS Docs](https://ejs.co/)** - Templating engine
- **[Node.js Docs](https://nodejs.org/)** - Runtime environment

---

## 🎯 Next Steps

After setting up, you can:

1. ✅ Add a contact form with backend processing
2. ✅ Connect to a database (MongoDB, PostgreSQL, etc.)
3. ✅ Create an admin dashboard
4. ✅ Add user authentication
5. ✅ Deploy to the cloud (Heroku, DigitalOcean, AWS, etc.)

---

## 📝 File Instructions

### All original functionality preserved:
- ✅ Responsive design
- ✅ Mobile hamburger menu
- ✅ Photo carousel with autoplay
- ✅ Keyboard navigation
- ✅ Smooth animations
- ✅ Contact information

### Features that work the same:
- Navigation with mobile menu toggle
- Image carousel with previous/next buttons
- Autoplay carousel (5 seconds)
- Keyboard arrow navigation
- Hover effects
- All responsive breakpoints (Desktop, Tablet, Mobile)

---

## 💡 Pro Tips

1. **Use `npm run dev`** during development - automatically restarts when you edit files
2. **Check the browser console** (F12) for any JavaScript errors
3. **All CSS styling is identical** to your original version
4. **You can add more EJS templates** in the `views/` folder and routes in `server.js`

---

**🎉 Your Express.js application is ready to use!**

For more details, see **SETUP.md**
