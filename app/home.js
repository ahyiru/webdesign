import * as React from 'react';
import {Row,Col,Form,FormItem,Input} from 'yrui';

export default class Home extends React.Component{
	state={
    reg:true,
  };
  getFD=(d)=>{
    console.log(d);
  };
  getSelectVal=(v)=>{
    console.log(v);
  };
  test=()=>{
    this.setState({
      reg:!this.state.reg,
    });
  };
	render(){
    const {menu}=this.state;
    return (
      <Row gutter={8}>
        <h2>主要配置</h2>
        <Col span={6}>
          <Form horizontal getFormData={this.getFD}>
            <h4><p>路由配置</p></h4>
            <FormItem type="radio" label="单选" name="radio" opts={{opt:[{value:'11',key:'a1'},{value:'22',key:'a2'}],value:'a1'}} />
            <FormItem type="checkbox" label="多选" name="checkbox" opts={{opt:[{value:'11'},{value:'22'}],value:['11','22']}} />
            <FormItem type="select" label="下拉选择" name="select" opts={{opt:[{value:'11'},{value:'22'}]}} />
            <FormItem type="switch" label="切换" name="switch" opts={{value:true}} />
            <FormItem type="text" label="input" name="text" opts={{text:'button',color:'info'}} />
            <FormItem type="textarea" label="textarea" opts={{placeholder:'邮箱',value:''}} />
            <FormItem type="" label="密码" opts={{placeholder:'密码',value:'',type:'password'}} />
            <FormItem type="" label="等级" opts={{placeholder:'等级',value:'0',disabled:true}} required />
            <FormItem type="" label="等级1" required rules={[{reg:this.state.reg,tips:'hhhhhhhhh'}]}>
              <Input placeholder="ttt" value="" />
            </FormItem>

            <FormItem label="rightbar" opts={{placeholder:'用户名',value:''}} />
            <FormItem label="footer" opts={{placeholder:'用户名',value:''}} />
            <FormItem label="routers" opts={{placeholder:'邮箱',value:''}} />
            <FormItem label="routeAnimate" opts={{placeholder:'密码',value:'',type:'password'}} />
            <FormItem label="scroll" opts={{placeholder:'等级',value:'0',disabled:true}} />
            <FormItem label="sidebarScroll" opts={{placeholder:'密码',value:'',type:'password'}} />
            <FormItem label="browserRouter" opts={{placeholder:'等级',value:'0',disabled:true}} />
          </Form>
        </Col>
      </Row>
    );
  }
}
