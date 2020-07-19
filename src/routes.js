import { Router } from 'express';
import 'dotenv/config';
import { Client, TextContent } from '@zenvia/sdk';

import SmsController from './app/controllers/SmsController';

const routes = new Router();

// routes.post('/', SmsController.store);

routes.post('/', (request, response) => {
  const { textMessage, phoneNumber } = request.body;

  const client = new Client(process.env.API_KEY); //gitignore

  const sms = client.getChannel('sms');

  const content = new TextContent(textMessage);

  sms
    .sendMessage('ballistic-mice', phoneNumber, content)
    .then((response) => {
      // console.log('Response:', response);
      resposta = response;
    })
    .catch((error) => {
      console.log('Error:', error);
    });
});

export default routes;
