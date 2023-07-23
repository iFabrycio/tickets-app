import React from 'react';
import PropTypes from 'prop-types';

const NarrowConstrainedContainer = ({ children }) => (
  <div
    style={{
      maxWidth: '800px', // Adjust the maximum width as needed
      margin: '0 auto',
      padding: '0 20px', // Adjust the padding as needed
    }}
  >
    {children}
  </div>
);

NarrowConstrainedContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NarrowConstrainedContainer;