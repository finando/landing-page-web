import { component$, useStylesScoped$, Slot } from '@builder.io/qwik';

import styles from './styles.css?inline';

interface Props {
  animation: 'fade-in-up' | 'zoom-pop-in';
  delay?:
    | '0.1s'
    | '0.2s'
    | '0.3s'
    | '0.4s'
    | '0.5s'
    | '0.6s'
    | '0.7s'
    | '0.8s'
    | '0.9s'
    | '1s';
}

export default component$<Props>(({ animation, delay }) => {
  useStylesScoped$(styles);

  return (
    <div data-animation={animation} data-delay={delay}>
      <Slot />
    </div>
  );
});
