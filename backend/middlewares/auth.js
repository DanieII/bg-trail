import jwt from 'jsonwebtoken'

const authenticateUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]

    const decodedToken = jwt.verify(token, 'secretKey')

    req.userId = decodedToken.userId

    next()
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' })
  }
}
