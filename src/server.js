import express from 'express';
import app from './app';

app.use(express.static("src"))
app.listen(process.env.PORT || 3000);
