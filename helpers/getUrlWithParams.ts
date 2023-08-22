import { urlSearchPostsParams } from '@/app/api';

export const getUrlWithParams = (
  url: string,
  params: typeof urlSearchPostsParams,
) => {
  return `${url}?${params}`;
};
