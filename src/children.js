import { Children, PropTypes } from 'react'
 import { render } from 'react-dom'
  const Display = ({ ifTruthy=true, children }) => (ifTruthy) ?  Children.only(children) : null   
  
 export default Display
           
