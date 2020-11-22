import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

import './page.scss';

const Page = ({ children }) => (
  <div className="page">
    <Header />
    <div className="page__content">
      {children}
    </div>
  </div>
);

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
]).isRequired,
};


export default Page;
