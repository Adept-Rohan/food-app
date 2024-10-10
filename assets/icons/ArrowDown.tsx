import Svg ,  { Path } from "react-native-svg" 
import { SvgProps } from "react-native-svg";

interface ArrowDownIconProps extends SvgProps {
    width?: number;
    height?: number;
    fill?: string;
  }
 
 const ArrowDown = (props: ArrowDownIconProps) => {
    return (
       
        <Svg {...props} width="20" height="20" fill="#000000" viewBox="0 0 256 256"><Path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></Path></Svg>
    )
} 

export default ArrowDown

