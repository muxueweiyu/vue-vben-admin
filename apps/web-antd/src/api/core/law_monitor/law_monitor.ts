import type { RouteRecordStringComponent } from '@vben/types';

import { requestClient } from '#/api/request';

/**
 * 获取用户所有菜单
 */
export async function getAllLawApi() {
  return requestClient.post<RouteRecordStringComponent[]>(
    '/law_monitor/law_monitor',
  );
}
