import * as React from 'react';
import {Row,Col,Table,Code,Tree,Items,Item} from 'yrui';
import thead from './thead';
const tbody=[{
  key:'data',
  expr:'树数据',
  type:'array',
  values:'-',
  default:'[]',
},{
  key:'getData',
  expr:'获取选中的数据',
  type:'function',
  values:'-',
  default:'-',
}];
const data=[{
  name:'1',
  child:[{
    name:'11',
  }],
},{
  name:'2',
  child:[{
    name:'21',
    child:[{
      name:'211',
      child:[{
        name:'2111',
      }],
    },{
      name:'212',
      child:[{
        name:'2121',
      }],
    }],
  }],
},{
  name:'3',
  child:[{
    name:'31',
  },{
    name:'32',
  },{
    name:'33',
  }],
},{
  name:'4',
  child:[{
    name:'41',
  }],
}];

const code=`
const data=[{
  name:'1',
  child:[{
    name:'11',
  }],
},{
  name:'2',
  child:[{
    name:'21',
    child:[{
      name:'211',
      child:[{
        name:'2111',
      }],
    },{
      name:'212',
      child:[{
        name:'2121',
      }],
    }],
  }],
},{
  name:'3',
  child:[{
    name:'31',
  },{
    name:'32',
  },{
    name:'33',
  }],
},{
  name:'4',
  child:[{
    name:'41',
  }],
}];

<Tree data={data} getData={this.getData} />
`;

export default class TreeDemo extends React.Component{
  state={
    selData:'什么也没选',
  };
  getData=(data)=>{
    this.setState({
      selData:JSON.stringify(data),
    });
  };

  render(){
    return(
      <Items>
        <Item>
          <Row gutter={12}>
            <Col span={6}>
              <Tree data={data} getData={this.getData} />
            </Col>
            <Col span={6}>
              <div>
                <h4>你选中了：</h4>
                {
                  this.state.selData
                }
              </div>
            </Col>
          </Row>
        </Item>
        <Item>
          <div className="textarea">
            <h4>代码示例</h4>
            <Code title="demo" code={code} />
          </div>
        </Item>
        <Item>
          <h2>tree配置</h2>
          <Table thead={thead} tbody={tbody} />
        </Item>
      </Items>
    );
  }
}
