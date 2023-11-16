import React, { useContext } from 'react'
import Nav from './Nav';
import { MyContext } from '@/Helper/Context';

const Header = (props) => {
  const user = useContext(MyContext);
  return (
    <div className='bg-blue-200 p-3 rounded-md'>
      {user}
      <Nav num={props.num}/>
    </div>
  )
}

export default Header;
