import { styled } from '@lib/utils/theme';
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
      default: {
        background: '$dark1',
        color: '$light1'
      }
    }
  }
});

type Props = {
  variant?: 'default' | 'purple';
} & React.HTMLAttributes<HTMLDivElement>;

const Button = ({
  children,
  variant = 'default',
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
