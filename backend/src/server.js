import express from 'express';
import mainRoutes from './routes/index.js';

const app = express();

app.use(express.json());

// Use the main router
app.use('/api', mainRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
