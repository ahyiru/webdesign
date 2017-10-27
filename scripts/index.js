
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.development');
var colors=require('colors');

var path=require('path');
var fs=require('fs');

var webpackDevMiddleware=require('webpack-dev-middleware');
var webpackHotMiddleware=require('webpack-hot-middleware');

var app = express();
var compiler = webpack(webpackConfig);

var config=require('../configs');

app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  compress: true, 
  noInfo: true,
  stats: {
    colors: true,
  },
}));

app.use(webpackHotMiddleware(compiler));

app.set('host', process.env.IP || config.HOST);
app.set('port', process.env.PORT || config.PORT);

//  var bcrypt = require('bcryptjs');
var cors=require('cors');
var logger=require('morgan');
var bodyParser=require('body-parser');
var compression=require('compression');
app.use(logger('dev'));
app.use(bodyParser.json({limit:'20mb'}));
app.use(bodyParser.urlencoded({limit:'20mb',extended:true}));

app.use(compression());

if(app.get('env')==='production'){
  app.use(function(req,res,next) {
    var protocol=req.get('x-forwarded-proto');
    protocol=='https'?next():res.redirect('https://'+req.hostname+req.url);
  });
}
// app.use(express.static(path.join(__dirname, './demo')));
app.all('*',function(req,res,next){
  // res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Origin',req.headers.origin);
  res.header('Access-Control-Allow-Credentials','true');
  res.header('Access-Control-Allow-Headers','X-Requested-With,Authorization,Accept,Origin,Content-Type');
  res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By','3.2.1');
  res.header('Content-Type','application/json;charset=utf-8');
  if(req.method==='OPTIONS'){
    res.status(200).end();
  }else{
    next();
  }
});

var ow='';
var en0=require('os').networkInterfaces().en0;
if(en0&&en0[1]){
	ow=` 外网地址: http://${en0[1].address}:${app.get('port')}`.magenta;
}

// var server=app.listen(app.get('port'),app.get('host'),(err)=>{
var server=app.listen(app.get('port'),(err)=>{
  if (err) {
    console.log(err);
    return false;
  }
  console.log('\n服务已启动! '.black+'✓'.green);
  console.log(`\n监听端口: ${app.get('port')} ,正在构建,请稍后...`.cyan);
  console.log('-----------------------------------'.grey);
  console.log(` 本地地址: http://${app.get('host')}:${app.get('port')}`.magenta);
  console.log(ow);
  console.log('-----------------------------------'.grey);
  console.log('\n按下 CTRL-C 停止服务\n'.blue);
  const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
  // opn(`${protocol}://${app.get('host')}:${app.get('port')}`);
});

/*****************************************************************************/

const test=require('../servers/test');
test(app);

const temp=require('../servers/temp');
const project=require('../servers/project');







