import { component$, useStyles$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';

import RouterHead from '@app/components/router-head';

import globalStyles from './global.css?inline';

export default component$(() => {
  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body>
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
