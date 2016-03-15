import Child from './Child';
class Parent extends React.Component {
  render() {
    return (
      <div>
        <div> This is the parent. </div>
        <Child name="child"/>
      </div>
    )
  }
}
export default Parent;

//var Child = require('./Child');
/*
var Parent = React.createClass({
  render: function(){
    return (
      <div>
        <div> This is the parent. </div>
        <Child name="child"/>
      </div>
    )
  }
});
module.exports = Parent;
*/
