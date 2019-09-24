import { ViewStyle, TextStyle } from 'react-native';

export type ContentLoaderProps = {
  primaryColor: string;
  secondaryColor: string;
  animationDuration: number;
  loading: boolean;
  active: boolean;
  title: boolean;
  listSize: number;
  titleStyles: ViewStyle;
  avatar: boolean;
  aShape: 'square' | 'circle';
  aSize: 'small' | 'large' | 'default' | number;
  reverse: boolean;
  containerStyles: ViewStyle;
  paragraph: boolean;
  pHeight: number | string;
  pWidth: string | number | Array<number | string>;
  pRows: number;
  tWidth: string | number;
  tHeight: string | number;
  paragraphStyles: ViewStyle;
};
