import { CSS, styled } from '@lib/utils/theme';
import { PropsWithChildren } from 'react';

const StyledButton = styled('div', {
  outline: 'none',
  padding: '20px',
  cursor: 'pointer',
  variants: {
    variant: {
      purple: {
        background: 'purple',
        color: 'white'
      },
      primary: {
        background: '$dark1',
        color: '$light2'
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
});

type Props = {
  variant?: 'primary' | 'purple' | undefined;
  css?: CSS;
} & React.HTMLAttributes<HTMLDivElement>;

const Button = ({ children, ...props }: PropsWithChildren<Props>) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
