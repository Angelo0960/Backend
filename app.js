import express from 'express';
import 'dotenv/config.js';
import bookRoutes from './routers/BookRouter.js';

import studentRoutes from './routers/StudentRouter.js';

const app = express();




app.use(express.json());

try
{
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening to port ${process.env.PORT || 3000}...`);
});
}catch(e){
    console.error('Error starting the server:', e);
}


app.use  ('/students', studentRoutes);
app.use  ('/books', bookRoutes);    
