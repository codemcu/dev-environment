import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../../webpack.config.dev';

const app = express();
const port = 8081;
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, () => {
  open('http://localhost:8081');
  console.log(`listening in port ${port}`);
});
