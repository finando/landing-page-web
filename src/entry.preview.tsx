import { createQwikCity } from '@builder.io/qwik-city/middleware/node';
import qwikCityPlan from '@qwik-city-plan';
import { manifest } from '@qwik-client-manifest';

import render from './entry.ssr';

export default createQwikCity({ render, qwikCityPlan, manifest });
