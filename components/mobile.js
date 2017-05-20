var MediaQuery = require('react-responsive');
var React = require('react');


var value1 = "desktop";
var value2 = "mobile";


var Mobile = React.createClass({

    getInitialState: function () {
         
        return {value: 100};
    },

    render: function(){
        return (
          <div>
            <MediaQuery minDeviceWidth={1224} values={{deviceWidth: 1600}}>  
              {(matches) => {
                if (matches) { //Desktop
                    this.setState({value: value1});
                }
                return null;
            }}
            </MediaQuery>

            <MediaQuery maxDeviceWidth={1224}>
              {(matches) => {
                if (matches) {
                    this.setState({value: value2});
                }  
                return null;
            }}
            </MediaQuery>

            <MediaQuery orientation='portrait'>
               {(matches) => {
                if (matches) {
                    this.setState({value: value2});
                }  
                return null;
            }}
            </MediaQuery>

            <MediaQuery orientation='landscape'>
               {(matches) => {
                if (matches) {
                    this.setState({value: value2});
                }  
                return null;
            }}
            </MediaQuery>

            <MediaQuery minResolution='2dppx'>
              {(matches) => {
                if (matches) {
                    this.setState({value: value2});
                }  
                return null;
            }}
            </MediaQuery>
          </div>
        );
      }

});


module.exports = Mobile;