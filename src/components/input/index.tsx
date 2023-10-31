import {
  component$,
  type QwikIntrinsicElements,
  useStylesScoped$,
  type QRL,
} from '@builder.io/qwik';

import styles from './styles.css?inline';

type InputProps = Omit<QwikIntrinsicElements['input'], 'children'>;

interface Props extends InputProps {
  value: string | number;
  onInput$: QRL<(event: Event, target: HTMLInputElement) => void>;
  theme?: 'light' | 'dark';
  fluid?: boolean;
  textAlign?:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent';
}

export default component$<Props>(({ fluid, textAlign, ...props }) => {
  useStylesScoped$(styles);

  return <input {...props} data-fluid={fluid} data-text-align={textAlign} />;
});
