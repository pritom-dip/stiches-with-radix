import { styled, CSS } from '@lib/utils/theme';
import { PropsWithChildren } from 'react';

const StyledText = styled('span', {
  fontFamily: '$sans',
  variants: {
    variant: {
      h1: {
        fontSize: '2rem',
        fontWeight: '$bold',
        color: '$coal24',
        lineHeight: '3rem'
      },
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},

      p1: {
        fontSize: '$xl',
        fontWeight: '$normal',
        color: '$coal48',
        lineHeight: '1.6875rem'
      },
      p2: {
        fontSize: '$lg',
        fontWeight: '$normal',
        color: '$coal48',
        lineHeight: '1.6875rem'
      },
      p3: {},
      p4: {},
      p5: {}
    },

    showEllipsis: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      false: {}
    },

    lineClamp: {
      true: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        whiteSpace: 'pre-line'
      },
      false: {}
    },

    spread: {
      true: {
        wordSpacing: '0.0625rem',
        letterSpacing: '0.0225rem'
      },
      false: {}
    }
  }
});

type Props = {
  ellipsis?: number | string;
  clamp?: number;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p1'
    | 'p2'
    | 'p3'
    | 'p4'
    | 'p5';

  light?: boolean;
  medium?: boolean;
  align?: 'start' | 'end' | 'center' | 'normal';
  spread?: boolean;
  color?: string;
  weight?: 'normal' | 'bold' | 'medium';

  css?: CSS;
};

const Typography = ({
  ellipsis,
  clamp,
  variant,
  color,
  weight,
  ...props
}: PropsWithChildren<Props>) => {
  const css: CSS = {};
  if (ellipsis) {
    css.width = ellipsis;
  }
  if (clamp) {
    css.WebkitLineClamp = clamp;
  }

  return (
    <StyledText
      {...props}
      variant={variant}
      showEllipsis={ellipsis !== undefined || clamp !== undefined}
      lineClamp={clamp !== undefined}
      css={{
        ...css,
        color: color ? `${color} !important` : undefined,
        fontWeight: weight ? `$${weight} !important` : undefined,
        textAlign: props.align ? props.align : 'normal',
        ...props.css
      }}
    />
  );
};

export { Typography };
