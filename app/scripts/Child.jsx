class Child extends React.Component {
  render() {
    return (
      <div>
        and this is the <b>{this.props.name}</b>.
      </div>
    )
  }
}
export default Child;
/*
var Child = React.createClass({
  render: function(){
    return (
      <div>
        and this is the <b>{this.props.name}</b>.
      </div>
    )
  }
});
*/
//module.exports = Child;
