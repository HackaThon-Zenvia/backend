import 'dotenv/config';
import { Client, TextContent } from '@zenvia/sdk';

class SmsController {
  async store(req, res){

    const { textMessage, phoneNumber } = req.body;

  const client = new Client(process.env.API_KEY);

  const sms = client.getChannel('sms');

  const content = new TextContent(textMessage);

  sms
    .sendMessage('ballistic-mice', phoneNumber, content)
    .then((response) => {
      // console.log('Response:', response);
      // resposta = response;
      return res.json(response);
    })
    .catch((error) => {
      // console.log('Error:', error);
      return res.json(error);
    });

  }
}
