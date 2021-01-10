// console.log('Hello from service-worker.js');
import { precacheAndRoute } from 'workbox-precaching';

console.log('Hello from sw.js');

// Use with precache injection
// @ts-ignore
// eslint-disable-next-line
precacheAndRoute(self.__WB_MANIFEST);
