import React, { Component } from 'react';
import style from './style.scss';
/**
 * Displays the user profile
 */
export default class UserProfile extends Component {
  render() {
    return (
      <div className={style.UserProfile}>
        <div className={style.User}>
          <div className={style.name}>Jack Oliver</div>
          <div className={style.image}>
            <img src="https://www.gravatar.com/avatar/2542459f73a84cb2d474edcf57573906?d=retro&r=g&s=48" alt="profile" />
          </div>
        </div>
      </div>
    );
  }
}
