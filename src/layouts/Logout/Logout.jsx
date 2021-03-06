import React, { Component } from 'react';
import Cookies from 'universal-cookie';
class Logout extends Component {
    logout = () => {
        const cookies = new Cookies();
        cookies.set('VOILK_USERNAME', null);
        cookies.set('VOILK_POSTING', null);
        cookies.set('VOILK_POSTINGPUB', null);
        window.location.href = "/login" 
    }
    componentDidMount() {
      this.logout()
    }
    render() { 
        return ( 
            <div className="content">
              <a className="btn btn-primary" onClick={this.logout}> Click here </a>
              to logout
            </div>
         );
    }
}
 
export default Logout;