import * as React from 'react';
import {Row,Col,Form,FormItem,Table} from 'yrui';

const thead=[{
  key:'name',
  value:'参数',
},{
  key:'value',
  value:'值',
}];
let tbody=[{
  name:'name',
  value:'null',
},{
  name:'icon',
  value:'null',
},{
  name:'img',
  value:'null',
},{
  name:'animate',
  value:'null',
},{
  name:'msg',
  value:'null',
},{
  name:'drop',
  value:'null',
}];

export default class Nav extends React.Component{
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
  updateRow=()=>{

  };
	render(){
    const {menu}=this.state;
    return (
      <div>
        <Form horizontal getFormData={this.getFD}>
          <Row gutter={8}>
            <Col span={6}>
              <h4>leftNav配置</h4>
              <FormItem label="name" name="name1" opts={{placeholder:'name',value:''}} />
              <FormItem label="icon" name="icon1" opts={{placeholder:'icon',value:''}} />
              <FormItem label="img" name="img1" opts={{placeholder:'img',value:''}} />
              <FormItem label="animate" name="animate1" opts={{placeholder:'animate',value:''}} />
              <FormItem label="msg" name="msg1" opts={{placeholder:'msg',value:''}} />
              <FormItem label="drop" name="drop1" opts={{placeholder:'drop',value:''}} />
            </Col>
            <Col span={6}>
              <h4><p>rightNav配置</p></h4>
              <FormItem label="name" name="name2" opts={{placeholder:'name',value:''}} />
              <FormItem label="icon" name="icon2" opts={{placeholder:'icon',value:''}} />
              <FormItem label="img" name="img2" opts={{placeholder:'img',value:''}} />
              <FormItem label="animate" name="animate2" opts={{placeholder:'animate',value:''}} />
              <FormItem label="msg" name="msg2" opts={{placeholder:'msg',value:''}} />
              <FormItem label="drop" name="drop2" opts={{placeholder:'drop',value:''}} />
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
