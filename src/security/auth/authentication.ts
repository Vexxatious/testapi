import { verify, sign } from 'jsonwebtoken';
import { UserType } from 'userType';
import dotenv from 'dotenv';
dotenv.config({ path: '/Users/sergio/Developer/sego-starter-kit-b-ts/.env' });

function verifyToken(token: string): any {
  let secret = '';
  if (process.env.ACCESS_TOKEN === undefined) {
    console.log('Secret is unfined');
  } else {
    secret = process.env.ACCESS_TOKEN;
  }

  var payload = verify(token, secret);

  return payload;
}

function signToken(user: UserType, timeString: string) {
  let secret = '';
  if (process.env.ACCESS_TOKEN === undefined) {
    console.log('Secret is unfined');
  } else {
    secret = process.env.ACCESS_TOKEN;
  }
  var token = sign(user, secret, {
    expiresIn: timeString,
  });
  return token;
}

export { verifyToken, signToken };
