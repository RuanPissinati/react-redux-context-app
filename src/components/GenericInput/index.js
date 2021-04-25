import React, { memo } from 'react';


import { Input } from './style';

const GenericInput = (props) => {
  return <Input {...props}/>;
}

export default memo(GenericInput);