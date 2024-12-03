'use server';

import apiCall from '@/lib/api/apiCall';
import { IApiResponseList } from '@/types/apiResponse';
import { IStore } from '@/types/store';

export async function getStores(): Promise<IApiResponseList<IStore>> {
  return apiCall<IApiResponseList<IStore>>({ path: '/stores', limit: 10 });
}
