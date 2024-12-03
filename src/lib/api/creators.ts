'use server';

import apiCall from '@/lib/api/apiCall';
import { IApiResponseList } from '@/types/apiResponse';
import { ICreator } from '@/types/creator';

export async function getCreators(): Promise<IApiResponseList<ICreator>> {
  return apiCall<IApiResponseList<ICreator>>({ path: '/creators', limit: 10 });
}
