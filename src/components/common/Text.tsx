import styled from '@emotion/native';
import {ViewStyle} from 'react-native/types';
import React from 'react';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX | string;

type FontType = {
  fontSize: number;
  fontColor?: Color;

  style?: ViewStyle | null;
};

const Text = ({
  fontSize = 14,
  fontColor = null,
  children,
  numberOfLines,
  ellipsizeMode,
  style,
}: {
  fontSize?: number;
  fontColor?: string | null;
  numberOfLines?: number | undefined;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
  children: React.ReactNode | React.ReactNode[];
  style?: ViewStyle;
}) => {
  return (
    <CustomText
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      fontSize={fontSize}
      fontColor={fontColor ? fontColor : '#26282B'}
      style={style ? style : null}>
      {children}
    </CustomText>
  );
};

export default Text;

const CustomText = styled.Text<FontType>`
  font-size: ${props => props.fontSize.toString()}px;
  color: ${props => props.fontColor};

  ${props => props.style};
`;
