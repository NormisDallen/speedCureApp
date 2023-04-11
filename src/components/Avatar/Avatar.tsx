import React from 'react'
import {Avatar} from "react-native-paper"
import { AvatarInterface } from '../../types/types';

const AvatarComponent = ({size, source, avatarStyle}:AvatarInterface) => {
    return (
       <Avatar.Image size={size} source={{uri:source}} style={avatarStyle}/>
    )
}

export default AvatarComponent
