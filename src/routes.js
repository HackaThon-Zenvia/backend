import { Router } from 'express';
import 'dotenv/config';
import { Client, TextContent } from '@zenvia/sdk';

const routes = new Router();

routes.post('/sms', (req, res) => {
  const { textMessage, phoneNumber } = req.body;

  const client = new Client(process.env.API_KEY);

  const sms = client.getChannel('sms');

  const content = new TextContent(textMessage);

  phoneNumber.map(number => {
    sms
    .sendMessage('ballistic-mice', number, content)
    .then((response) => {
      // console.log('Response:', response);
      return res.json(response);
    })
    .catch((error) => {
      // console.log('Error:', error);
      return res.json(error);
    });
  });


});

export default routes;
