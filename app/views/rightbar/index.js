import * as React from 'react';
import './index.less';
import {Items,Item,Switch,Checkbox,Radio,tools} from 'yrui';
const {hasClass,removeClass,addClass}=tools;

export default class RightBar extends React.Component{
  state={
    val1:[1],
    val2:null,
    val3:null,
    val4:null,
  };
  componentDidMount(){
    
  }
  getCurCls=(ele)=>{
    const theme=['theme1','theme2','theme3','theme4'];
    let ctheme=theme[0];
    if(hasClass(ele,theme[1])){
      ctheme=theme[1];
    }else if(hasClass(ele,theme[2])){
      ctheme=theme[2];
    }else if(hasClass(ele,theme[3])){
      ctheme=theme[3];
    }
    return ctheme;
  }
  changeTheme=(theme)=>{
    const body=document.body;
    const cls=this.getCurCls(body);
    removeClass(body,cls);
    addClass(body,theme);
  };
  chang1=(v)=>{
    this.changeTheme('theme1');
    this.setState({
      val1:[1],
      val2:null,
      val3:null,
      val4:null,
    });
  };
  chang2=(v)=>{
    this.changeTheme('theme2');
    this.setState({
      val1:null,
      val2:[1],
      val3:null,
      val4:null,
    });
  };
  chang3=(v)=>{
    this.changeTheme('theme3');
    this.setState({
      val1:null,
      val2:null,
      val3:[1],
      val4:null,
    });
  };
  chang4=(v)=>{
    this.changeTheme('theme4');
    this.setState({
      val1:null,
      val2:null,
      val3:null,
      val4:[1],
    });
  };
  render(){
    const {val1,val2,val3,val4}=this.state;
    return <div className="rightbar">
      <Items>
        {/*<Item>
                  <span>横屏</span>
                  <span ><Switch value={true} /></span>
                </Item>
                <Item>
                  <span>显示底部栏</span>
                  <span ><Switch value={true} change={this.chang1} /></span>
                </Item>*/}
        <Item>
          <span>主题 1</span>
          <span><Checkbox opt={[{value:'',key:1}]} value={val1} change={this.chang1} /></span>
        </Item>
        <Item>
          <span>主题 2</span>
          <span><Checkbox opt={[{value:'',key:1}]} value={val2} change={this.chang2} /></span>
        </Item>
        <Item>
          <span>主题 3</span>
          <span><Checkbox opt={[{value:'',key:1}]} value={val3} change={this.chang3} /></span>
        </Item>
        <Item>
          <span>主题 4</span>
          <span><Checkbox opt={[{value:'',key:1}]} value={val4} change={this.chang4} /></span>
        </Item>
      </Items>
    </div>;
  };
}