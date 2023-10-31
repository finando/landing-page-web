import {
  $,
  Slot,
  component$,
  type QwikIntrinsicElements,
  useStylesScoped$,
  useStore,
  type QwikMouseEvent,
  useVisibleTask$,
} from '@builder.io/qwik';

import styles from './styles.css?inline';

type ButtonProps = QwikIntrinsicElements['button'];

interface Props extends ButtonProps {
  variant?: 'text' | 'contained' | 'outlined' | 'icon';
  size?: 'small' | 'medium' | 'large';
  colour?: 'neutral' | 'blue' | 'red' | 'yellow' | 'green';
  theme?: 'light' | 'dark';
  startIcon?: boolean;
  endIcon?: boolean;
}

interface Ripple {
  id: string;
  x: number;
  y: number;
  size: number;
  duration: number;
}

export default component$<Props>(
  ({
    type = 'button',
    variant = 'text',
    size = 'medium',
    colour = 'neutral',
    theme = 'light',
    disabled,
    startIcon,
    endIcon,
    ...props
  }) => {
    useStylesScoped$(styles);

    const store = useStore<{ ripples: Ripple[] }>({
      ripples: [],
    });

    const createRipple = $(
      ({ clientX, clientY }: QwikMouseEvent, currentTarget: HTMLElement) => {
        const { height, width, x, y } = currentTarget.getBoundingClientRect();
        const rippleSize = width > height ? width : height;

        store.ripples.push({
          id: crypto.randomUUID(),
          x: clientX - x - rippleSize / 2,
          y: clientY - y - rippleSize / 2,
          size: rippleSize,
          duration: 850,
        });
      }
    );

    useVisibleTask$(({ track, cleanup }) => {
      track(() => store.ripples.map(({ id }) => id).join());

      let bounce: number | undefined;

      if (store.ripples.length > 0) {
        window.clearTimeout(bounce);

        bounce = window.setTimeout(() => {
          store.ripples = [];
          window.clearTimeout(bounce);
        }, 850 * 4);
      }

      cleanup(() => window.clearTimeout(bounce));
    });

    return (
      <button
        type={type}
        data-variant={variant}
        data-size={size}
        data-colour={colour}
        data-theme={theme}
        disabled={disabled}
        {...props}
      >
        {startIcon && variant !== 'icon' && (
          <i class='start'>
            <Slot name='start-icon' />
          </i>
        )}
        {variant === 'icon' ? (
          <i>
            {startIcon ? <Slot name='start-icon' /> : <Slot name='end-icon' />}
          </i>
        ) : (
          <Slot />
        )}
        {endIcon && variant !== 'icon' && (
          <i class='end'>
            <Slot name='end-icon' />
          </i>
        )}
        {!disabled && (
          <div
            class='ripple-container'
            data-ignore-cursor-position={variant === 'icon'}
            onMouseDown$={createRipple}
          >
            {store.ripples.map(({ id, x, y, size: rippleSize, duration }) => (
              <span
                key={`ripple-${id}`}
                class='ripple'
                style={{
                  height: `${rippleSize}px`,
                  width: `${rippleSize}px`,
                  top: `${y}px`,
                  left: `${x}px`,
                  animationDuration: `${duration}ms`,
                }}
              />
            ))}
          </div>
        )}
      </button>
    );
  }
);
