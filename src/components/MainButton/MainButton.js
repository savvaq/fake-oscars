import './MainButton.css'
import { useState } from 'react';

const MainButton = (props) => {

  return (
    <>
			<button>{props.ButtonText}</button>
    </>
  )
}

export default MainButton;