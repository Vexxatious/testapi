import { cleanEnv, str, num } from 'envalid';

export default function envalid() {
  cleanEnv(process.env, {
    ACCESS_TOKEN: str(),
    DATABASE_URL: str(),
    PORT: num(),
  });
}
