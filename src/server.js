import app from './app';
import express from 'express';

app.use(express.static("src"))
app.listen(process.env.PORT || 3000);
