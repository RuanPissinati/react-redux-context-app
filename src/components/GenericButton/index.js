import React, { memo } from 'react';
import { Button } from './style'


const GenericButton = ({ block, action, text, disabled}) => {

  return <Button block={block} type="button" disabled={disabled}  onClick={action} >
    {text}
  </Button>;
}

export default memo(GenericButton);