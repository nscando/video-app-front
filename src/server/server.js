import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
     console.log('Development config');
     const webpackconfig = require('../../webpack.config');
     const webpackDevMiddleware = require('webpack-dev-middleware');
     const webpackHotMiddleware = require('webpack-hot-middleware');
     const compiler = webpack(webpackconfig);
     const serverConfig = { port: PORT, hot: true };

     app.use(webpackDevMiddleware(compiler, serverConfig));
     app.use(webpackHotMiddleware(compiler))
}

app.get('*', (req, res) => {

     res.send({ hello: 'express' });
});

app.listen(PORT, (err) => {
     if (err) {
          console.log(err);
     } else {
          console.log('Server is running on port 3000 ');
     }
});
