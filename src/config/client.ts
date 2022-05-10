import { Client } from '@line/bot-sdk';

const config = {
  channelAccessToken:
    'kEK6hvNLqRjE9W91GiM5hiDiiDmV/mS7MeY4avrPNoLfKQOHMmhVxi+FG8jBIgovvKaqWqR4rYgBUz7+8rgt0LDinIM9v6yV1XYDXaBoFkyCTYmT5DjlJQNqa93wt0Ns60K03zT92H/18g+oBM/ccwdB04t89/1O/w1cDnyilFU=',
  channelSecret: '3efcfb6b14ddd1fbf0a57894263ec13f',
};
export const client = new Client(config);
// export = { client };
