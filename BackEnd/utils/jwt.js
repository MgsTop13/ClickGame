import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
dotenv.config();
const KEY = "Game-Mgs"

export function generateToken(usuario) {
  const userInfo = {
    name: usuario.username,
    email: usuario.email,
    pass: usuario.pass,
    role: usuario.id_user,
    date: new Date()
  };
  console.log(usuario)
  return jwt.sign(userInfo, KEY, { expiresIn: '40m' });
}

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, KEY);
    return decoded;
  } catch(error) {
    return error;
  }
}


export function getTokenInfo(req) {
  try {
    let token = req.headers['x-access-token'];
    if (token === undefined)
      token = req.query['x-access-token']

    return jwt.verify(token, KEY);
  } catch {
    return null;
  }
}

export function getAuthentication(checkRole, throw401 = true) {
  return (req, resp, next) => {
    try {
      let token = req.headers['x-access-token'];
      if (token === undefined)
        token = req.query['x-access-token'];

      const signd = jwt.verify(token, KEY);
      req.user = signd;

      if (checkRole && !checkRole(signd) && signd.role !== 'admin')
        return resp.status(403).end();

      next();
    } catch {
      if (throw401) {
        resp.status(401).end();
      } else {
        next();
      }
    }
  }
}