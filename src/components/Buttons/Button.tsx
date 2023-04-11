import React from "react";
import { Button } from 'react-native-paper';
import { ButtonInterface } from "../../types/types";



const ButtonComponent = ({icon, color, text, mode, onPress, fullWidth, disabled, style, contentStyle, noReverse}:ButtonInterface)=>{
    return (
        <Button
          contentStyle = {{
              flexDirection:noReverse?"row":"row-reverse",
              width:fullWidth&&"100%",
              ...contentStyle
          }}
         icon = {icon}
         mode = {mode}
         color = {color}
         uppercase={false}
         onPress = {onPress}
         disabled={disabled}
         style={style}
        >{text}</Button>
    )
}

export default ButtonComponent