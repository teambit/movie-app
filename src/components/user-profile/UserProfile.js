import React, { Component } from 'react';

/**
 * Displays the user profile
 */
export default class UserProfile extends Component {
  render() {
    return (
      <div className="UserProfile">
        <div className="User">
          <div className="name">Jack Oliver</div>
          <div className="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/profile/profile-512_1.jpg" alt="profile" /></div>
        </div>
      </div>
    );
  }
}
