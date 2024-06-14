import express from 'express';
const port = 5000;

const app = express();
app.get('/',(req,res) => {
    res.send("API is Running")
})

app.listen(port, () => console.log(`Server running on port ${port}`) )
