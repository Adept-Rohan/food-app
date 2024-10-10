import React from "react"
import Svg ,  { Path } from "react-native-svg" 
import { SvgProps } from "react-native-svg";

interface Notification extends SvgProps {
    width?: number;
    height?: number;
    fill?: string;
  }
 
 const Notification = (props: Notification) => {
    return (
        <Svg {...props} width="24" height="24" fill="#000000" viewBox="0 0 256 256"><Path d="M152,144a8,8,0,0,1-8,8H112a8,8,0,0,1-6.65-12.44L129.05,104H112a8,8,0,0,1,0-16h32a8,8,0,0,1,6.65,12.44L127,136h17A8,8,0,0,1,152,144Zm69.84,48A15.8,15.8,0,0,1,208,200H167.19a40,40,0,0,1-78.38,0H48a16,16,0,0,1-13.8-24.06C39.75,166.38,48,139.34,48,104a80,80,0,1,1,160,0c0,35.33,8.26,62.38,13.81,71.94A15.89,15.89,0,0,1,221.84,192Zm-71.22,8H105.38a24,24,0,0,0,45.24,0ZM208,184c-7.73-13.27-16-43.95-16-80a64,64,0,1,0-128,0c0,36.06-8.28,66.74-16,80Z"></Path></Svg>
    )
} 

export default Notification