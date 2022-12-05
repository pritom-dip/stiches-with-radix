import { styled } from '@lib/utils/theme';
import { PropsWithChildren } from 'react';

const StyledContainer = styled('div', {
  width: '100%',
  padding: '20px',
  '@bp1': {
    width: '440px'
  },
  '@bp2': {
    width: '750ppx'
  },
  '@bp3': {
    width: '950ppx'
  }
});

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const Container = ({ children }: PropsWithChildren<Props>) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
