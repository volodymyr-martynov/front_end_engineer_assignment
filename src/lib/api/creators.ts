'use server';

import apiCall from '@/lib/api/apiCall';
import { IApiResponse } from '@/types/apiResponse';
import { ICreator } from '@/types/creator';

export async function getCreators(): Promise<IApiResponse<ICreator>> {
  return apiCall<ICreator>({ path: '/creators', limit: 10 });
}
