import util from 'util';
import jwt from  'jsonwebtoken';

export const sign = util.promisify(jwt.sign);
export const verify = util.promisify(jwt.verify);