import * as React from 'react';
import {Row,Col,Form,FormItem,Input} from 'yrui';

export default class Brand extends React.Component{
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
            <h4>brand配置</h4>
            <FormItem label="logo" name="logo" opts={{placeholder:'logo',value:''}} />
            <FormItem label="title" name="title" opts={{placeholder:'title',value:''}} />
            <FormItem label="subtitle" name="subtitle" opts={{placeholder:'subtitle',value:''}} />
          </Form>
        </Col>
      </Row>
    );
  }
}
