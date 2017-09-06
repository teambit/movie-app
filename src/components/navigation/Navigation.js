import React from 'react';
import style from './style.scss';
import '../../global.css';

/**
 * @render react
 * @name Navigation component
 * @description Main navigation for an app.
 * @example
 * <Navigation
 *    links={[
 *      { label: 'Browse', href: 'http://browse.to.somewhere' },
 *      { label: 'My List', href: '/my-list' },
 *      { label: 'Top Picks', href: '/top' },
 *      { label: 'Recent', href: '/recent' }
 *    ]}
 * />
 */
const Navigation = ({ links }) => (
  <div id="navigation" className={style.Navigation}>
    <nav>
      <ul>
        {links.map((link, index) =>
          <li key={index}>
            {link.label}
          </li>
        )}
      </ul>
    </nav>
  </div>
);

Navigation.defaultProps = {
  links: [
    { label: 'Browse', href: 'http://browse.to.somewhere' },
    { label: 'My List', href: '/my-list' },
    { label: 'Top Picks', href: '/top' },
  ]
}

export default Navigation;
