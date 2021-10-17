//icon interface
export interface IconInterface {
  name: string;
  size: number;
  color: string;
}

//helper types
export type _String = string;
export type _Mixed = string | null;
export type _Number = number;
export type _Boolean = boolean;
export type __Mixed = string | boolean;
export type _Any = any;

//buttonInterface
type buttonMode = 'text' | 'contained' | 'outlined';
export interface ButtonInterface {
  icon?: string;
  color?: string;
  text: string;
  mode?: buttonMode;
  onPress?: any;
  fullWidth?: boolean;
  disabled?: boolean;
  style: any;
  noReverse?: boolean;
  contentStyle?: any;
}

//statusInterface
export type StatusImages = {
  image: string;
  word: string;
};
export interface StatusInterface {
  images?: StatusImages[];
  showViews?: boolean;
  imageStyles?: any;
}

//homecard interface
export interface HomeInterface {
  images: string[];
  hospitalName: string;
  time: string;
  event: string;
  likes?: number;
  comments?: string[];
  displayPicture?: string;
  description?: string;
}
//homecard interface

//avatar interface
export interface AvatarInterface {
  size: number;
  source: string;
  avatarStyle?: any;
}
//avatar interface

//menu interface
interface MenuItems {
  image: string;
  id: number | string;
  serviceName: string;
}
export interface MenuInterface {
  menu: MenuItems[];
}
//menu interface
