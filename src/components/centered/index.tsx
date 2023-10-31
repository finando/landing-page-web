import { component$, useStylesScoped$, Slot } from '@builder.io/qwik';

import styles from './styles.css?inline';

interface Props {
  vertical?: boolean;
  horizontal?: boolean;
}

export default component$<Props>(({ vertical, horizontal }) => {
  useStylesScoped$(styles);

  return (
    <div data-vertical={vertical} data-horizontal={horizontal}>
      <Slot />
    </div>
  );
});
