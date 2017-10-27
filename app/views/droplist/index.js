import * as React from 'react';

import {List} from 'yrui';

import './index.less';

const profile={
  name:'profile',
  list:[{
    pic:'用',
    h4:'用户信息',
    p:'',
    icon:'weixin',
  },{
    pic:'消',
    h4:'消息',
    p:'',
    icon:'weixin',
  },{
    pic:'设',
    h4:'设置',
    p:'',
    icon:'weixin',
  },{
    pic:'退',
    h4:'退出',
    p:'',
    url:'#/user/login',
    icon:'weixin',
  }],
};
const theme={
  name:'theme',
  list:['头部','LOGO','侧边栏','选中'],
};

export class Profile extends React.Component{
  listClick=(name,v)=>{
    console.log(name,v);
  };
  render(){
    return(
      <div>
        <List {...profile} click={this.listClick} />
      </div>
    );
  }
}

export class Theme extends React.Component {
  render(){
    return(
      <div className="theme-select">
        {
          <article className="y-lists">
            <h4 className="y-list-title">{theme.name}</h4>
            {
              theme.list.map((v,k)=>{
                return(
                  <div key={name+k} className="y-list">
                    <h4>{v}</h4>
                    <ul className="theme-select">
                      <li />
                      <li />
                      <li />
                      <li />
                      <li />
                    </ul>
                  </div>
                );
              })
            }
          </article>
        }
      </div>
    );
  }
}
