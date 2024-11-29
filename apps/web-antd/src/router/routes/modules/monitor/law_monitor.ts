import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'lucide:layout-dashboard',
      order: -1,
      title: $t('law.law.law_monitor'),
    },
    name: 'law_monitor',
    path: '/',
    children: [
      {
        name: 'law_monitor_index',
        path: '/index',
        component: () => import('#/views/law_monitor/home/index.vue'),
        meta: {
          affixTab: true,
          icon: 'lucide:area-chart',
          title: $t('law.law.law_monitor'),
        },
      },
    ],
  },
];

export default routes;
