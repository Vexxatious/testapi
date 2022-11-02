import bcrypt from 'bcrypt';
const saltRounds = 10;

function hash(password: string): string {
  return bcrypt.hashSync(password, saltRounds);
}

function decode(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}

export default { hash, decode };
