import * as React from 'react';
import {Provider,observer} from 'mobx-react';
/*import Router from './myrouter';
import Frame from './components/base/';

import {$emitter,$fetch,evalObj} from './tools/yiru-tools';
import {$notify} from './tools/dom-tools';
// import {sidebarMenu} from './routerModels';
import {login,main} from './routerModels';
import {dropList} from './models/models';
import {subscribeMenu,unSubscribeMenu,dispatchMenu,getMenu} from './stores/updateMenu';
import {subscribeToken,dispatchToken,unSubscribeToken} from './stores/userManage';

import stores from './stores/stores';

import 'font-awesome/css/font-awesome.css';
import './styles/y-style.less';
import './styles/stheme.less';
import {getDefault,isAuthed,clearAll,rmUser,rmToken,getToken} from './servers/storage';*/

import {Router} from 'yrui';
import 'font-awesome/css/font-awesome.css';
import 'yrui/lib/yrui.css';
import './styles/config.less';

const listClick=(name,v)=>{
  if(name==='profile'&&v.h4==='退出'){
    rmUser();
    rmToken();
    dispatchToken(getToken());
  }
};

import Footer from './views/footer';
import Rightbar from './views/rightbar';

import {Profile,Theme} from './views/droplist';

import {app} from './models/init';


app.navbar.leftNav[0].drop=<Theme/>;
app.navbar.rightNav[3].drop=<Profile/>;

export default class App extends React.Component{
  /*state={
    app:null,
  };
  componentWillMount(){
    this.getData();
  }
  async componentDidMount(){

  }
  async getData(){
    if(!getToken()){
      location.href='#/user/login';
      this.setState({
        app:{
          routers:login,
        },
      });
    }else{
      try{
        let app:any=await $fetch.get(`http://${config.jsonUri}/config.json`);
        // let app:any=await fetch(`http://${config.jsonUri}/config.json`).then(res=>res.json());
        app=evalObj(app);
        app.routers=getMenu();
        app.navbar.dropList=dropList;
        app.navbar.listClick=listClick;
        const reqPic=require.context('.',true,/^\.\/.*\.(png|jpg|jpeg|gif|psd)$/);
        app.brand.logo=reqPic(app.brand.logo);
        app.rightbar=<Rightbar/>;
        app.footer=<Footer/>;
        this.setState({
          app:app,
        });
        // return app;
      }catch(error){
        console.log(error);
        this.setState({
          app:null,
        });
        // return error;
      }
    }
  }*/
  render(){
    // const {app}=this.state;
    app.rightbar=<Rightbar/>;
    app.footer=<Footer/>;
    if(app){
      return (
        <Router {...app} />
      );
    }else{
      return <div>loading...</div>;
    }
  }
}


