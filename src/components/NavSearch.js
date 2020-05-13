import React from 'react';

import Main from './Main';

const NavSearch = (props) => {
  let query = props.match.params.nav;
  return <Main query={query} />;
};

export default NavSearch;
