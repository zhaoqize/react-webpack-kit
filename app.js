import reqwest from 'reqwest';
import React from 'react';
import ReactDOM from 'react-dom';

var Header = React.createClass({
   handleClick:function(){
     console.log(this.refs.head);
     console.log(this.refs.theInput.getDOMNode());
     console.log(ReactDOM.findDOMNode(this.refs.head));
   },
   render:function(){
     return (
      <div style={{ backgroundColor:'blue' }} onClick={ this.handleClick } ref='head'>
        <p>Header组件</p>
        <input ref='theInput'/>
      </div>
     )
   }
})

var ComponentDemo = React.createClass({
//默认state
  getInitialState() {
    return {
      current: 1,
      openKeys: [],
      result_data : {}
    };
  },
//默认props
  getDefaultProps() {
      return {
        key:{
          value:2
        }
      };
  },
  //静态方法  调用 Sider. getBusinessName()
  statics:{ 
     getBusinessName:function(){
       return console.log('getBusinessName方法被调用。。。')
     }
   },
  handleClick(e) {
     console.log('div被点击。。。');
     console.log(this.refs.cct);
     console.log(ReactDOM.findDOMNode(this.refs.cct))
  },
  componentDidMount: function() {

    //异步请求
    reqwest({
      url: 'http://localhost:90/menu',
      method: 'get',
      type: 'json'
    }).then(result => {
      if(this.isMounted()){
        this.setState({
          result_data : result.data
        });
      }
      
    },function(err, msg){
       console.log(err)
       console.log(msg)
    });

    //使用props
    console.log(this.props.key.value)

  },
  componentWillReceiveProps(nextProps) {
      //接受新的props时候被触发
  },
  render() {

    return (
      <div>
          <Header ref='cct'/>
          <div style={{ height:'100%',width:200 }} className='btn'  onClick={ this.handleClick }>CCT部分</div>
      </div>
    );
  }
})

ReactDOM.render(<ComponentDemo />,document.getElementById('contain'));





