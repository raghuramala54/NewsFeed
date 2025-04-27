// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models'); // Sequelize instance for DB connection check

// Load environment variables
dotenv.config();

// Import all route files
const founderRoutes = require('./routes/founders');
const startupRoutes = require('./routes/startups');
const newsRoutes = require('./routes/news');
const jobRoutes = require('./routes/jobs');
const newsletterRoutes = require('./routes/newsletter');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Base route
app.get('/', (req, res) => {
    res.send('🚀 Welcome to Startup News API');
});

// Mount API routes
app.use('/api/founders', founderRoutes);
app.use('/api/startups', startupRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/newsletter', newsletterRoutes);

/*const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false, // Optional: set to true if you want SQL logs
});*/

/*(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connection has been established successfully.');
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error.message);
    } finally {
        await sequelize.close();
    }
})();*/

// Test DB Connection
sequelize.authenticate()
    .then(() => console.log('✅ Database connected successfully.'))
    .catch((err) => console.error('❌ Unable to connect to the database:', err));


// Server listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🔥 Server running on http://localhost:${PORT}`));
