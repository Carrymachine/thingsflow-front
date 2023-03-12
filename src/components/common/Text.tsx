import styled from '@emotion/native';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX | string;
type MARGIN = `${number}px ${number}px ${number}px ${number})px`;

type FontType = {
  fontSize: number;
  fontColor?: Color;
  margin?: MARGIN | string;
};

const Text = ({
  fontSize = 14,
  fontColor = null,
  margin = null,
  children,
  numberOfLines,
  ellipsizeMode,
}: {
  fontSize?: number;
  fontColor?: string | null;
  margin?: string | null;
  numberOfLines?: number | undefined;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <CustomText
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      fontSize={fontSize}
      fontColor={fontColor ? fontColor : '#26282B'}
      margin={margin ? margin : '0px 0px 0px 0px'}>
      {children}
    </CustomText>
  );
};

export default Text;

const CustomText = styled.Text<FontType>`
  font-size: ${props => props.fontSize.toString()}px;
  color: ${props => props.fontColor};
  margin: ${props => props.margin};
`;
