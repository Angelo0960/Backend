import express from 'express';

const app = express();

const port = 3000;

app.use(express.json());
try
{
app.listen(port, () => {
  console.log('listening to port 3000...');
});
}catch(e){
    console.error('Error starting the server:', e);
}

app.get('/patal', async (req, res) => {
  res.status(200).json({message: 'Hello! I am Mark Angelo G. Patal'});
});