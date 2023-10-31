import { setupServiceWorker } from '@builder.io/qwik-city/service-worker';

declare const self: ServiceWorkerGlobalScope;

setupServiceWorker();

self.addEventListener('install', () => {
  self.skipWaiting().catch(() => {});
});

self.addEventListener('activate', () => {
  self.clients.claim().catch(() => {});
});
