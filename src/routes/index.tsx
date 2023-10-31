import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import Animated from '@app/components/animated';
import Centered from '@app/components/centered';
import Logo from '@app/components/logo';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <Centered vertical horizontal>
      <Animated animation='zoom-pop-in'>
        <Centered horizontal>
          <div id='logo-slot'>
            <Logo />
          </div>
        </Centered>
      </Animated>
      <Animated animation='zoom-pop-in' delay='0.6s'>
        <h1>Veien til bedre privatøkonomi</h1>
      </Animated>
    </Centered>
  );
});

export const head: DocumentHead = {
  title: 'Finando | Veien til bedre privatøkonomi',
  meta: [
    {
      name: 'description',
      content:
        'Få økt økonomisk selvtillit med Finando: Personlige anbefalinger, data og målverktøy gir kontroll over din økonomiske fremtid.',
    },
  ],
};
