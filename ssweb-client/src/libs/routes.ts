import Jlog from '@/components/views/Jlog';
import Event from '@/components/views/Event';

export const routes = [
  {
    name: 'JLOG',
    path: '/',
    exact: true,
    component: Jlog,
  },
  {
    name: '이벤트',
    path: '/event',
    exact: true,
    component: Event,
  },
];
