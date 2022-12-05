import { CSS, styled } from '@lib/utils/theme';
import { PropsWithChildren, ReactNode } from 'react';

const StyledBox = styled('div', {});

type Props = {
  css?: CSS;
} & React.HTMLAttributes<HTMLDivElement>;

const Box = ({ children, ...props }: PropsWithChildren<Props>) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};

export default Box;
