import * as React from 'react';
import {Row,Col,Form,FormItem,Input,tools} from 'yrui';

export default class Router extends React.Component{
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
        <Col span={6}>
          <Form horizontal getFormData={this.getFD}>
            <h4>route配置</h4>
            <FormItem label="url" name="url" opts={{placeholder:'url',value:''}} />
            <FormItem label="title" name="title" opts={{placeholder:'title',value:''}} />
            <FormItem label="component" name="component" opts={{placeholder:'component',value:''}} />
            <FormItem label="leftIcon" name="leftIcon" opts={{placeholder:'leftIcon',value:''}} />
            <FormItem label="noMenu" name="noMenu" opts={{placeholder:'noMenu',value:''}} />
            <FormItem label="subMenu" name="subMenu" opts={{placeholder:'subMenu',value:''}} />
          </Form>
        </Col>
      </Row>
    );
  }
}
