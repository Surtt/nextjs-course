export const urlSearchPostsParams = (start: number, limit: number) =>
  new URLSearchParams({
    _start: start.toString(),
    _limit: limit.toString(),
  });

export const API = {
  posts: `${process.env.NEXT_PUBLIC_DOMAIN}/posts`,
};
