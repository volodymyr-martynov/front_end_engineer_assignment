'use server';

import apiCall from '@/lib/api/apiCall';
import { IApiResponse } from '@/types/apiResponse';
import { IStore } from '@/types/store';

export async function getStores(): Promise<IApiResponse<IStore>> {
  return apiCall<IStore>({ path: '/stores', limit: 10 });
}
