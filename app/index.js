import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Router} from 'yrui';
import 'font-awesome/css/font-awesome.css';
import 'yrui/lib/yrui.css';
import './styles/config.less';
import Footer from './views/footer';
import Rightbar from './views/rightbar';
import {Profile,Theme} from './views/droplist';
import {app} from './models/init';
app.navbar.leftNav[0].drop=<Theme/>;
app.navbar.rightNav[3].drop=<Profile/>;

const App=()=>{
  app.rightbar=<Rightbar/>;
  app.footer=<Footer/>;
  return (
    <Router {...app} />
  );
};

ReactDOM.render(<App />, document.getElementById('phoenix'));



