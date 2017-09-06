import React from 'react';
import style from './style.scss';
import '../../global.css';
/**
 * @render react
 * @name UserProfile
 * @description Displays the user profile
 * @example
 * <UserProfile
 *    username={"Ela loveface"}
 * />
 */
const UserProfile = ({ username = 'Jack Oliver' }) => (
  <div className={style.UserProfile}>
    <div className={style.User}>
      <div id="x" className={style.name}>{username}</div>
      <div className={style.image}>
        <img src="https://www.gravatar.com/avatar/2542459f73a84cb2d474edcf57573906?d=retro&r=g&s=48" alt="profile" />
      </div>
    </div>
  </div>
);

export default UserProfile;
