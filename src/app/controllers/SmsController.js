import { Client, TextContent } from '@zenvia/sdk';

class SmsController {
  async store(request, response){

    const { textMessage, phoneNumber } = request.body;

    const client = new Client('_ZaV3R9-BmTlTqjpKY-_KLq7IzJ2U__PfZeM');

    const sms = client.getChannel('sms');

    const content = new TextContent(textMessage);

    sms.sendMessage('ballistic-mice', phoneNumber, content)
    .then((res) => {
      return response.json(res);
    })
    .catch((error) => {
      console.log('Error:', error);
    });

  }
}
