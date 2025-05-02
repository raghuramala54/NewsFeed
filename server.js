// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models'); // Sequelize instance for DB connection check

// Load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Import all route files
const authRoutes = require('./routes/auth');
const founderRoutes = require('./routes/founders');
const startupRoutes = require('./routes/startups');
const newsRoutes = require('./routes/news');
const jobRoutes = require('./routes/jobs');
const newsletterRoutes = require('./routes/newsletter');
const externalNewsRoutes = require('./routes/externalNews');

// Base route
app.get('/', (req, res) => {
    res.send('🚀 Welcome to Startup News API');
});

// Mount API routes
app.use('/api/auth', authRoutes);         // ✨ Added this line for auth
app.use('/api/founders', founderRoutes);
app.use('/api/startups', startupRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/external-news', externalNewsRoutes);


// Test DB Connection
sequelize.authenticate()
    .then(() => console.log('✅ Database connected successfully.'))
    .catch((err) => console.error('❌ Unable to connect to the database:', err));

// Server listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`🔥 Server running on http://localhost:${PORT}`));
